import { useState, useEffect } from 'react';
import { FieldEditor } from './FieldEditor';
import { ImageEditor } from './ImageEditor';
import { getCustomClassesOnly, mergeClasses } from '../utils/styleUtils';

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
  onSaveStyle,
  onDeselect,
  customStyles = []
}) {
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
            {/* 1. Identity */}
            <AccordionSection title="Identity" defaultOpen={true}>
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
            </AccordionSection>

            {/* 2. Content & Data */}
            <AccordionSection title="Content & Data" defaultOpen={['img', 'text', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(selectedNode.tag)}>
              <div style={{ marginTop: '16px' }}>
                {isPrimitive ? (
                  <>
                    <div className="form-group">
                      <label>Field Identifier</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. hero_title"
                        value={selectedNode.fieldLabel || ''}
                        onChange={e => updateNodeField(selectedNode.id, { fieldLabel: e.target.value })}
                      />
                      <p className="help-text" style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>This ID connects this element to Drupal content fields.</p>
                    </div>
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

            {/* Dimensions for images */}
            {selectedNode.tag === 'img' && (
              <AccordionSection title="Dimensions">
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Width</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. 100% or 200px"
                      value={selectedNode.props?.width || ''} 
                      onChange={e => updateNodeProperty(selectedNode.id, 'width', e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Height</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. auto or 150px"
                      value={selectedNode.props?.height || ''} 
                      onChange={e => updateNodeProperty(selectedNode.id, 'height', e.target.value)}
                    />
                  </div>
                </div>
              </AccordionSection>
            )}
            
            {/* 3. Layout Settings */}
            {selectedNode.label === 'Container' && (
              <AccordionSection title="Container Settings">
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedNode.props?.fullWidth || false}
                      onChange={e => {
                        const isFull = e.target.checked;
                        updateNodeProperty(selectedNode.id, 'fullWidth', isFull);
                        
                        const current = selectedNode.props?.class || '';
                        let classes = current.split(/\s+/).filter(Boolean);
                        
                        if (isFull) {
                          classes = classes.filter(c => c !== 'uib-container');
                          if (!classes.includes('uib-full-width')) {
                            classes.push('uib-full-width');
                          }
                        } else {
                          classes = classes.filter(c => c !== 'uib-full-width');
                          if (!classes.includes('uib-container')) {
                            classes.push('uib-container');
                          }
                        }
                        
                        updateNodeProperty(selectedNode.id, 'class', classes.join(' '));
                      }}
                    />
                    <span style={{ fontSize: '13px', fontWeight: '500' }}>Full Width</span>
                  </label>
                  <p className="help-text">Override container width to 100%.</p>
                </div>
              </AccordionSection>
            )}

            {(selectedNode.label?.toLowerCase().includes('row')) && (
              <AccordionSection title="Row Layout (Flexbox)">
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label>Direction</label>
                  <select 
                    className="form-control"
                    value={selectedNode.props?.flexDirection || ''}
                    onChange={e => {
                      const val = e.target.value;
                      updateNodeProperty(selectedNode.id, 'flexDirection', val);
                    }}
                  >
                    <option value="">Default</option>
                    <option value="row">Row (Horizontal)</option>
                    <option value="row-reverse">Row Reverse</option>
                    <option value="column">Column (Vertical)</option>
                    <option value="column-reverse">Column Reverse</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Justify Content</label>
                  <select 
                    className="form-control"
                    value={selectedNode.props?.justifyContent || ''}
                    onChange={e => updateNodeProperty(selectedNode.id, 'justifyContent', e.target.value)}
                  >
                    <option value="">Default</option>
                    <option value="flex-start">Start</option>
                    <option value="center">Center</option>
                    <option value="flex-end">End</option>
                    <option value="space-between">Space Between</option>
                    <option value="space-around">Space Around</option>
                    <option value="space-evenly">Space Evenly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Align Items</label>
                  <select 
                    className="form-control"
                    value={selectedNode.props?.alignItems || ''}
                    onChange={e => updateNodeProperty(selectedNode.id, 'alignItems', e.target.value)}
                  >
                    <option value="">Default</option>
                    <option value="stretch">Stretch</option>
                    <option value="flex-start">Start</option>
                    <option value="center">Center</option>
                    <option value="flex-end">End</option>
                    <option value="baseline">Baseline</option>
                  </select>
                </div>
              </AccordionSection>
            )}

             {(selectedNode.label?.toLowerCase().includes('column')) && (
              <AccordionSection title="Column Layout">
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label>Column Span (1-12)</label>
                  <select 
                    className="form-control"
                    value={(() => {
                      const classes = (selectedNode.props?.class || '').split(/\s+/);
                      const spanMatch = classes.find(c => c.startsWith('uib-col-'));
                      return spanMatch ? spanMatch.replace('uib-col-', '') : '12';
                    })()}
                    onChange={e => {
                      const span = e.target.value;
                      const current = selectedNode.props?.class || '';
                      let classes = current.split(/\s+/).filter(c => !c.startsWith('uib-col-'));
                      classes.push(`uib-col-${span}`);
                      updateNodeProperty(selectedNode.id, 'class', classes.join(' ').trim());
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} Columns</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Align Self</label>
                  <select 
                    className="form-control"
                    value={selectedNode.props?.alignSelf || ''}
                    onChange={e => updateNodeProperty(selectedNode.id, 'alignSelf', e.target.value)}
                  >
                    <option value="">Default</option>
                    <option value="auto">Auto</option>
                    <option value="flex-start">Start</option>
                    <option value="center">Center</option>
                    <option value="flex-end">End</option>
                    <option value="stretch">Stretch</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Flex Grow</label>
                    <input 
                      type="number" 
                      className="form-control"
                      value={selectedNode.props?.flexGrow || 0}
                      min="0"
                      onChange={e => updateNodeProperty(selectedNode.id, 'flexGrow', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Flex Shrink</label>
                    <input 
                      type="number" 
                      className="form-control"
                      value={selectedNode.props?.flexShrink || 1}
                      min="0"
                      onChange={e => updateNodeProperty(selectedNode.id, 'flexShrink', parseInt(e.target.value) || 0)}
                    />
                  </div>
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
