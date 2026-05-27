import { create } from 'zustand';
import { deepClone, findNodeById, findNodeLocation, deleteNodeById, canAcceptChild, applyComponentValues, createNewNode, findComponentRootForNode } from '../utils/treeUtils';
import { ELEMENT_CATEGORIES, CONTAINER_TAGS } from '../constants/elements';

export const useBuilderStore = create((set, get) => ({
  layoutTree: [],
  availableComponents: [],
  customStyles: [],
  selectedNodeId: null,
  currentStyle: null,
  propertiesOpenId: null,
  sidebarOpen: false,
  activeNode: null,
  isDraggingGlobal: false,
  isAllCollapsed: false,
  pendingParentId: null,
  mode: 'standard', // 'standard' or 'architect'

  setLayoutTree: (tree) => set({ layoutTree: typeof tree === 'function' ? tree(get().layoutTree) : tree }),
  setAvailableComponents: (comps) => set({ availableComponents: comps }),
  setCustomStyles: (styles) => set({ customStyles: styles }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setCurrentStyle: (style) => set({ currentStyle: style }),
  setPropertiesOpenId: (id) => set({ propertiesOpenId: id }),
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
  setActiveNode: (node) => set({ activeNode: node }),
  setIsDraggingGlobal: (isDragging) => set({ isDraggingGlobal: isDragging }),
  setIsAllCollapsed: (isCollapsed) => set({ isAllCollapsed: isCollapsed }),
  setPendingParentId: (id) => set({ pendingParentId: id }),
  setMode: (mode) => set({ mode }),

  selectStyle: (id) => {
    const { customStyles } = get();
    const style = customStyles.find(s => s.id === id) || { id, label: id, data: null };
    set({ currentStyle: style, sidebarOpen: false });
  },

  selectNode: (id) => {
    const { layoutTree } = get();
    const compRoot = findComponentRootForNode(layoutTree, id);
    const targetId = compRoot ? compRoot.id : id;
    set({ selectedNodeId: targetId, currentStyle: null });
  },

  startTargetedAdd: (parentId) => {
    set({ pendingParentId: parentId, sidebarOpen: true, selectedNodeId: parentId });
  },

  openProperties: (id) => {
    const { layoutTree } = get();
    const compRoot = findComponentRootForNode(layoutTree, id);
    const targetId = compRoot ? compRoot.id : id;
    set({ selectedNodeId: targetId, currentStyle: null, propertiesOpenId: targetId });
  },

  updateNodeProperty: (id, key, value) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
      const node = findNodeById(tree, id);
      if (node) { 
        node.props = node.props || {}; 
        if (value === '' || value === null || value === undefined) {
          delete node.props[key];
        } else {
          node.props[key] = value; 
        }
      }
      return { layoutTree: tree };
    });
  },

  updateNodeField: (id, updates) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
      const node = findNodeById(tree, id);
      if (node) Object.assign(node, updates);
      return { layoutTree: tree };
    });
  },

  updateInstanceValue: (instanceId, key, value, valueMode = 'static', extra = {}) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
      const node = findNodeById(tree, instanceId);
      if (node) {
        node.values = { ...(node.values || {}), [key]: { ...(node.values?.[key] || {}), mode: valueMode, value, ...extra } };
        applyComponentValues(node.children, node.values);
      }
      return { layoutTree: tree };
    });
  },

  updateInstanceStyles: (id, newStyleData) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
      const node = findNodeById(tree, id);
      if (node) {
        node.instanceStyles = newStyleData;
      }
      return { layoutTree: tree };
    });
  },

  removeNode: (id) => {
    set((state) => {
      const node = findNodeById(state.layoutTree, id);
      const hasChildren = node?.children && node.children.length > 0;
      
      if (hasChildren) {
        const confirmed = window.confirm(
          `This element has ${node.children.length} child element(s). Are you sure you want to delete it along with all its children?`
        );
        if (!confirmed) return state;
      }

      return { 
        layoutTree: deleteNodeById(state.layoutTree, id),
        selectedNodeId: null
      };
    });
  },

  duplicateNode: (id) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
      const loc = findNodeLocation(tree, id);
      if (!loc) return state;

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
      return { layoutTree: tree };
    });
  },

  quickAddChild: (parentId, type) => {
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

    set((state) => {
      const tree = deepClone(state.layoutTree);
      const parent = findNodeById(tree, parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(newNode);
      }
      return { layoutTree: tree };
    });
  },

  handleSaveAsComponent: async (targetId = null) => {
    const state = get();
    const idToSave = targetId || state.selectedNodeId;
    if (!idToSave) return;
    const nodeToSave = findNodeById(state.layoutTree, idToSave);
    if (!nodeToSave) return;

    const label = window.prompt('Enter a name for this new component:', nodeToSave.label || nodeToSave.tag);
    if (!label) return;
    const id = label.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');

    const extractFormSchema = (node) => {
      const schema = {};
      const traverse = (n) => {
        let key = n.fieldLabel ? n.fieldLabel.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '') : '';
        if (!key && n.fieldMode === 'mapping' && typeof n.content === 'string') {
          key = n.content.toLowerCase().replace(/\s+/g, '_').replace(/[:.]/g, '_').replace(/[^\w]/g, '');
        }
        if (!key && (n.isField || !CONTAINER_TAGS.includes(n.tag))) {
          key = `field_${n.id}`;
        }
        
        let previewContent = typeof n.content === 'string' ? n.content.trim() : (n.tag === 'img' ? 'Image' : '');
        if (/^\{\{\s*field_/i.test(previewContent)) previewContent = '';
        const defaultTitle = previewContent ? `${n.tag.toUpperCase()}: ${previewContent.substring(0, 20)}` : `${n.tag.toUpperCase()} Field`;
        const title = n.fieldLabel || (n.fieldMode === 'mapping' ? `Mapped: ${n.content}` : defaultTitle);
        const fieldType = n.tag === 'img' ? 'image' : 'textfield';

        if (n.isField !== false && !CONTAINER_TAGS.includes(n.tag)) {
           schema[key] = { 
             type: fieldType, 
             title, 
             default: { mode: n.fieldMode || 'static', value: n.content || '' } 
           };
        }
        if (n.children) {
          n.children.forEach(traverse);
        }
      };
      traverse(node);
      return schema;
    };

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
        window.location.reload(); 
      } else {
        alert('Failed to save component: ' + (result.message || 'Unknown error'));
      }
    } catch (e) {
      console.error(e);
      alert('Network error while saving component.');
    }
  },

  resetToDefaultProps: (id) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
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
      return { layoutTree: tree };
    });
  },

  moveIntoContainer: (draggedId, containerId) => {
    set((state) => {
      const tree = deepClone(state.layoutTree);
      const locDragged = findNodeLocation(tree, draggedId);
      if (!locDragged) return state;
      const [dragged] = locDragged.parent.splice(locDragged.index, 1);
      
      const target = findNodeById(tree, containerId);
      if (target) {
        target.children = target.children || [];
        target.children.push(dragged);
      }
      return { layoutTree: tree };
    });
  },

  handleDragStart: (event) => {
    const { active } = event;
    const isSidebarItem = active.data.current?.type === 'sidebar-element';
    set({ isDraggingGlobal: true });

    if (isSidebarItem) {
      const el = active.data.current.element;
      set({ activeNode: {
        id: active.id,
        tag: el.type,
        label: el.label,
        props: { ...(el.defaultProps || {}) },
        children: []
      } });
    } else {
      set((state) => {
        const node = findNodeById(state.layoutTree, active.id);
        return { activeNode: node };
      });
    }
  },

  handleRootDragEnd: (event) => {
    const { active, over } = event;
    const isSidebarItem = active.data.current?.type === 'sidebar-element';
    
    set({ activeNode: null, isDraggingGlobal: false });
    
    if (!over) return;

    const overId = String(over.id);
    
    set((state) => {
      const tree = deepClone(state.layoutTree);
      let dragged;

      if (isSidebarItem) {
        const el = active.data.current.element;
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
        dragged = {
          id: Math.random().toString(36).substr(2, 9),
          tag: el.type,
          label: el.label,
          props: { ...(el.defaultProps || { class: '' }) },
          children: el.defaultChildren ? cloneWithNewIds(el.defaultChildren) : [],
          content: el.defaultContent || '',
          fieldMode: 'static',
          isField: el.isField || false,
        };
      } else {
        if (active.id === over.id) return state;
        const locDragged = findNodeLocation(tree, active.id);
        if (!locDragged) return state;
        [dragged] = locDragged.parent.splice(locDragged.index, 1);
      }

      if (overId === 'canvas-root') {
        tree.push(dragged);
        return { layoutTree: tree };
      }

      if (overId.startsWith('gap::')) {
        const parts = overId.split('::');
        const parentId = parts[1];
        const insertIndex = parseInt(parts[2], 10);

        if (parentId === 'canvas-root') {
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
        return { layoutTree: tree };
      }

      if (overId.startsWith('inside::')) {
        const targetId = overId.replace('inside::', '');
        const targetNode = findNodeById(tree, targetId);
        if (targetNode) {
          targetNode.children = targetNode.children || [];
          targetNode.children.push(dragged);
        } else {
          tree.push(dragged);
        }
        return { layoutTree: tree };
      }

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
      
      return { layoutTree: tree };
    });
  },

  addElement: (el) => {
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

    const newNode = {
      id: Math.random().toString(36).substr(2, 9),
      tag: el.type,
      label: el.label,
      props: { ...(el.defaultProps || { class: '' }) },
      children: el.defaultChildren ? cloneWithNewIds(el.defaultChildren) : [],
      content: el.defaultContent || '',
      fieldMode: 'static',
      isField: el.isField || false,
    };

    set((state) => {
      const tree = deepClone(state.layoutTree);
      const targetId = state.pendingParentId || state.selectedNodeId;
      
      if (targetId) {
        const target = findNodeById(tree, targetId);
        if (target && canAcceptChild(target, el)) {
          target.children = target.children || [];
          target.children.push(newNode);
          return { layoutTree: tree, pendingParentId: null };
        } else if (target) {
          alert(`Cannot add ${el.label} inside ${target.label || target.tag}`);
          return state;
        }
      }
      return { layoutTree: [...tree, newNode], pendingParentId: null };
    });
  },

  addComponentInstance: (compId) => {
    set((state) => {
      const comp = state.availableComponents.find(c => c.id === compId);
      if (!comp) return state;

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
            originalId: n.originalId || n.id,
            originalContent: n.originalContent !== undefined ? n.originalContent : n.content,
            originalProps: n.originalProps || (n.props ? { ...n.props } : {}),
            children: cloneWithNewIds(n.children)
          };
        }).filter(Boolean);
      };

      const initialValues = {};
      const schema = typeof comp.form_schema === 'string' ? JSON.parse(comp.form_schema) : comp.form_schema;
      if (schema && typeof schema === 'object') {
        Object.entries(schema).forEach(([fieldKey, fieldDef]) => {
          if (fieldDef && fieldDef.default) {
            initialValues[fieldKey] = { ...fieldDef.default };
          }
        });
      }

      const clonedChildren = cloneWithNewIds(masterLayout);
      const masterRoot = masterLayout && masterLayout[0];
      const isSingleLeaf =
        masterLayout &&
        masterLayout.length === 1 &&
        masterRoot &&
        !CONTAINER_TAGS.includes(masterRoot.tag || masterRoot.type || '') &&
        !(masterRoot.children && masterRoot.children.length > 0);

      const tree = deepClone(state.layoutTree);
      const targetId = state.pendingParentId || state.selectedNodeId;
      let target = null;
      if (targetId) {
        target = findNodeById(tree, targetId);
      }

      if (isSingleLeaf) {
        const singleNode = {
          ...clonedChildren[0],
          component_id: compId,
          isComponentRoot: true,
          values: initialValues
        };
        applyComponentValues([singleNode], initialValues);
        
        if (target) {
          const targetIsContainer = CONTAINER_TAGS.includes(target?.tag) || (target?.children && target?.children.length > 0);
          if (targetIsContainer) {
            target.children = target.children || [];
            target.children.push(singleNode);
            return { layoutTree: tree, pendingParentId: null };
          }
        }
        return { layoutTree: [...tree, singleNode], pendingParentId: null };
      }

      applyComponentValues(clonedChildren, initialValues);
      const nodesToAdd = clonedChildren.map(n => ({
        ...n,
        component_id: compId,
        isComponentRoot: true,
        values: initialValues
      }));

      if (target) {
        const targetIsContainer = CONTAINER_TAGS.includes(target?.tag) || (target?.children && target?.children.length > 0);
        if (targetIsContainer) {
          target.children = target.children || [];
          target.children.push(...nodesToAdd);
          return { layoutTree: tree, pendingParentId: null };
        }
      }
      
      return { layoutTree: [...tree, ...nodesToAdd], pendingParentId: null };
    });
  }
}));
