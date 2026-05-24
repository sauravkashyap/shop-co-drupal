import { useState, useEffect } from 'react';
import { FieldEditor } from './FieldEditor';
import { ImageEditor } from './ImageEditor';
import { getCustomClassesOnly, mergeClasses } from '../utils/styleUtils';
import { 
  STANDARD_PROPS, 
  PropertyEditor, 
  SelectorTree 
} from './StyleBuilderComponents';
import './StyleBuilder.css'; // Reuse same styles

function AccordionSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className={`prop-group ${isOpen ? 'open' : ''}`}>
      <div 
        className="prop-group-header" 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 20px', 
          background: isOpen ? '#fdfdfd' : '#fff', 
          cursor: 'pointer', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontWeight: '600', 
          fontSize: '14px', 
          color: 'var(--sb-text-main)', 
          userSelect: 'none', 
          borderBottom: isOpen ? '1px solid var(--sb-border)' : 'none'
        }}
      >
        <span className="prop-group-title">{title}</span>
        <div 
          className="prop-group-icon"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none', 
            transition: 'transform 0.2s ease', 
            color: 'var(--sb-text-muted)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="prop-group-body" style={{ padding: '20px', background: '#fdfdfd' }}>
          {children}
        </div>
      )}
    </div>
  );
}
export function PropertiesPanel({ 
  mode,
  selectedNode,
  selectedNodeId,
  selectedStyle,
  selectedComponent,
  updateNodeProperty,
  resetToDefaultProps,
  removeNode,
  updateNodeField,
  updateInstanceValue,
  updateInstanceStyles,
  onSaveStyle,
  onEditInstanceStyle,
  onDeselect,
  customStyles = []
}) {
  // Instance Style State
  const [instanceData, setInstanceData] = useState(null);
  const [selectedInstancePath, setSelectedInstancePath] = useState(['root']);
  const [editingNodePath, setEditingNodePath] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [collapsedPaths, setCollapsedPaths] = useState(new Set());
  const [draggedNodePath, setDraggedNodePath] = useState(null);
  const [dropTargetInfo, setDropTargetInfo] = useState(null);
  const [activeDevice, setActiveDevice] = useState('desktop'); // desktop, tablet, mobile
  const [pendingProp, setPendingProp] = useState('');
  const [pendingValue, setPendingValue] = useState('');

  // Global style editor state
  const [styleCode, setStyleCode] = useState('');
  const [styleLabel, setStyleLabel] = useState('');

  // SYNC INSTANCE STYLE STATE
  useEffect(() => {
    if (selectedNode && selectedNode.instanceStyles) {
      setInstanceData(JSON.parse(JSON.stringify(selectedNode.instanceStyles)));
    } else {
      setInstanceData({
        selector: '&',
        properties: {},
        custom_properties: {},
        children: []
      });
    }
    setSelectedInstancePath(['root']);
  }, [selectedNodeId]);

  const findInstanceNodeByPath = (tree, path) => {
    if (!tree) return null;
    if (path.length === 1 && path[0] === 'root') return tree;
    let current = tree;
    for (let i = 1; i < path.length; i++) {
      if (!current.children || !current.children[path[i]]) return current;
      current = current.children[path[i]];
    }
    return current;
  };

  const selectedInstanceNode = findInstanceNodeByPath(instanceData, selectedInstancePath);



  const getColFromClass = (prefix) => {
    const currentClasses = selectedNode.props?.class || '';
    const classesArray = currentClasses.split(/\s+/).filter(Boolean);
    const colClass = classesArray.find(c => c.startsWith(prefix));
    if (colClass) {
      return colClass.replace(prefix, '');
    }
    return '';
  };

  const handleColWidthChange = (colValue, prefix = '') => {
    const currentClasses = selectedNode.props?.class || '';
    let classesArray = currentClasses.split(/\s+/).filter(Boolean);
    
    let classPrefix = 'uib-col-';
    if (prefix === 'tablet:') classPrefix = 'uib-col-md-';
    if (prefix === 'mobile:') classPrefix = 'uib-col-sm-';
    
    classesArray = classesArray.filter(c => !c.startsWith(classPrefix));
    
    if (colValue) {
      classesArray.push(`${classPrefix}${colValue}`);
    }
    
    updateNodeField(selectedNode.id, { 
      props: { 
        ...selectedNode.props, 
        class: classesArray.join(' ') 
      } 
    });
  };

  const handleInstanceNodeAction = (action, ...args) => {
    console.log('handleInstanceNodeAction', action, ...args);
    if (!instanceData) return;
    
    const updateAndPersist = (newData) => {
      setInstanceData(newData);
      updateInstanceStyles(selectedNodeId, newData);
    };

    switch (action) {
      case 'add': {
        const [e, path] = args;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setIsAddingNew(true);
        setEditValue(':hover');
        setEditingNodePath([...path, 'new']);
        break;
      }
      case 'rename': {
        const [e, path] = args;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        if (path.length === 1 && path[0] === 'root') return;
        const node = findInstanceNodeByPath(instanceData, path);
        setIsAddingNew(false);
        setEditValue(node.selector);
        setEditingNodePath(path);
        setSelectedInstancePath(path);
        break;
      }
      case 'finishEdit': {
        const trimmed = editValue.trim();
        if (!trimmed) {
          setEditingNodePath(null);
          setIsAddingNew(false);
          return;
        }
        const newData = JSON.parse(JSON.stringify(instanceData));
        if (isAddingNew) {
          const parentPath = editingNodePath.slice(0, -1);
          let current = newData;
          if (parentPath[0] !== 'root' || parentPath.length > 1) {
            for (let i = 1; i < parentPath.length; i++) {
              current = current.children[parentPath[i]];
            }
          }
          current.children = current.children || [];
          const newIndex = current.children.length;
          current.children.push({ selector: trimmed, properties: {}, children: [] });
          setSelectedInstancePath([...parentPath, newIndex]);
        } else {
          let current = newData;
          if (editingNodePath.length > 1) {
            for (let i = 1; i < editingNodePath.length; i++) {
              current = current.children[editingNodePath[i]];
            }
          }
          current.selector = trimmed;
        }
        updateAndPersist(newData);
        setEditingNodePath(null);
        setIsAddingNew(false);
        break;
      }
      case 'dragStart': {
        const [e, path] = args;
        setDraggedNodePath(path);
        e.dataTransfer.effectAllowed = 'move';
        break;
      }
      case 'dragOver': {
        const [e, path, position] = args;
        e.preventDefault();
        e.stopPropagation();
        if (!draggedNodePath) return;
        if (JSON.stringify(path) === JSON.stringify(draggedNodePath)) return;
        setDropTargetInfo({ path, position });
        break;
      }
      case 'drop': {
        const [e, toPath, position] = args;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        if (!draggedNodePath) return;
        
        const newData = JSON.parse(JSON.stringify(instanceData));
        let fromParent = newData;
        for (let i = 1; i < draggedNodePath.length - 1; i++) {
          fromParent = fromParent.children[draggedNodePath[i]];
        }
        const fromIndex = draggedNodePath[draggedNodePath.length - 1];
        const [movedNode] = fromParent.children.splice(fromIndex, 1);

        if (position === 'inside') {
          let targetNode = newData;
          for (let i = 1; i < toPath.length; i++) targetNode = targetNode.children[toPath[i]];
          targetNode.children = targetNode.children || [];
          targetNode.children.push(movedNode);
        } else {
          let toParent = newData;
          for (let i = 1; i < toPath.length - 1; i++) toParent = toParent.children[toPath[i]];
          let toIndex = toPath[toPath.length - 1];
          if (draggedNodePath.length === toPath.length && JSON.stringify(draggedNodePath.slice(0, -1)) === JSON.stringify(toPath.slice(0, -1)) && fromIndex < toIndex) toIndex--;
          if (position === 'after') toIndex++;
          toParent.children.splice(toIndex, 0, movedNode);
        }
        
        updateAndPersist(newData);
        setDraggedNodePath(null);
        setDropTargetInfo(null);
        setSelectedInstancePath(['root']);
        break;
      }
      case 'dragEnd': {
        setDraggedNodePath(null);
        setDropTargetInfo(null);
        break;
      }
    }
  };

  const handlePasteCss = async () => {
    try {
      let text = '';
      if (navigator.clipboard && navigator.clipboard.readText) {
        text = await navigator.clipboard.readText();
      } else {
        text = prompt('Clipboard API not available in this context (requires HTTPS or localhost). Please paste your CSS here:');
      }
      
      if (!text) return;
      
      // Remove comments
      let cleanedText = text.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Extract content inside { } if present
      const match = cleanedText.match(/\{([\s\S]*)\}/);
      if (match) {
        cleanedText = match[1];
      }
      
      const properties = {};
      const rules = cleanedText.split(';');
      rules.forEach(rule => {
        const parts = rule.split(':');
        if (parts.length >= 2) {
          const prop = parts[0].trim().replace(/[\r\n]/g, '');
          const value = parts.slice(1).join(':').trim().replace(/[\r\n]/g, ' ');
          if (prop && value) {
            properties[prop] = value;
          }
        }
      });
      
      console.log('Parsed properties:', properties);
      
      if (Object.keys(properties).length === 0) {
        alert('No valid CSS found! Please ensure it is in "property: value;" format.');
        return;
      }
      
      const newData = JSON.parse(JSON.stringify(instanceData));
      let target = newData;
      for (let i = 1; i < selectedInstancePath.length; i++) {
        target = target.children[selectedInstancePath[i]];
      }
      
      if (!target.custom_properties) target.custom_properties = {};
      Object.assign(target.custom_properties, properties);
      
      setInstanceData(newData);
      updateInstanceStyles(selectedNodeId, newData);
      alert(`Pasted ${Object.keys(properties).length} properties!`);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
      alert('Failed to read clipboard. Please allow clipboard access.');
    }
  };

  const updateInstanceProperty = (prop, value) => {
    const newData = JSON.parse(JSON.stringify(instanceData));
    let target = newData;
    for (let i = 1; i < selectedInstancePath.length; i++) {
      target = target.children[selectedInstancePath[i]];
    }
    if (!target.properties) target.properties = {};
    if (value) target.properties[prop] = value; else delete target.properties[prop];
    setInstanceData(newData);
    updateInstanceStyles(selectedNodeId, newData);
  };

  const updateInstanceCustomProperty = (prop, value, oldProp = null) => {
    const newData = JSON.parse(JSON.stringify(instanceData));
    let target = newData;
    for (let i = 1; i < selectedInstancePath.length; i++) {
      target = target.children[selectedInstancePath[i]];
    }
    if (!target.custom_properties) target.custom_properties = {};
    if (oldProp && oldProp !== prop) delete target.custom_properties[oldProp];
    if (value) target.custom_properties[prop] = value; else delete target.custom_properties[prop];
    setInstanceData(newData);
    updateInstanceStyles(selectedNodeId, newData);
  };
  // SYNC STYLE EDITOR STATE
  useEffect(() => {
    if (selectedStyle) {
      setStyleCode(selectedStyle.css_content || '');
      setStyleLabel(selectedStyle.label || '');
    }
  }, [selectedStyle]);

  // Sync style editor state
  useEffect(() => {
    if (selectedStyle) {
      setStyleCode(selectedStyle.css_content || '');
      setStyleLabel(selectedStyle.label || '');
    }
  }, [selectedStyle]);

  // Don't render at all if nothing is selected — panel stays hidden
  if (!selectedNode && !selectedStyle) {
    return null;
  }

  // GLOBAL STYLE EDITOR
  if (selectedStyle) {
    return (
      <>
        <div className="properties-backdrop" onClick={onDeselect} />
        <aside className="ui-builder-properties">
          <div className="properties-header">
            <h3>Style Editor</h3>
            <button type="button" className="properties-close-btn" onClick={onDeselect} title="Close">✕</button>
          </div>
          <div className="properties-content animate-fade">
            <div className="form-group">
              <label>Style Label</label>
              <input 
                type="text" 
                className="form-control" 
                value={styleLabel} 
                onChange={e => setStyleLabel(e.target.value)} 
                placeholder="e.g. Hero Title"
              />
            </div>
            <div className="form-group">
              <label>CSS Class</label>
              <input 
                type="text" 
                className="form-control" 
                value={`.${selectedStyle.id}`} 
                disabled 
                style={{ opacity: 0.6 }}
              />
            </div>
            <div className="form-group">
              <label>CSS Rules</label>
              <textarea 
                className="form-control css-editor" 
                value={styleCode} 
                onChange={e => setStyleCode(e.target.value)}
                placeholder={`.${selectedStyle.id} {\n  color: #2563eb;\n  font-size: 24px;\n}`}
                spellCheck="false"
              />
            </div>
            <button 
              type="button" 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '12px' }} 
              onClick={() => onSaveStyle({ ...selectedStyle, label: styleLabel, css_content: styleCode })}
            >
              Save Style
            </button>
          </div>
        </aside>
      </>
    );
  }

  // NODE EDITOR
  const isPrimitive = !selectedNode.component_id && !!selectedNode.tag;
  const currentClasses = selectedNode.props?.class || '';
  const classesArray = currentClasses.split(/\s+/).filter(Boolean);
  const isColumn = classesArray.includes('column') || selectedNode.label === 'Column';
  const label = selectedNode.label || '';
  const isLayoutElement = label.startsWith('Container') || label.startsWith('Plain Div') || label.startsWith('Row') || label.startsWith('Column');

  return (
    <>
      <div className="properties-backdrop" onClick={onDeselect} />
      <aside className="ui-builder-properties" onClick={e => e.stopPropagation()}>
        <div className="properties-header">
          <h3>{selectedNode.label || selectedNode.tag}</h3>
          <button type="button" className="properties-close-btn" onClick={onDeselect} title="Close">✕</button>
        </div>

        <div className="properties-content">
          <div className="animate-fade property-groups">
            {/* Site Studio Instance Styling - Opens full-screen Style Builder */}
            {selectedNode && (
              <AccordionSection title="INSTANCE STYLING (SITE STUDIO STYLE)" defaultOpen={true}>
                <div style={{ marginTop: '16px', padding: '4px' }} className="instance-style-editor animate-fade">
                  <p className="help-text" style={{ marginBottom: '16px', fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
                    Apply scoped styles, selectors, pseudo-elements, and responsive queries directly to this {selectedNode.label || selectedNode.tag}.
                  </p>
                  
                  <button
                    type="button"
                    className="save-btn"
                    style={{ 
                      width: '100%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', 
                      gap: '8px', 
                      padding: '12px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      background: 'var(--sb-primary, #2563eb)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
                      transition: 'all 0.2s ease-in-out'
                    }}
                    onClick={() => {
                      if (onEditInstanceStyle) {
                        onEditInstanceStyle({
                          id: selectedNode.id,
                          label: selectedNode.label || selectedNode.tag,
                          data: selectedNode.instanceStyles || {
                            selector: '&',
                            properties: {},
                            custom_properties: {},
                            children: []
                          },
                          isInstance: true
                        });
                      }
                    }}
                  >
                    🎨 Edit CSS in Style Builder
                  </button>
                </div>
              </AccordionSection>
            )}

            {/* 1. Identity */}
            <AccordionSection title="General Settings" defaultOpen={true}>
              <div className="form-group" style={{ marginTop: '16px' }}>
                <label>Label</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={selectedNode.label || ''} 
                  onChange={e => updateNodeField(selectedNode.id, { label: e.target.value })}
                  placeholder="Internal label..."
                />
              </div>

              {isColumn && (
                <div style={{ marginTop: '16px', borderTop: '1px solid #333', paddingTop: '16px' }}>
                  <label style={{ marginBottom: '8px', display: 'block' }}>Grid Columns</label>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                    <div>
                      <label style={{ fontSize: '12px', color: '#aaa' }}>Desktop</label>
                      <select 
                        className="form-control"
                        value={getColFromClass('uib-col-') || '12'}
                        onChange={(e) => handleColWidthChange(e.target.value, '')}
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '12px', color: '#aaa' }}>Tablet</label>
                      <select 
                        className="form-control"
                        value={getColFromClass('uib-col-md-') || ''}
                        onChange={(e) => handleColWidthChange(e.target.value, 'tablet:')}
                      >
                        <option value="">Auto</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '12px', color: '#aaa' }}>Mobile</label>
                      <select 
                        className="form-control"
                        value={getColFromClass('uib-col-sm-') || ''}
                        onChange={(e) => handleColWidthChange(e.target.value, 'mobile:')}
                      >
                        <option value="">Auto</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </AccordionSection>

            {/* 2. Content & Data */}
            {!isLayoutElement && (
              <AccordionSection title="Content & Data" defaultOpen={['img', 'text', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(selectedNode.tag)}>
                <div style={{ marginTop: '16px' }}>
                  {(selectedNode.tag === 'img' || selectedNode.props?.isBgImage) && (
                    <div className="form-group" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="checkbox" 
                        id="bg-image-toggle"
                        checked={selectedNode.props?.isBgImage || false}
                        onChange={(e) => {
                          const isBg = e.target.checked;
                          const updates = {
                            props: {
                              ...selectedNode.props,
                              isBgImage: isBg
                            }
                          };
                          if (isBg) {
                            updates.tag = 'div';
                            updates.props.style = {
                              ...selectedNode.props?.style,
                              backgroundImage: `url(${selectedNode.content})`
                            };
                            updates.label = 'Bg Image Container';
                            
                            // Add background_image class
                            const existingClasses = selectedNode.props?.class || '';
                            updates.props.class = existingClasses ? `${existingClasses} background_image` : 'background_image';
                          } else {
                            updates.tag = 'img';
                            const newStyle = { ...selectedNode.props?.style };
                            delete newStyle.backgroundImage;
                            delete newStyle.backgroundSize;
                            delete newStyle.backgroundPosition;
                            delete newStyle.minHeight;
                            updates.props.style = newStyle;
                            updates.label = 'Image';
                            
                            // Remove background_image class
                            const existingClasses = selectedNode.props?.class || '';
                            updates.props.class = existingClasses.replace('background_image', '').trim();
                          }
                          updateNodeField(selectedNode.id, updates);
                        }}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                      />
                      <label htmlFor="bg-image-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>Use as Background Image</label>
                    </div>
                  )}

                  {isPrimitive ? (
                    <>

                      <div className="form-group">
                        <label>{selectedNode.tag === 'img' ? 'Image Source' : 'Text Content'}</label>
                        {selectedNode.tag === 'img' ? (
                          <ImageEditor
                            mode={selectedNode.fieldMode || 'static'}
                            value={selectedNode.content || ''}
                            onUpdate={(val, m) => updateNodeField(selectedNode.id, { content: val, fieldMode: m })}
                          />
                        ) : (
                          <FieldEditor
                            mode={selectedNode.fieldMode || 'static'}
                            value={selectedNode.content || ''}
                            onUpdate={(val, m) => updateNodeField(selectedNode.id, { content: val, fieldMode: m })}
                          />
                        )}
                      </div>

                      {selectedNode.tag === 'a' && (
                        <>
                          <div className="form-group" style={{ marginTop: '16px' }}>
                            <label>Link URL</label>
                            <FieldEditor
                              mode={selectedNode.props?.hrefMode || 'static'}
                              value={selectedNode.props?.href || ''}
                              onUpdate={(val, m) => {
                                updateNodeProperty(selectedNode.id, 'href', val);
                                updateNodeProperty(selectedNode.id, 'hrefMode', m);
                              }}
                            />
                          </div>
                          <div className="form-group" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                            <input 
                              type="checkbox" 
                              id="link-target-toggle"
                              checked={selectedNode.props?.target === '_blank'}
                              onChange={(e) => {
                                updateNodeProperty(selectedNode.id, 'target', e.target.checked ? '_blank' : '');
                              }}
                              style={{ marginRight: '8px', cursor: 'pointer' }}
                            />
                            <label htmlFor="link-target-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>Open in new tab</label>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="component-fields">
                      {(() => {
                        const schema = selectedComponent?.form_schema || {};
                        const entries = typeof schema === 'object' && !Array.isArray(schema) ? Object.entries(schema) : [];
                        if (entries.length === 0) return <p className="no-items-hint">No editable fields.</p>;
                        return entries.map(([key, fieldSchema]) => {
                          const data = selectedNode.values?.[key] || { mode: 'static', value: '' };
                          const entry = typeof data === 'object' ? data : { mode: 'static', value: data };
                          return (
                            <div className="form-group" key={key}>
                              <label>{fieldSchema.title || key}</label>
                              {fieldSchema.type === 'image' ? (
                                <ImageEditor
                                  mode={entry.mode}
                                  value={entry.value}
                                  onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                                />
                              ) : (
                                <FieldEditor
                                  mode={entry.mode}
                                  value={entry.value}
                                  onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                                />
                              )}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  )}
                </div>
              </AccordionSection>
            )}

            


            {/* 4. Styles & Classes */}
            <AccordionSection title="Styles & Classes">
              {(classesArray.includes('uib-container') || classesArray.includes('uib-full-width')) && (
                <div className="form-group" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    id="full-width-toggle"
                    checked={classesArray.includes('uib-full-width')}
                    onChange={(e) => {
                      let updatedClasses = [...classesArray];
                      if (e.target.checked) {
                        updatedClasses = updatedClasses.filter(c => c !== 'uib-container');
                        if (!updatedClasses.includes('uib-full-width')) updatedClasses.push('uib-full-width');
                      } else {
                        updatedClasses = updatedClasses.filter(c => c !== 'uib-full-width');
                        if (!updatedClasses.includes('uib-container')) updatedClasses.push('uib-container');
                      }
                      updateNodeProperty(selectedNode.id, 'class', updatedClasses.join(' '));
                    }}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  <label htmlFor="full-width-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>Full Width Container</label>
                </div>
              )}

              <div className="form-group" style={{ marginTop: (classesArray.includes('uib-container') || classesArray.includes('uib-full-width')) ? '12px' : '16px' }}>
                <label>Apply Custom Style</label>
                <select 
                  className="form-control"
                  onChange={(e) => {
                    if (!e.target.value) return;
                    const current = selectedNode.props?.class || '';
                    const classes = current.split(/\s+/).filter(Boolean);
                    if (!classes.includes(e.target.value)) {
                      const updated = [...classes, e.target.value].join(' ');
                      updateNodeProperty(selectedNode.id, 'class', updated);
                    }
                    e.target.value = '';
                  }}
                >
                  <option value="">-- Select a style --</option>
                  {customStyles.map(s => {
                    const classId = s.id.startsWith('uib-') ? s.id : 'uib-' + s.id;
                    return <option key={s.id} value={classId}>{s.label || s.id}</option>;
                  })}
                </select>
              </div>

              <div className="form-group" style={{ marginTop: '12px' }}>
                <label>Applied Classes</label>
                <div className="active-styles-list">
                  {(() => {
                    const current = selectedNode.props?.class || '';
                    const classes = current.split(/\s+/).filter(Boolean);
                    if (classes.length === 0) return <p className="help-text">No classes applied.</p>;
                    return classes.map(cls => {
                      const isProtected = 
                        (selectedNode.label === 'Container' && (cls === 'container' || cls === 'uib-full-width')) || 
                        (selectedNode.label === 'Row' && cls === 'row') || 
                        (selectedNode.label === 'Column' && cls === 'column');

                      return (
                        <div key={cls} className={`style-tag ${isProtected ? 'is-protected' : ''}`}>
                          <span className="style-tag-label">{cls}</span>
                          {!isProtected && (
                            <button 
                              type="button"
                              className="style-tag-remove"
                              onClick={() => {
                                const filtered = classes.filter(c => c !== cls).join(' ');
                                updateNodeProperty(selectedNode.id, 'class', filtered);
                              }}
                            >✕</button>
                          )}
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              <div className="form-group">
                <label>Add Extra Class Manually</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type class and press Enter..."
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (e.target.value.trim()) {
                        const newClass = e.target.value.trim();
                        const current = selectedNode.props?.class || '';
                        const classes = current.split(/\s+/).filter(Boolean);
                        const newClassesToAdd = newClass.split(/\s+/).filter(Boolean);
                        
                        let updatedClasses = [...classes];
                        newClassesToAdd.forEach(c => {
                          const prefixed = c.startsWith('uib-') ? c : `uib-${c}`;
                          if (!updatedClasses.includes(prefixed)) updatedClasses.push(prefixed);
                        });
                        
                        updateNodeProperty(selectedNode.id, 'class', updatedClasses.join(' '));
                        e.target.value = '';
                      }
                    }
                  }}
                />
              </div>

              <button 
                type="button" 
                className="btn-secondary" 
                style={{ width: '100%', marginTop: '16px' }}
                onClick={() => resetToDefaultProps(selectedNode.id)}
              >
                Reset all to Defaults
              </button>
            </AccordionSection>

            {/* 5. Actions */}
            <div className="form-group" style={{ marginTop: '32px', padding: '0 20px 20px 20px' }}>
              <button 
                type="button"
                className="delete-element-btn"
                style={{ width: '100%' }}
                onClick={() => { removeNode(selectedNode.id); onDeselect(); }}
              >
                Delete {isPrimitive ? 'Element' : 'Instance'}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
