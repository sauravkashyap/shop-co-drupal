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
      // Add drag/drop actions if needed, but let's keep it simple for now
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
  const isPrimitive = !!selectedNode.tag;
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
            {/* Site Studio Instance Styling - Made highly visible and robust */}
            {selectedNode && (
              <AccordionSection title="INSTANCE STYLING (SITE STUDIO STYLE)" defaultOpen={true}>
                <div style={{ marginTop: '16px' }} className="instance-style-editor">
                  <p className="help-text" style={{ marginBottom: '12px' }}>
                    Define styles scoped to this specific {selectedNode.label || selectedNode.tag} and its children.
                  </p>
                  
                  <div className="style-builder-mini-tree" style={{ border: '1px solid var(--sb-border)', borderRadius: '4px', marginBottom: '16px', background: '#fff' }}>
                    <SelectorTree 
                      data={instanceData}
                      rootLabel={selectedNode.label || selectedNode.tag}
                      selectedNodePath={selectedInstancePath}
                      setSelectedNodePath={setSelectedInstancePath}
                      editingNodePath={editingNodePath}
                      setEditingNodePath={setEditingNodePath}
                      editValue={editValue}
                      setEditValue={setEditValue}
                      isAddingNew={isAddingNew}
                      setIsAddingNew={setIsAddingNew}
                      collapsedPaths={collapsedPaths}
                      setCollapsedPaths={setCollapsedPaths}
                      draggedNodePath={draggedNodePath}
                      setDraggedNodePath={setDraggedNodePath}
                      dropTargetInfo={dropTargetInfo}
                      setDropTargetInfo={setDropTargetInfo}
                      onNodeAction={handleInstanceNodeAction}
                    />
                  </div>

                  {selectedInstanceNode && (
                    <div className="style-builder-mini-props" style={{ border: '1px solid var(--sb-border)', borderRadius: '4px', padding: '12px', background: '#fff' }}>
                      <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'var(--sb-text-main)' }}>
                        Properties for: <code style={{ color: 'var(--sb-primary)' }}>{selectedInstanceNode.selector}</code>
                      </h4>
                      <PropertyEditor 
                        selectedNode={selectedInstanceNode}
                        updateProperty={updateInstanceProperty}
                        updateCustomProperty={updateInstanceCustomProperty}
                        pendingProp={pendingProp}
                        setPendingProp={setPendingProp}
                        pendingValue={pendingValue}
                        setPendingValue={setPendingValue}
                        activeDevice={activeDevice}
                        setActiveDevice={setActiveDevice}
                      />
                    </div>
                  )}
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
              <div className="form-group" style={{ marginTop: '16px' }}>
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
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      const newClass = e.target.value.trim();
                      const current = selectedNode.props?.class || '';
                      const classes = current.split(/\s+/).filter(Boolean);
                      const newClassesToAdd = newClass.split(/\s+/).filter(Boolean);
                      
                      let updatedClasses = [...classes];
                      newClassesToAdd.forEach(c => {
                        if (!updatedClasses.includes(c)) updatedClasses.push(c);
                      });
                      
                      updateNodeProperty(selectedNode.id, 'class', updatedClasses.join(' '));
                      e.target.value = '';
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
