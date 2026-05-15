import { useState, useRef, useEffect } from 'react';

export const STANDARD_PROPS = [
  'font-size', 'font-weight', 'color', 'line-height', 'letter-spacing', 'text-align', 'text-transform', 'font-family',
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-top', 'margin-bottom', 'margin-right', 'margin-left',
  'display', 'width', 'height', 'max-width', 'position', 'z-index', 'flex-direction', 'justify-content', 'align-items', 'gap',
  'background-color', 'background', 'border', 'border-radius', 'box-shadow', 'opacity', 'cursor', 'transition'
];

export function Group({ title, icon, children }) {
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

export function Prop({ label, name, value = '', type = 'text', options = [], onChange, placeholder = 'auto' }) {
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

export function CustomCssEditor({ customProperties, onChange, newProp, setNewProp, newValue, setNewValue }) {
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

export function PropertyEditor({ selectedNode, updateProperty, updateCustomProperty, pendingProp, setPendingProp, pendingValue, setPendingValue }) {
  return (
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
  );
}

export function SelectorTree({ 
  data, 
  selectedNodePath, 
  setSelectedNodePath, 
  editingNodePath, 
  setEditingNodePath,
  editValue,
  setEditValue,
  isAddingNew,
  setIsAddingNew,
  collapsedPaths,
  setCollapsedPaths,
  draggedNodePath,
  setDraggedNodePath,
  dropTargetInfo,
  setDropTargetInfo,
  onNodeAction // rename, add, delete, move
}) {
  const editInputRef = useRef(null);

  useEffect(() => {
    if (editingNodePath && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingNodePath]);

  const toggleCollapse = (e, pathStr) => {
    e.stopPropagation();
    setCollapsedPaths(prev => {
      const next = new Set(prev);
      if (next.has(pathStr)) next.delete(pathStr);
      else next.add(pathStr);
      return next;
    });
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
        {!isRoot && (
          <div 
            className={`ss-sel-drop-zone ${isDropBefore ? 'active' : ''}`}
            onDragOver={(e) => onNodeAction('dragOver', e, path, 'before')}
            onDrop={(e) => onNodeAction('drop', e, path, 'before')}
          />
        )}

        <div className="ss-sel-row">
          {!isRoot && (
            hasChildren ? (
              <button 
                type="button" 
                className="ss-sel-collapse-toggle"
                onClick={(e) => toggleCollapse(e, pathStr)}
              >{isCollapsed ? '+' : '−'}</button>
            ) : (
              <div className="ss-sel-collapse-spacer" />
            )
          )}

          <div 
            className={`ss-sel-card ${isSelected ? 'ss-sel-selected' : ''} ${isDragged ? 'ss-sel-dragging' : ''} ${isDropInside ? 'ss-sel-drop-inside' : ''} ${isRoot ? 'ss-sel-card-root' : ''}`}
            onClick={() => setSelectedNodePath(path)}
            draggable={!isRoot && !isEditing}
            onDragStart={(e) => onNodeAction('dragStart', e, path)}
            onDragEnd={() => onNodeAction('dragEnd')}
            onDragOver={(e) => onNodeAction('dragOver', e, path, 'inside')}
            onDrop={(e) => onNodeAction('drop', e, path, 'inside')}
          >
            {!isRoot && <span className="ss-sel-drag-handle">✥</span>}

            {isEditing ? (
              <input 
                ref={editInputRef}
                className="ss-sel-edit-input"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onBlur={() => onNodeAction('finishEdit')}
                onKeyDown={e => e.key === 'Enter' && onNodeAction('finishEdit')}
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <span className="ss-sel-name" onDoubleClick={(e) => onNodeAction('rename', e, path)}>
                {isRoot ? 'Default' : (node.selector || '&')}
                {!isRoot && depth > 1 && <span className="ss-sel-annotation"> (child)</span>}
              </span>
            )}

            <button 
              type="button" 
              className="ss-sel-add"
              onClick={(e) => onNodeAction('add', e, path)}
            >⊕</button>
          </div>
        </div>

        {!isRoot && (
          <div 
            className={`ss-sel-drop-zone ${isDropAfter ? 'active' : ''}`}
            onDragOver={(e) => onNodeAction('dragOver', e, path, 'after')}
            onDrop={(e) => onNodeAction('drop', e, path, 'after')}
          />
        )}

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
                      onBlur={() => onNodeAction('finishEdit')}
                      onKeyDown={e => e.key === 'Enter' && onNodeAction('finishEdit')}
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

  return <div className="tree-content">{renderTree(data)}</div>;
}
