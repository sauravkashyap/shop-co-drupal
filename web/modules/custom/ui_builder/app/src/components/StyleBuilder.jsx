import { useState, useEffect, useRef } from 'react';
import './StyleBuilder.css';

const STANDARD_PROPS = [
  'font-size', 'font-weight', 'color', 'line-height', 'letter-spacing', 'text-align', 'text-transform', 'font-family',
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-top', 'margin-bottom', 'margin-right', 'margin-left',
  'display', 'width', 'height', 'max-width', 'position', 'z-index', 'flex-direction', 'justify-content', 'align-items', 'gap',
  'background-color', 'background', 'border', 'border-radius', 'box-shadow', 'opacity', 'cursor', 'transition'
];

/**
 * Site Studio-style Custom Style Builder.
 * Manages a tree of selectors and properties for a single custom class.
 */
export function StyleBuilder({ style, onSave, onBack }) {
  const [data, setData] = useState(() => {
    let initialData = style.data;
    if (!initialData) {
      return {
        selector: '&',
        properties: {},
        custom_properties: {},
        children: []
      };
    }
    // Deep clone to prevent mutating props
    let clonedData = JSON.parse(JSON.stringify(initialData));
    
    // Migrate old custom CSS properties from properties to custom_properties
    const migrateCustomProps = (node) => {
      if (node.properties) {
        if (!node.custom_properties) node.custom_properties = {};
        Object.keys(node.properties).forEach(key => {
          if (!STANDARD_PROPS.includes(key)) {
            // It's a custom property!
            node.custom_properties[key] = node.properties[key];
            delete node.properties[key];
          }
        });
      }
      if (node.children) {
        node.children.forEach(migrateCustomProps);
      }
    };
    migrateCustomProps(clonedData);
    return clonedData;
  });
  const [selectedNodePath, setSelectedNodePath] = useState(['root']);
  const [label, setLabel] = useState(style.label || style.id);
  const [classId, setClassId] = useState(style.id);

  // Pending custom property state
  const [pendingProp, setPendingProp] = useState('');
  const [pendingValue, setPendingValue] = useState('');
  
  // State for inline renaming or adding
  const [editingNodePath, setEditingNodePath] = useState(null); // Path of node being renamed/added
  const [editValue, setEditValue] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false); // True if editValue is for a new node
  const [collapsedPaths, setCollapsedPaths] = useState(new Set()); // Set of collapsed node path strings

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const handleLabelChange = (e) => {
    const newLabel = e.target.value;
    const prevSlug = slugify(label);
    setLabel(newLabel);
    
    // Auto-update class ID if it matches the slug of the previous label or if it is a default 'style-xxxx' name
    if (classId === prevSlug || classId.startsWith('style-')) {
      setClassId(slugify(newLabel));
    }
  };

  const toggleCollapse = (e, pathStr) => {
    e.stopPropagation();
    setCollapsedPaths(prev => {
      const next = new Set(prev);
      if (next.has(pathStr)) next.delete(pathStr);
      else next.add(pathStr);
      return next;
    });
  };

  const editInputRef = useRef(null);

  // Focus input when editing starts
  useEffect(() => {
    if (editingNodePath && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingNodePath]);

  // Helper to find node by path
  const findNodeByPath = (tree, path) => {
    if (path.length === 1 && path[0] === 'root') return tree;
    let current = tree;
    for (let i = 1; i < path.length; i++) {
      if (!current.children || !current.children[path[i]]) return current;
      current = current.children[path[i]];
    }
    return current;
  };

  // Helper to update node by path
  const updateNodeByPath = (tree, path, updates) => {
    const newTree = JSON.parse(JSON.stringify(tree));
    let current = newTree;
    if (path.length === 1 && path[0] === 'root') {
      Object.assign(current, updates);
    } else {
      for (let i = 1; i < path.length; i++) {
        current = current.children[path[i]];
      }
      Object.assign(current, updates);
    }
    return newTree;
  };

  const selectedNode = findNodeByPath(data, selectedNodePath);

  // ─── Per-node actions ───
  const handleAddSelectorAt = (e, path) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIsAddingNew(true);
    setEditValue(':hover');
    setEditingNodePath([...path, 'new']);
  };

  const handleRenameSelectorAt = (e, path) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (path.length === 1 && path[0] === 'root') return;
    const node = findNodeByPath(data, path);
    setIsAddingNew(false);
    setEditValue(node.selector);
    setEditingNodePath(path);
    setSelectedNodePath(path);
  };

  const handleDeleteSelectorAt = (e, path) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (path.length === 1 && path[0] === 'root') return;

    setData(prev => {
      const newTree = JSON.parse(JSON.stringify(prev));
      let current = newTree;
      for (let i = 1; i < path.length - 1; i++) {
        current = current.children[path[i]];
      }
      const indexToDelete = path[path.length - 1];
      current.children.splice(indexToDelete, 1);
      return newTree;
    });
    setSelectedNodePath(['root']);
  };

  const handleFinishEdit = () => {
    const trimmed = editValue.trim();
    if (!trimmed) {
      setEditingNodePath(null);
      setIsAddingNew(false);
      return;
    }

    if (isAddingNew) {
      const parentPath = editingNodePath.slice(0, -1);
      setData(prev => {
        const newTree = JSON.parse(JSON.stringify(prev));
        let current = newTree;
        if (parentPath[0] !== 'root' || parentPath.length > 1) {
          for (let i = 1; i < parentPath.length; i++) {
            current = current.children[parentPath[i]];
          }
        }
        current.children = current.children || [];
        const newIndex = current.children.length;
        current.children.push({
          selector: trimmed,
          properties: {},
          children: []
        });
        setSelectedNodePath([...parentPath, newIndex]);
        return newTree;
      });
    } else {
      setData(prev => updateNodeByPath(prev, editingNodePath, { selector: trimmed }));
    }

    setEditingNodePath(null);
    setIsAddingNew(false);
  };

  const updateProperty = (prop, value) => {
    const newData = JSON.parse(JSON.stringify(data));
    let target = newData;
    for (let i = 1; i < selectedNodePath.length; i++) {
      target = target.children[selectedNodePath[i]];
    }
    if (!target.properties) target.properties = {};
    if (value) {
      target.properties[prop] = value;
    } else {
      delete target.properties[prop];
    }
    setData(newData);
  };

  const updateCustomProperty = (prop, value, oldProp = null) => {
    const newData = JSON.parse(JSON.stringify(data));
    let target = newData;
    for (let i = 1; i < selectedNodePath.length; i++) {
      target = target.children[selectedNodePath[i]];
    }
    if (!target.custom_properties) target.custom_properties = {};
    
    // If we're renaming a property, delete the old one first
    if (oldProp && oldProp !== prop) {
      delete target.custom_properties[oldProp];
    }
    
    if (value) {
      target.custom_properties[prop] = value;
    } else {
      delete target.custom_properties[prop];
    }
    setData(newData);
  };

  const handleMainSave = () => {
    let finalData = JSON.parse(JSON.stringify(data));
    
    // If there is a pending custom property, apply it to the selected node
    if (pendingProp.trim() && pendingValue.trim()) {
      let target = finalData;
      for (let i = 1; i < selectedNodePath.length; i++) {
        target = target.children[selectedNodePath[i]];
      }
      if (!target.custom_properties) target.custom_properties = {};
      target.custom_properties[pendingProp.trim()] = pendingValue.trim();
    }

    onSave({ 
      ...style, 
      label, 
      id: classId || style.id, 
      old_id: style.id, 
      data: finalData 
    });
  };

  // ─── Drag-and-drop state for selector tree ───
  const [draggedNodePath, setDraggedNodePath] = useState(null);
  const [dropTargetInfo, setDropTargetInfo] = useState(null);

  const moveNode = (fromPath, toPath, position) => {
    if (!fromPath || fromPath.length < 2) return;
    if (JSON.stringify(fromPath) === JSON.stringify(toPath)) return;

    setData(prev => {
      const newTree = JSON.parse(JSON.stringify(prev));

      let fromParent = newTree;
      for (let i = 1; i < fromPath.length - 1; i++) {
        fromParent = fromParent.children[fromPath[i]];
      }
      const fromIndex = fromPath[fromPath.length - 1];
      const [movedNode] = fromParent.children.splice(fromIndex, 1);

      if (position === 'inside') {
        let targetNode = newTree;
        for (let i = 1; i < toPath.length; i++) {
          targetNode = targetNode.children[toPath[i]];
        }
        targetNode.children = targetNode.children || [];
        targetNode.children.push(movedNode);
      } else {
        let toParent = newTree;
        for (let i = 1; i < toPath.length - 1; i++) {
          toParent = toParent.children[toPath[i]];
        }
        let toIndex = toPath[toPath.length - 1];
        const sameParent = fromPath.length === toPath.length &&
          JSON.stringify(fromPath.slice(0, -1)) === JSON.stringify(toPath.slice(0, -1));
        if (sameParent && fromIndex < toIndex) toIndex--;
        if (position === 'after') toIndex++;
        toParent.children.splice(toIndex, 0, movedNode);
      }

      return newTree;
    });
    setSelectedNodePath(['root']);
  };

  const handleTreeDragStart = (e, path) => {
    if (path.length < 2) { e.preventDefault(); return; }
    setDraggedNodePath(path);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');
  };

  const handleTreeDragOver = (e, path, position) => {
    e.preventDefault();
    e.stopPropagation();
    if (!draggedNodePath) return;
    if (JSON.stringify(path) === JSON.stringify(draggedNodePath)) return;
    const dragStr = JSON.stringify(draggedNodePath);
    const targetStr = JSON.stringify(path);
    if (targetStr.startsWith(dragStr.slice(0, -1) + ',')) return;
    e.dataTransfer.dropEffect = 'move';
    setDropTargetInfo({ path, position });
  };

  const handleTreeDrop = (e, path, position) => {
    e.preventDefault();
    e.stopPropagation();
    if (!draggedNodePath) return;
    moveNode(draggedNodePath, path, position);
    setDraggedNodePath(null);
    setDropTargetInfo(null);
  };

  const handleTreeDragEnd = () => {
    setDraggedNodePath(null);
    setDropTargetInfo(null);
  };

  // ─── Determine the display label for a selector ───
  const getSelectorLabel = (selector, isRoot) => {
    if (isRoot) return 'Default';
    return selector || '&';
  };

  // ─── Determine if selector has a "(child)" annotation ───
  const getSelectorAnnotation = (selector, depth) => {
    if (depth <= 1) return '';
    return ' (child)';
  };

  const renderTree = (node, path = ['root'], depth = 0) => {
    const isSelected = JSON.stringify(path) === JSON.stringify(selectedNodePath);
    const isEditing = JSON.stringify(path) === JSON.stringify(editingNodePath);
    const isDragged = draggedNodePath && JSON.stringify(path) === JSON.stringify(draggedNodePath);
    const isRoot = path.length === 1;

    const isDropBefore = dropTargetInfo && 
      JSON.stringify(dropTargetInfo.path) === JSON.stringify(path) && 
      dropTargetInfo.position === 'before';
    const isDropAfter = dropTargetInfo && 
      JSON.stringify(dropTargetInfo.path) === JSON.stringify(path) && 
      dropTargetInfo.position === 'after';
    const isDropInside = dropTargetInfo && 
      JSON.stringify(dropTargetInfo.path) === JSON.stringify(path) && 
      dropTargetInfo.position === 'inside';
    
    const hasChildren = (node.children && node.children.length > 0) || 
      (isAddingNew && JSON.stringify(path) === JSON.stringify(editingNodePath?.slice(0, -1)));
    const pathStr = path.join('-');
    const isCollapsed = collapsedPaths.has(pathStr);

    return (
      <div className={`ss-sel-wrapper ${isRoot ? 'ss-sel-root' : ''}`} key={pathStr}>
        {/* Drop-before indicator */}
        {!isRoot && (
          <div 
            className={`ss-sel-drop-zone ${isDropBefore ? 'active' : ''}`}
            onDragOver={(e) => handleTreeDragOver(e, path, 'before')}
            onDrop={(e) => handleTreeDrop(e, path, 'before')}
          />
        )}

        {/* Row: collapse toggle + connector line + card */}
        <div className="ss-sel-row">
          {/* Collapse/expand toggle for nodes with children */}
          {!isRoot && (
            hasChildren ? (
              <button 
                type="button" 
                className="ss-sel-collapse-toggle"
                onClick={(e) => toggleCollapse(e, pathStr)}
                title={isCollapsed ? 'Expand' : 'Collapse'}
              >{isCollapsed ? '+' : '−'}</button>
            ) : (
              <div className="ss-sel-collapse-spacer" />
            )
          )}

          <div 
            className={`ss-sel-card ${isSelected ? 'ss-sel-selected' : ''} ${isDragged ? 'ss-sel-dragging' : ''} ${isDropInside ? 'ss-sel-drop-inside' : ''} ${isRoot ? 'ss-sel-card-root' : ''}`}
            onClick={() => setSelectedNodePath(path)}
            draggable={!isRoot && !isEditing}
            onDragStart={(e) => handleTreeDragStart(e, path)}
            onDragEnd={handleTreeDragEnd}
            onDragOver={(e) => handleTreeDragOver(e, path, 'inside')}
            onDrop={(e) => handleTreeDrop(e, path, 'inside')}
          >
            {/* Drag handle (non-root only) */}
            {!isRoot && (
              <span className="ss-sel-drag-handle" title="Drag to reorder">✥</span>
            )}

            {/* Selector name or edit input */}
            {isEditing ? (
              <input 
                ref={editInputRef}
                className="ss-sel-edit-input"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onBlur={handleFinishEdit}
                onKeyDown={e => e.key === 'Enter' && handleFinishEdit()}
                onFocus={e => e.target.select()}
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <span className="ss-sel-name" onDoubleClick={(e) => handleRenameSelectorAt(e, path)}>
                {getSelectorLabel(node.selector, isRoot)}
                {!isRoot && depth > 1 && <span className="ss-sel-annotation"> (child)</span>}
              </span>
            )}

            {/* Add child button on the right */}
            <button 
              type="button" 
              className="ss-sel-add"
              title="Add child selector"
              onClick={(e) => handleAddSelectorAt(e, path)}
            >⊕</button>
          </div>
        </div>

        {/* Drop-after indicator */}
        {!isRoot && (
          <div 
            className={`ss-sel-drop-zone ${isDropAfter ? 'active' : ''}`}
            onDragOver={(e) => handleTreeDragOver(e, path, 'after')}
            onDrop={(e) => handleTreeDrop(e, path, 'after')}
          />
        )}

        {/* Children — with tree connector lines */}
        {hasChildren && !isCollapsed && (
          <div className="ss-sel-children">
            {node.children && node.children.map((child, index) => {
              const isLast = index === node.children.length - 1 && 
                !(isAddingNew && JSON.stringify(path) === JSON.stringify(editingNodePath?.slice(0, -1)));
              const childHasChildren = child.children && child.children.length > 0;
              return (
                <div className={`ss-sel-child-item ${isLast ? 'ss-sel-child-last' : ''} ${!childHasChildren ? 'ss-sel-child-leaf' : ''}`} key={index}>
                  {renderTree(child, [...path, index], depth + 1)}
                </div>
              );
            })}
            
            {/* Inline add input */}
            {isAddingNew && JSON.stringify(path) === JSON.stringify(editingNodePath?.slice(0, -1)) && (
              <div className="ss-sel-child-item ss-sel-child-last ss-sel-child-leaf">
                <div className="ss-sel-row">
                  <div className="ss-sel-collapse-spacer" />
                  <div className="ss-sel-card ss-sel-selected">
                    <span className="ss-sel-drag-handle" style={{ visibility: 'hidden' }}>✥</span>
                    <input 
                      ref={editInputRef}
                      className="ss-sel-edit-input"
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      onBlur={handleFinishEdit}
                      onKeyDown={e => e.key === 'Enter' && handleFinishEdit()}
                      onFocus={e => e.target.select()}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="style-builder-overlay" onClick={(e) => { if (e.target === e.currentTarget) onBack(); }}>
      <div className="style-builder-sidebar" onClick={e => e.stopPropagation()}>
        <div className="style-builder-header">
          <div className="header-left">
            <button type="button" className="back-btn" onClick={onBack}>
              <span>←</span> Back to Layout
            </button>
            <div className="style-info">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <input 
                  type="text" 
                  value={label} 
                  onChange={handleLabelChange}
                  className="style-label-input"
                  placeholder="Enter Style Label"
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#64748b' }}>
                  <span>Class:</span>
                  <span style={{ fontFamily: 'monospace' }}>.uib-</span>
                  <input
                    type="text"
                    value={classId}
                    onChange={e => setClassId(slugify(e.target.value))}
                    style={{ border: 'none', background: 'transparent', color: '#64748b', fontFamily: 'monospace', outline: 'none', padding: 0, width: '150px' }}
                    placeholder="class-name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <button type="button" className="save-btn" onClick={handleMainSave}>Save Style</button>
          </div>
        </div>

        <div className="style-builder-body">
          <div className="style-builder-tree">
            <div className="tree-header">Selectors & Modifiers</div>
            <div className="tree-content">
              {renderTree(data)}
            </div>
          </div>

          <div className="style-builder-properties">
            <div className="props-header">
              <h2>{selectedNode.selector === '&' ? `Base class (.uib-${style.id})` : selectedNode.selector}</h2>
              <div className="props-header-path">
                Configuring properties for the selected selector
              </div>
            </div>
            <div className="props-content">
              <div className="property-groups">
                <Group title="Typography" icon="Tt">
                  <Prop label="Font Size" name="font-size" value={selectedNode.properties['font-size']} onChange={updateProperty} placeholder="e.g. 16px" />
                  <Prop label="Font Weight" name="font-weight" value={selectedNode.properties['font-weight']} onChange={updateProperty} type="select" options={['100', '200', '300', '400', '500', '600', '700', '800', '900']} />
                  <Prop label="Color" name="color" type="color" value={selectedNode.properties['color']} onChange={updateProperty} />
                  <Prop label="Line Height" name="line-height" value={selectedNode.properties['line-height']} onChange={updateProperty} placeholder="e.g. 1.5" />
                  <Prop label="Letter Spacing" name="letter-spacing" value={selectedNode.properties['letter-spacing']} onChange={updateProperty} placeholder="e.g. 0.05em" />
                  <Prop label="Text Align" name="text-align" value={selectedNode.properties['text-align']} onChange={updateProperty} type="select" options={['left', 'center', 'right', 'justify']} />
                  <Prop label="Text Transform" name="text-transform" value={selectedNode.properties['text-transform']} onChange={updateProperty} type="select" options={['none', 'uppercase', 'lowercase', 'capitalize']} />
                  <Prop label="Font Family" name="font-family" value={selectedNode.properties['font-family']} onChange={updateProperty} placeholder="e.g. 'Inter', sans-serif" />
                </Group>

                <Group title="Spacing" icon="◰">
                  <Prop label="Padding" name="padding" value={selectedNode.properties['padding']} onChange={updateProperty} placeholder="e.g. 20px" />
                  <Prop label="Padding Top" name="padding-top" value={selectedNode.properties['padding-top']} onChange={updateProperty} />
                  <Prop label="Padding Right" name="padding-right" value={selectedNode.properties['padding-right']} onChange={updateProperty} />
                  <Prop label="Padding Bottom" name="padding-bottom" value={selectedNode.properties['padding-bottom']} onChange={updateProperty} />
                  <Prop label="Padding Left" name="padding-left" value={selectedNode.properties['padding-left']} onChange={updateProperty} />
                  <Prop label="Margin" name="margin" value={selectedNode.properties['margin']} onChange={updateProperty} placeholder="e.g. 0 auto" />
                  <Prop label="Margin Top" name="margin-top" value={selectedNode.properties['margin-top']} onChange={updateProperty} />
                  <Prop label="Margin Bottom" name="margin-bottom" value={selectedNode.properties['margin-bottom']} onChange={updateProperty} />
                </Group>

                <Group title="Layout & Positioning" icon="⛶">
                  <Prop label="Display" name="display" value={selectedNode.properties['display']} onChange={updateProperty} type="select" options={['block', 'flex', 'grid', 'inline-block', 'inline-flex', 'none']} />
                  <Prop label="Width" name="width" value={selectedNode.properties['width']} onChange={updateProperty} />
                  <Prop label="Height" name="height" value={selectedNode.properties['height']} onChange={updateProperty} />
                  <Prop label="Max Width" name="max-width" value={selectedNode.properties['max-width']} onChange={updateProperty} />
                  <Prop label="Position" name="position" value={selectedNode.properties['position']} onChange={updateProperty} type="select" options={['static', 'relative', 'absolute', 'fixed', 'sticky']} />
                  <Prop label="Z-Index" name="z-index" value={selectedNode.properties['z-index']} onChange={updateProperty} type="number" />
                  <Prop label="Flex Direction" name="flex-direction" value={selectedNode.properties['flex-direction']} onChange={updateProperty} type="select" options={['row', 'column', 'row-reverse', 'column-reverse']} />
                  <Prop label="Justify Content" name="justify-content" value={selectedNode.properties['justify-content']} onChange={updateProperty} type="select" options={['flex-start', 'center', 'flex-end', 'space-between', 'space-around']} />
                  <Prop label="Align Items" name="align-items" value={selectedNode.properties['align-items']} onChange={updateProperty} type="select" options={['stretch', 'center', 'flex-start', 'flex-end', 'baseline']} />
                  <Prop label="Gap" name="gap" value={selectedNode.properties['gap']} onChange={updateProperty} />
                </Group>

                <Group title="Visuals" icon="🎨">
                  <Prop label="Bg Color" name="background-color" type="color" value={selectedNode.properties['background-color']} onChange={updateProperty} />
                  <Prop label="Background" name="background" value={selectedNode.properties['background']} onChange={updateProperty} placeholder="e.g. linear-gradient(...)" />
                  <Prop label="Border" name="border" value={selectedNode.properties['border']} onChange={updateProperty} placeholder="e.g. 1px solid #eee" />
                  <Prop label="Border Radius" name="border-radius" value={selectedNode.properties['border-radius']} onChange={updateProperty} placeholder="e.g. 8px" />
                  <Prop label="Box Shadow" name="box-shadow" value={selectedNode.properties['box-shadow']} onChange={updateProperty} placeholder="e.g. 0 4px 6px ..." />
                  <Prop label="Opacity" name="opacity" value={selectedNode.properties['opacity']} onChange={updateProperty} placeholder="e.g. 0.5" />
                  <Prop label="Cursor" name="cursor" type="select" value={selectedNode.properties['cursor']} onChange={updateProperty} options={['default', 'pointer', 'text', 'move', 'not-allowed']} />
                  <Prop label="Transition" name="transition" value={selectedNode.properties['transition']} onChange={updateProperty} placeholder="e.g. all 0.3s ease" />
                </Group>
                
                <Group title="Custom CSS" icon="{ }">
                  <CustomCssEditor 
                    customProperties={selectedNode.custom_properties} 
                    onChange={updateCustomProperty} 
                    newProp={pendingProp}
                    setNewProp={setPendingProp}
                    newValue={pendingValue}
                    setNewValue={setPendingValue}
                  />
                </Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group({ title, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`prop-group ${open ? 'open' : ''}`}>
      <div className="group-title" onClick={() => setOpen(!open)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ opacity: 0.6, fontSize: '16px' }}>{icon}</span>
          {title}
        </div>
        <span>{open ? '▼' : '▶'}</span>
      </div>
      {open && <div className="group-fields">{children}</div>}
    </div>
  );
}

function Prop({ label, name, value = '', type = 'text', options = [], onChange, placeholder = 'auto' }) {
  return (
    <div className="prop-field">
      <label>{label}</label>
      {type === 'select' ? (
        <select value={value} onChange={e => onChange(name, e.target.value)}>
          <option value="">(None)</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input 
          type={type} 
          value={type === 'color' ? (value || '#000000') : value} 
          onChange={e => onChange(name, e.target.value)} 
          placeholder={placeholder}
        />
      )}
    </div>
  );
}



function CustomCssEditor({ customProperties, onChange, newProp, setNewProp, newValue, setNewValue }) {
  const handleAdd = () => {
    if (newProp.trim() && newValue.trim()) {
      onChange(newProp.trim(), newValue.trim());
      setNewProp('');
      setNewValue('');
    }
  };

  const customProps = Object.keys(customProperties || {});

  return (
    <div className="custom-css-editor">
      {customProps.length > 0 && (
        <div className="custom-css-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {customProps.map(prop => (
            <div key={prop} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input 
                type="text" 
                defaultValue={prop} 
                onBlur={(e) => {
                  if (e.target.value !== prop) {
                    onChange(e.target.value, customProperties[prop], prop);
                  }
                }}
                style={{ flex: 1, padding: '6px 8px', border: '1px solid var(--sb-border)', borderRadius: '4px', fontSize: '12px' }}
              />
              <input 
                type="text" 
                value={customProperties[prop]} 
                onChange={(e) => onChange(prop, e.target.value)}
                style={{ flex: 2, padding: '6px 8px', border: '1px solid var(--sb-border)', borderRadius: '4px', fontSize: '12px' }}
              />
              <button 
                type="button" 
                onClick={() => onChange(prop, '')}
                style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', padding: '4px' }}
                title="Remove property"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#fdfdfd', padding: '12px', borderRadius: '6px', border: '1px dashed var(--sb-border)' }}>
        <input 
          type="text" 
          placeholder="Property (e.g. filter)" 
          value={newProp} 
          onChange={e => setNewProp(e.target.value)}
          style={{ flex: 1, padding: '6px 8px', border: '1px solid var(--sb-border)', borderRadius: '4px', fontSize: '12px' }}
        />
        <input 
          type="text" 
          placeholder="Value" 
          value={newValue} 
          onChange={e => setNewValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          style={{ flex: 1, padding: '6px 8px', border: '1px solid var(--sb-border)', borderRadius: '4px', fontSize: '12px' }}
        />
        <button 
          type="button" 
          onClick={handleAdd}
          style={{ padding: '6px 12px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '500' }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
