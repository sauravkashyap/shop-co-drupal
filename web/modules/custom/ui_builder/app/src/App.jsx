import { useState, useEffect, useRef } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  MeasuringStrategy,
  pointerWithin,
  rectIntersection,
} from '@dnd-kit/core';
import './App.css';
import { Agentation } from 'agentation';

// Constants & Utils
import { ELEMENT_CATEGORIES, CONTAINER_TAGS } from './constants/elements';
import { 
  deepClone, 
  findNodeById, 
  findNodeLocation, 
  hydrateTree, 
  deleteNodeById, 
  canAcceptChild 
} from './utils/treeUtils';

// Components
import { NodeCard } from './components/NodeCard';
import { SortableNode } from './components/SortableNode';
import { CanvasRoot } from './components/CanvasRoot';
import { Sidebar } from './components/Sidebar';
import { PropertiesPanel } from './components/PropertiesPanel';
import { ActionBar } from './components/ActionBar';
import { StyleBuilder } from './components/StyleBuilder';
import { DragStateContext } from './contexts/DragStateContext';

function App({ mode, initialLayout, initialSchema, availableComponents: initialComponents, onUpdate, onSavePage: externalSavePage }) {
  const [layoutTree, setLayoutTree] = useState(() => {
    // ... (rest of initial state logic)
    const rawTree = initialLayout || [];
    const hydrateComponents = (nodes) => {
      return (nodes || []).map(node => {
        if (!node) return null;
        let hydratedNode = { ...node };
        if (node.component_id && (!node.children || node.children.length === 0)) {
          const comp = (initialComponents || []).find(c => c.id === node.component_id);
          if (comp) {
            try {
              const masterLayout = typeof comp.layout_tree === 'string' ? JSON.parse(comp.layout_tree) : comp.layout_tree;
              const cloneWithNewIds = (n) => {
                if (!n) return null;
                const nn = { ...n, id: Math.random().toString(36).substr(2, 9) };
                if (nn.children) nn.children = nn.children.map(cloneWithNewIds);
                return nn;
              };
              hydratedNode.children = (masterLayout || []).map(cloneWithNewIds).filter(Boolean);
              hydratedNode.isComponentRoot = true;
            } catch (e) { console.error('Failed to hydrate component on load', e); }
          }
        }
        if (hydratedNode.children) hydratedNode.children = hydrateComponents(hydratedNode.children);
        return hydratedNode;
      }).filter(Boolean);
    };
    return hydrateTree(hydrateComponents(rawTree));
  });

  const [availableComponents, setAvailableComponents] = useState(() => {
    const rawComps = initialComponents || [];
    return rawComps.map(comp => ({
      ...comp,
      layout_tree: comp.layout_tree ? (typeof comp.layout_tree === 'string' ? JSON.parse(comp.layout_tree) : hydrateTree(comp.layout_tree)) : []
    }));
  });
  const [customStyles, setCustomStyles] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [propertiesOpenId, setPropertiesOpenId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [isDraggingGlobal, setIsDraggingGlobal] = useState(false);
  const [isAllCollapsed, setIsAllCollapsed] = useState(false);
  const [pendingParentId, setPendingParentId] = useState(null);

  // Fetch custom styles from Drupal
  useEffect(() => {
    fetch('/api/ui-builder/styles')
      .then(res => res.json())
      .then(data => {
        setCustomStyles(data);
      })
      .catch(err => console.error('Failed to fetch styles:', err));
  }, []);

  const selectStyle = (id) => {
    const style = customStyles.find(s => s.id === id) || { id, label: id, data: null };
    setCurrentStyle(style);
    setSidebarOpen(false);
  };
  
  // Ref so sidebar click handlers always see the latest selectedNodeId (no stale closure)
  const selectedNodeIdRef = useRef(null);
  
  // Single click — select/highlight only (for drag-drop)
  const selectNode = (id) => {
    setSelectedNodeId(id);
    setCurrentStyle(null);
    selectedNodeIdRef.current = id;
  };

  const startTargetedAdd = (parentId) => {
    setPendingParentId(parentId);
    setSidebarOpen(true);
    setSelectedNodeId(parentId);
    selectedNodeIdRef.current = parentId;
  };

  // Double click — open properties panel
  const openProperties = (id) => {
    setSelectedNodeId(id);
    setCurrentStyle(null);
    setPropertiesOpenId(id);
    selectedNodeIdRef.current = id;
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  // Sync to Drupal (Auto-sync for standard mode)
  useEffect(() => {
    if (mode === 'architect') {
      const newSchema = {};
      const transformedTree = deepClone(layoutTree);
      const processNodes = nodes => {
        nodes.forEach(node => {
          const isContainer = CONTAINER_TAGS.includes(node.tag);
          const shouldBeField = node.isField !== undefined ? node.isField : !isContainer;

          if (shouldBeField) {
            const key = node.fieldLabel
              ? node.fieldLabel.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '')
              : `field_${node.id}`;
            
            const title = node.fieldLabel || `${node.tag.toUpperCase()}: ${String(typeof node.content === 'string' ? node.content : (node.tag === 'img' ? 'Image' : '')).substring(0, 20)}`;
            const fieldType = node.tag === 'img' ? 'image' : 'textfield';
            
            newSchema[key] = { 
              type: fieldType, 
              title, 
              default: { mode: node.fieldMode || 'static', value: node.content || '' } 
            };
            node.content = `{{ ${key} }}`;
          } else {
            if (typeof node.content === 'string' && node.content.includes('{{')) {
              node.content = '';
            }
          }
          if (node.children) processNodes(node.children);
        });
      };
      processNodes(transformedTree);
      if (onUpdate) onUpdate(transformedTree, newSchema);
    } else {
      if (onUpdate) onUpdate(layoutTree);
    }
  }, [layoutTree, mode, onUpdate]);
  
  // ── Dynamic CSS Generation ────────────────────────────────────────────────
  useEffect(() => {
    const styleId = 'uib-dynamic-layout-styles';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    const layoutProps = [
      'flexDirection', 
      'justifyContent', 
      'alignItems', 
      'alignSelf', 
      'flexGrow', 
      'flexShrink'
    ];

    const generateRules = (nodes) => {
      let css = '';
      nodes.forEach(node => {
        if (node.props) {
          const rules = [];
          
          if (node.props.flexDirection) rules.push(`flex-direction: ${node.props.flexDirection} !important;`);
          if (node.props.justifyContent) rules.push(`justify-content: ${node.props.justifyContent} !important;`);
          if (node.props.alignItems) rules.push(`align-items: ${node.props.alignItems} !important;`);
          if (node.props.alignSelf) rules.push(`align-self: ${node.props.alignSelf} !important;`);
          
          if (node.props.flexGrow !== undefined && node.props.flexGrow !== 0) rules.push(`flex-grow: ${node.props.flexGrow} !important;`);
          if (node.props.flexShrink !== undefined && node.props.flexShrink !== 1) rules.push(`flex-shrink: ${node.props.flexShrink} !important;`);
          
          if (node.props.width) rules.push(`width: ${node.props.width} !important;`);
          if (node.props.height) rules.push(`height: ${node.props.height} !important;`);
          
          if (rules.length > 0) {
            css += `.uib-${node.id} { ${rules.join(' ')} }\n`;
          }
        }
        if (node.children) css += generateRules(node.children);
      });
      return css;
    };

    styleTag.textContent = generateRules(layoutTree);
  }, [layoutTree]);

  // ── Tree Mutations ──────────────────────────────────────────────────────────

  const moveIntoContainer = (draggedId, containerId) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const locDragged = findNodeLocation(tree, draggedId);
      if (!locDragged) return prev;
      const [dragged] = locDragged.parent.splice(locDragged.index, 1);
      
      const target = findNodeById(tree, containerId);
      if (target) {
        target.children = target.children || [];
        target.children.push(dragged);
      }
      return tree;
    });
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const isSidebarItem = active.data.current?.type === 'sidebar-element';
    console.log('[DnD] dragStart:', active.id, 'sidebar:', isSidebarItem);
    setIsDraggingGlobal(true);

    if (isSidebarItem) {
      const el = active.data.current.element;
      setActiveNode({
        id: active.id,
        tag: el.type,
        label: el.label,
        props: { ...(el.defaultProps || {}) },
        children: []
      });
    } else {
      const node = findNodeById(layoutTree, active.id);
      setActiveNode(node);
    }
  };

  const handleDragOver = (event) => {
    // intentionally left minimal — all logic in handleDragEnd
  };

  const createNewNode = (el) => {
    const cloneWithNewIds = (nodes) => {
      return (nodes || []).map(n => {
        if (!n) return null;
        return {
          ...n,
          tag: n.tag || n.type,
          id: Math.random().toString(36).substr(2, 9),
          children: cloneWithNewIds(n.children)
        };
      }).filter(Boolean);
    };

    return {
      id: Math.random().toString(36).substr(2, 9),
      tag: el.type,
      label: el.label,
      props: { ...(el.defaultProps || { class: '' }) },
      children: el.defaultChildren ? cloneWithNewIds(el.defaultChildren) : [],
      content: el.defaultContent || '',
      fieldMode: 'static',
      isField: el.isField || false,
    };
  };

  const handleRootDragEnd = (event) => {
    const { active, over } = event;
    console.log('[DnD] dragEnd:', active.id, '→', over?.id || 'NONE');
    setActiveNode(null);
    setIsDraggingGlobal(false);
    if (!over) return;

    const isSidebarItem = active.data.current?.type === 'sidebar-element';
    const overId = String(over.id);
    
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      let dragged;

      if (isSidebarItem) {
        const el = active.data.current.element;
        dragged = createNewNode(el);
      } else {
        if (active.id === over.id) return prev;
        const locDragged = findNodeLocation(tree, active.id);
        if (!locDragged) return prev;
        [dragged] = locDragged.parent.splice(locDragged.index, 1);
      }

      // Drop onto canvas root
      if (overId === 'canvas-root') {
        tree.push(dragged);
        return tree;
      }

      // Drop into a gap between children: gap::parentId::index
      if (overId.startsWith('gap::')) {
        const parts = overId.split('::');
        const parentId = parts[1];
        const insertIndex = parseInt(parts[2], 10);

        if (parentId === 'canvas-root') {
          // Insert at specific position in root array
          tree.splice(insertIndex, 0, dragged);
        } else {
          const parentNode = findNodeById(tree, parentId);
          if (parentNode) {
            parentNode.children = parentNode.children || [];
            parentNode.children.splice(insertIndex, 0, dragged);
          } else {
            tree.push(dragged);
          }
        }
        return tree;
      }

      // Drop inside a container: inside::nodeId
      if (overId.startsWith('inside::')) {
        const targetId = overId.replace('inside::', '');
        const targetNode = findNodeById(tree, targetId);
        if (targetNode) {
          targetNode.children = targetNode.children || [];
          targetNode.children.push(dragged);
        } else {
          tree.push(dragged);
        }
        return tree;
      }

      // Fallback: drop directly on a node (legacy behavior)
      const locOver = findNodeLocation(tree, overId);
      if (locOver) {
        const overNode = locOver.parent[locOver.index];
        const isContainerNode = CONTAINER_TAGS.includes(overNode.tag);
        
        if (isContainerNode) {
          overNode.children = overNode.children || [];
          overNode.children.push(dragged);
        } else {
          locOver.parent.splice(locOver.index, 0, dragged);
        }
      } else {
        tree.push(dragged);
      }
      
      return tree;
    });
  };

  const addElement = (el) => {
    const newNode = createNewNode(el);
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const targetId = pendingParentId || selectedNodeIdRef.current;
      
      if (targetId) {
        const target = findNodeById(tree, targetId);
        if (target && canAcceptChild(target, el)) {
          target.children = target.children || [];
          target.children.push(newNode);
          setPendingParentId(null);
          return tree;
        } else if (target) {
          alert(`Cannot add ${el.label} inside ${target.label || target.tag}`);
          return prev;
        }
      }
      setPendingParentId(null);
      return [...tree, newNode];
    });
  };

  const addComponentInstance = (compId) => {
    const comp = availableComponents.find(c => c.id === compId);
    if (!comp) return;

    let masterLayout = [];
    try {
      masterLayout = typeof comp.layout_tree === 'string' ? JSON.parse(comp.layout_tree) : comp.layout_tree;
    } catch (e) {
      console.error('Failed to parse component layout', e);
    }

    const cloneWithNewIds = (nodes) => {
      return (nodes || []).map(n => {
        if (!n) return null;
        return {
          ...n,
          tag: n.tag || n.type,
          id: Math.random().toString(36).substr(2, 9),
          children: cloneWithNewIds(n.children)
        };
      }).filter(Boolean);
    };

    const nodesToAdd = cloneWithNewIds(masterLayout).map(n => ({
      ...n,
      component_id: compId
    }));
    if (nodesToAdd.length === 0) return;

    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const targetId = pendingParentId || selectedNodeIdRef.current;
      
      if (targetId) {
        const target = findNodeById(tree, targetId);
        const targetIsContainer = CONTAINER_TAGS.includes(target?.tag) || (target?.children && target?.children.length > 0);
        if (targetIsContainer) {
          target.children = target.children || [];
          target.children.push(...nodesToAdd);
          setPendingParentId(null);
          return tree;
        }
      }
      setPendingParentId(null);
      return [...tree, ...nodesToAdd];
    });
  };

  const resetToDefaultProps = (id) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, id);
      if (node) {
        let original = null;
        for (const cat of ELEMENT_CATEGORIES) {
          original = cat.elements.find(el => el.type === node.tag && el.label === node.label);
          if (original) break;
        }
        if (original) {
          node.props = { ...(original.defaultProps || { class: '' }) };
          if (!node.isField) node.content = original.defaultContent || '';
        }
      }
      return tree;
    });
  };

  const updateNodeProperty = (id, key, value) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, id);
      if (node) { 
        node.props = node.props || {}; 
        if (value === '' || value === null || value === undefined) {
          delete node.props[key];
        } else {
          node.props[key] = value; 
        }
      }
      return tree;
    });
  };

  const updateNodeField = (id, updates) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, id);
      if (node) Object.assign(node, updates);
      return tree;
    });
  };

  const updateInstanceValue = (instanceId, key, value, valueMode = 'static') => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, instanceId);
      if (node) { node.values = { ...(node.values || {}), [key]: { mode: valueMode, value } }; }
      return tree;
    });
  };

  const removeNode = (id) => {
    setLayoutTree(prev => deleteNodeById(prev, id));
    setSelectedNodeId(null);
    selectedNodeIdRef.current = null;
  };

  const duplicateNode = (id) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const loc = findNodeLocation(tree, id);
      if (!loc) return prev;

      const nodeToDuplicate = loc.parent[loc.index];
      
      const cloneWithNewIds = (n) => {
        const newNode = {
          ...n,
          id: Math.random().toString(36).substr(2, 9),
        };
        if (newNode.children) {
          newNode.children = newNode.children.map(cloneWithNewIds);
        }
        return newNode;
      };

      const duplicatedNode = cloneWithNewIds(nodeToDuplicate);
      loc.parent.splice(loc.index + 1, 0, duplicatedNode);
      return tree;
    });
  };

  const quickAddChild = (parentId, type) => {
    // Find the template for 'type'
    let template = null;
    for (const cat of ELEMENT_CATEGORIES) {
      template = cat.elements.find(el => el.type === type);
      if (template) break;
    }
    if (!template) return;

    const newNode = {
      id: Math.random().toString(36).substr(2, 9),
      tag: template.type,
      label: template.label,
      props: { ...(template.defaultProps || {}) },
      content: template.defaultContent || '',
      children: template.defaultChildren ? JSON.parse(JSON.stringify(template.defaultChildren)).map(c => ({...c, id: Math.random().toString(36).substr(2, 9)})) : [],
      isField: template.isField
    };

    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const parent = findNodeById(tree, parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(newNode);
      }
      return tree;
    });
  };

  // Helper to collect all fields from a subtree to generate a form schema
  const extractFormSchema = (node) => {
    const schema = {};
    const traverse = (n) => {
      if (n.fieldLabel) {
        const key = n.fieldLabel.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        schema[key] = {
          title: n.fieldLabel,
          type: n.tag === 'img' ? 'image' : 'textfield',
          default: { mode: n.fieldMode || 'static', value: n.content || '' }
        };
      }
      if (n.children) n.children.forEach(traverse);
    };
    traverse(node);
    return schema;
  };

  const handleSaveAsComponent = async (targetId = null) => {
    let nodeToSave = null;
    if (targetId) {
      nodeToSave = findNodeById(layoutTree, targetId);
    } else if (selectedNodeId) {
      nodeToSave = findNodeById(layoutTree, selectedNodeId);
    } else if (layoutTree.length === 1) {
      nodeToSave = layoutTree[0];
    }

    if (!nodeToSave) {
      alert('Please select a section or component to save.');
      return;
    }

    const label = prompt('Enter component name:', nodeToSave.label || 'New Component');
    if (!label) return;
    const id = label.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');

    const schema = extractFormSchema(nodeToSave);
    const payload = {
      label,
      id,
      layout_tree: JSON.stringify([nodeToSave]),
      form_schema: JSON.stringify(schema)
    };

    try {
      const response = await fetch('/api/ui-builder/component/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        alert('Component saved successfully!');
        // Refresh component list
        window.location.reload(); 
      } else {
        alert('Failed to save component: ' + (result.message || 'Unknown error'));
      }
    } catch (e) {
      console.error(e);
      alert('Network error while saving component.');
    }
  };

  const handleSaveStyle = async (styleData) => {
    try {
      const payload = { ...styleData };
      const response = await fetch('/api/ui-builder/style/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setCustomStyles(prev => {
          let next = [...prev];
          if (styleData.old_id && styleData.old_id !== styleData.id) {
            next = next.filter(s => s.id !== styleData.old_id);
          }
          const index = next.findIndex(s => s.id === styleData.id);
          if (index > -1) {
            next[index] = { ...next[index], ...styleData };
          } else {
            next.push({ ...styleData });
          }
          return next;
        });

        // Update any components in layoutTree that used the old class name
        if (styleData.old_id && styleData.old_id !== styleData.id) {
          setLayoutTree(prev => {
            const tree = deepClone(prev);
            const oldClass = `uib-${styleData.old_id}`;
            const newClass = `uib-${styleData.id}`;
            const updateClasses = (nodes) => {
              nodes.forEach(node => {
                if (node.props && node.props.class) {
                  const classes = node.props.class.split(' ');
                  const classIndex = classes.indexOf(oldClass);
                  if (classIndex !== -1) {
                    classes[classIndex] = newClass;
                    node.props.class = classes.join(' ');
                  }
                }
                if (node.children) updateClasses(node.children);
              });
            };
            updateClasses(tree);
            return tree;
          });
          
          // Update currentStyle if it was the one being edited
          if (currentStyle && currentStyle.id === styleData.old_id) {
            setCurrentStyle({ ...styleData });
          }
        }
        alert('Style saved!');
      }
    } catch (err) {
      alert('Failed to save style');
    }
  };

  const handleSavePage = () => {
    if (mode === 'composer' && externalSavePage) {
      // In composer mode, use the external save handler which triggers Drupal form submission
      externalSavePage();
    } else {
      // In architect mode, click the Drupal form submit button
      const saveBtn = document.querySelector('input[id^="edit-submit"]');
      if (saveBtn) {
        saveBtn.click();
      } else {
        alert('Layout synced. Click "Save" on the Drupal page to persist changes.');
      }
    }
  };

  const selectedNode = selectedNodeId ? findNodeById(layoutTree, selectedNodeId) : null;
  const propertiesNode = propertiesOpenId ? findNodeById(layoutTree, propertiesOpenId) : null;
  const selectedComponent = propertiesNode
    ? availableComponents.find(c => c.id === propertiesNode.component_id)
    : null;
  
  // If currentStyle is set, it might be an existing one or a placeholder
  const selectedStyle = currentStyle;

  const customCollisionDetection = (args) => {
    const pointerCollisions = pointerWithin(args);
    const filteredCollisions = pointerCollisions.filter(c => c.id !== args.active.id);
    
    // Prioritize: gap drops > inside drops > direct node drops > canvas-root
    const gapCollisions = filteredCollisions.filter(c => String(c.id).startsWith('gap::'));
    const insideCollisions = filteredCollisions.filter(c => String(c.id).startsWith('inside::'));
    const rootCollision = filteredCollisions.find(c => c.id === 'canvas-root');
    const nodeCollisions = filteredCollisions.filter(c => 
      !String(c.id).startsWith('gap::') && 
      !String(c.id).startsWith('inside::') && 
      c.id !== 'canvas-root'
    );

    // Gaps are the most precise — use the closest one
    if (gapCollisions.length > 0) {
      return closestCenter({
        ...args,
        droppableContainers: args.droppableContainers.filter(container =>
          gapCollisions.some(c => c.id === container.id)
        )
      });
    }

    // Inside container zones
    if (insideCollisions.length > 0) {
      return closestCenter({
        ...args,
        droppableContainers: args.droppableContainers.filter(container =>
          insideCollisions.some(c => c.id === container.id)
        )
      });
    }

    // Direct node drops (legacy fallback)
    if (nodeCollisions.length > 0) {
      return closestCenter({
        ...args,
        droppableContainers: args.droppableContainers.filter(container => 
          nodeCollisions.some(c => c.id === container.id)
        )
      });
    }

    if (rootCollision) return [rootCollision];
    return closestCenter(args);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: '0.5' } },
    }),
  };

  return (
    <div className={`ui-builder-container mode-${mode}`}>
      <ActionBar 
        mode={mode} 
        onSavePage={handleSavePage}
        onSaveAsComponent={handleSaveAsComponent}
        onToggleStyles={() => {}}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
      />

      <div className="builder-body">
        {/* Sidebar — inside flex flow so it pushes canvas right */}
        {sidebarOpen && (
          <Sidebar 
            mode={mode}
            availableComponents={availableComponents}
            customStyles={customStyles}
            selectedNodeId={selectedNodeId}
            selectedNode={selectedNode}
            addElement={(el) => { addElement(el); }}
            addComponentInstance={(id) => { addComponentInstance(id); }}
            onSelectStyle={selectStyle}
            onDeselect={() => { 
              setSelectedNodeId(null); 
              setCurrentStyle(null);
              setPropertiesOpenId(null);
              selectedNodeIdRef.current = null; 
            }}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        <main className="ui-builder-canvas">
          <div className="canvas-content" onClick={() => { setSelectedNodeId(null); setCurrentStyle(null); setPropertiesOpenId(null); selectedNodeIdRef.current = null; }}>
            {/* Site Studio-style "Layout canvas" blue header */}
            <div className="ss-canvas-header" onClick={e => e.stopPropagation()}>
              <span className="ss-canvas-header-title">▼ Layout canvas</span>
              <span className="ss-canvas-header-right">
                <span className="ss-canvas-link">Preview</span>
                <span className="ss-canvas-icon" title="Toggle visibility">👁</span>
                <span className="ss-canvas-icon" title="Settings">⚙</span>
                <span className="ss-canvas-icon" title="Help">❓</span>
              </span>
            </div>

            {/* Add element bar + Options */}
            <div className="ss-canvas-toolbar" onClick={e => e.stopPropagation()}>
              <button 
                type="button" 
                className="ss-canvas-add-btn"
                onClick={() => setSidebarOpen(true)}
                title="Add element"
              >
                +
              </button>
              <span style={{ flex: 1 }} />
              <button 
                type="button" 
                className="ss-canvas-options-btn"
                onClick={() => {
                  const newState = !isAllCollapsed;
                  setIsAllCollapsed(newState);
                  window.dispatchEvent(new CustomEvent(newState ? 'ss-collapse-all' : 'ss-expand-all'));
                }}
              >
                {isAllCollapsed ? 'Expand All' : 'Collapse All'}
              </button>
            </div>

            {layoutTree.length === 0 ? (
              <div className="ss-canvas-empty">
                <p>Click <strong>+</strong> or open the Elements panel to start building.</p>
              </div>
            ) : (
              <DragStateContext.Provider value={{ isDraggingGlobal }}>
              <DndContext 
                sensors={sensors} 
                collisionDetection={customCollisionDetection} 
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleRootDragEnd}
                measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
              >
                  <CanvasRoot 
                    nodes={layoutTree} 
                    selectedId={selectedNodeId} 
                    onSelect={selectNode}
                    onOpenProperties={openProperties}
                    onDuplicate={duplicateNode}
                    onDelete={removeNode}
                    onQuickAdd={quickAddChild}
                    onStartTargetedAdd={startTargetedAdd}
                    onSaveAsComponent={handleSaveAsComponent}
                    pendingParentId={pendingParentId}
                    availableComponents={availableComponents}
                  />

                <DragOverlay dropAnimation={dropAnimation}>
                  {activeNode ? (
                    <NodeCard
                      node={activeNode}
                      mode={mode}
                      selectedId={null}
                      onSelect={() => {}}
                      onQuickAdd={() => {}}
                      availableComponents={availableComponents}
                      isOverlay
                    />
                  ) : null}
                </DragOverlay>
              </DndContext>
              </DragStateContext.Provider>
            )}
          </div>
        </main>
      </div>

      {/* Properties panel — renders as fixed overlay on double-click */}
      <PropertiesPanel 
        mode={mode}
        selectedNode={propertiesNode}
        selectedNodeId={propertiesOpenId}
        selectedComponent={selectedComponent}
        updateNodeProperty={updateNodeProperty}
        resetToDefaultProps={resetToDefaultProps}
        removeNode={(id) => { removeNode(id); setPropertiesOpenId(null); }}
        updateNodeField={updateNodeField}
        updateInstanceValue={updateInstanceValue}
        onDeselect={() => { 
          setPropertiesOpenId(null);
          setSelectedNodeId(null); 
          setCurrentStyle(null);
          selectedNodeIdRef.current = null; 
        }}
        customStyles={customStyles}
      />

      {/* Style Builder Overlay */}
      {currentStyle && (
        <StyleBuilder 
          style={currentStyle}
          onSave={(updatedStyle) => {
            handleSaveStyle(updatedStyle);
            setCurrentStyle(null);
          }}
          onBack={() => setCurrentStyle(null)}
        />
      )}
      {/* Agentation — visual feedback tool for AI agents */}
      <Agentation endpoint="http://localhost:4747" />
    </div>
  );
}

export default App;
