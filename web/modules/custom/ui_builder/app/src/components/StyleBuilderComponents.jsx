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

function PropertyInput({ value, defaultValue, onChange, placeholder, style, onBlur }) {
  const [val, setVal] = useState(value !== undefined ? value : defaultValue || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (value !== undefined) {
      setVal(value);
    }
  }, [value]);

  const handleInputChange = (e) => {
    const currentVal = e.target.value;
    setVal(currentVal);
    if (onChange) onChange(e);
    
    if (currentVal.trim()) {
      const filtered = STANDARD_PROPS.filter(p => p.startsWith(currentVal.toLowerCase()));
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setActiveIndex(0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions[activeIndex]) {
        setVal(suggestions[activeIndex]);
        if (onChange) onChange({ target: { value: suggestions[activeIndex] } });
        setShowSuggestions(false);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div style={{ position: 'relative', flex: style?.flex || 'unset', minWidth: 0 }}>
      <input 
        type="text"
        value={val}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={(e) => {
          setTimeout(() => setShowSuggestions(false), 200);
          if (onBlur) onBlur(e);
        }}
        placeholder={placeholder}
        style={{ ...style, width: '100%' }}
      />
      {showSuggestions && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#fff',
          border: '1px solid var(--sb-border)',
          borderRadius: '4px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 1000,
          maxHeight: '150px',
          overflowY: 'auto'
        }}>
          {suggestions.map((s, index) => (
            <div
              key={s}
              onClick={() => {
                setVal(s);
                if (onChange) onChange({ target: { value: s } });
                setShowSuggestions(false);
              }}
              style={{
                padding: '6px 8px',
                cursor: 'pointer',
                fontSize: '12px',
                background: index === activeIndex ? '#e6f7ff' : '#fff',
                color: 'var(--text-main)'
              }}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CustomCssEditor({ customProperties, onChange, newProp, setNewProp, newValue, setNewValue, activeDevice = 'desktop', setActiveDevice }) {

  const breakpoints = window.drupalSettings?.ui_builder?.breakpoints || { tablet: '1024px', mobile: '767px' };
  const breakpointKeys = Object.keys(breakpoints);

  const handleAdd = () => {
    if (newProp.trim() && newValue.trim()) {
      let finalProp = newProp.trim();
      if (activeDevice !== 'desktop') {
        finalProp = `${activeDevice}:${finalProp}`;
      }
      onChange(finalProp, newValue.trim());
      setNewProp('');
      setNewValue('');
    }
  };

  const customProps = Object.keys(customProperties || {});
  
  // Filter properties based on active device
  const filteredProps = customProps.filter(prop => {
    if (activeDevice === 'desktop') {
      return !breakpointKeys.some(key => prop.startsWith(`${key}:`));
    } else {
      return prop.startsWith(`${activeDevice}:`);
    }
  });

  return (
    <div className="custom-css-editor">
      {/* Device Selector Tabs */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', borderBottom: '1px solid var(--sb-border)', paddingBottom: '8px' }}>
        <button 
          type="button"
          onClick={() => setActiveDevice('desktop')}
          style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '4px', background: activeDevice === 'desktop' ? '#e6f7ff' : 'none', border: 'none', cursor: 'pointer', color: activeDevice === 'desktop' ? '#0050b3' : 'var(--text-muted)' }}
        >
          🖥️ Desktop
        </button>
        {breakpointKeys.map(key => (
          <button 
            key={key}
            type="button"
            onClick={() => setActiveDevice(key)}
            style={{ padding: '4px 8px', fontSize: '11px', borderRadius: '4px', background: activeDevice === key ? '#e6f7ff' : 'none', border: 'none', cursor: 'pointer', color: activeDevice === key ? '#0050b3' : 'var(--text-muted)' }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {filteredProps.length > 0 && (
        <div className="custom-css-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {filteredProps.map(prop => {
            const displayProp = prop.includes(':') ? prop.split(':').pop() : prop;
            return (
              <div key={prop} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <PropertyInput 
                  defaultValue={displayProp} 
                  onBlur={(e) => {
                    const newPropName = e.target.value.trim();
                    if (newPropName && newPropName !== displayProp) {
                      let finalNewProp = newPropName;
                      if (activeDevice !== 'desktop') {
                        finalNewProp = `${activeDevice}:${newPropName}`;
                      }
                      
                      onChange(finalNewProp, customProperties[prop], prop);
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
            );
          })}
        </div>
      )}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#fdfdfd', padding: '12px', borderRadius: '6px', border: '1px dashed var(--sb-border)' }}>
        <PropertyInput 
          placeholder={`Property for ${activeDevice}`} 
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

export function PropertyEditor({ selectedNode, updateProperty, updateCustomProperty, pendingProp, setPendingProp, pendingValue, setPendingValue, activeDevice, setActiveDevice }) {
  return (
    <div className="property-groups">
      {/* Only keeping Custom CSS as requested */}
      
      <Group title="Custom CSS" icon="{ }">
        <CustomCssEditor 
          customProperties={selectedNode.custom_properties} 
          onChange={updateCustomProperty} 
          newProp={pendingProp}
          setNewProp={setPendingProp}
          newValue={pendingValue}
          setNewValue={setPendingValue}
          activeDevice={activeDevice}
          setActiveDevice={setActiveDevice}
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
  onNodeAction, // rename, add, delete, move
  rootLabel // Add this prop
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
                {isRoot ? (rootLabel || 'Default') : (node.selector || '&')}
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
