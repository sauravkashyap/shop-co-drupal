import { useState, useEffect } from 'react';
import { FieldEditor } from './FieldEditor';
import { ImageEditor } from './ImageEditor';
import { getCustomClassesOnly, mergeClasses } from '../utils/styleUtils';

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
  const [activeTab, setActiveTab] = useState('general');
  const [styleCode, setStyleCode] = useState('');
  const [styleLabel, setStyleLabel] = useState('');

  // Switch to general tab when node changes
  useEffect(() => {
    if (selectedNode) setActiveTab('general');
  }, [selectedNodeId]);

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

        <div className="properties-tabs">
          <button 
            className={`prop-tab-btn ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button 
            className={`prop-tab-btn ${activeTab === 'styles' ? 'active' : ''}`}
            onClick={() => setActiveTab('styles')}
          >
            Styles
          </button>
          <button 
            className={`prop-tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            Content
          </button>
        </div>

        <div className="properties-content">
          {activeTab === 'general' && (
            <div className="animate-fade">
              <div className="form-section-title">Identity</div>
              <div className="form-group">
                <label>Label</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={selectedNode.label || ''} 
                  onChange={e => updateNodeField(selectedNode.id, { label: e.target.value })}
                  placeholder="Internal label..."
                />
              </div>
              {isPrimitive && (
                <div className="form-group">
                  <label>HTML Tag</label>
                  <select 
                    className="form-control" 
                    value={selectedNode.tag} 
                    onChange={e => updateNodeProperty(selectedNode.id, 'tag', e.target.value)}
                  >
                    <option value="div">div</option>
                    <option value="section">section</option>
                    <option value="header">header</option>
                    <option value="footer">footer</option>
                    <option value="h1">h1</option>
                    <option value="h2">h2</option>
                    <option value="h3">h3</option>
                    <option value="p">p</option>
                    <option value="span">span</option>
                    <option value="a">a</option>
                    <option value="img">img</option>
                    <option value="button">button</option>
                  </select>
                </div>
              )}
              <div className="form-group" style={{ marginTop: '32px' }}>
                <button 
                  className="delete-element-btn"
                  onClick={() => { removeNode(selectedNode.id); onDeselect(); }}
                >
                  Delete {isPrimitive ? 'Element' : 'Instance'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'styles' && (
            <div className="animate-fade">
              <div className="form-section-title">Global Styles</div>
              <div className="form-group">
                <label>Apply Global Style</label>
                <select 
                  className="form-control"
                  onChange={(e) => {
                    if (!e.target.value) return;
                    const current = getCustomClassesOnly(selectedNode.props?.class || '', selectedNode.tag, selectedNode.label);
                    const classes = current.split(' ').filter(Boolean);
                    if (!classes.includes(e.target.value)) {
                      classes.push(e.target.value);
                      const merged = mergeClasses(classes.join(' '), selectedNode.tag, selectedNode.label);
                      updateNodeProperty(selectedNode.id, 'class', merged);
                    }
                    e.target.value = '';
                  }}
                >
                  <option value="">Select style to apply...</option>
                  {customStyles.map(s => (
                    <option key={s.id} value={s.id}>{s.label || s.id}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Applied Styles</label>
                <div className="active-styles-list">
                  {(() => {
                    const current = getCustomClassesOnly(selectedNode.props?.class || '', selectedNode.tag, selectedNode.label);
                    const classes = current.split(' ').filter(Boolean);
                    if (classes.length === 0) return <p className="help-text">No custom styles applied.</p>;
                    return classes.map(cls => (
                      <div key={cls} className="style-tag">
                        <span className="style-tag-label">{cls}</span>
                        <button 
                          type="button"
                          className="style-tag-remove"
                          onClick={() => {
                            const filtered = classes.filter(c => c !== cls).join(' ');
                            const merged = mergeClasses(filtered, selectedNode.tag, selectedNode.label);
                            updateNodeProperty(selectedNode.id, 'class', merged);
                          }}
                        >✕</button>
                      </div>
                    ));
                  })()}
                </div>
              </div>

              <div className="form-section-title" style={{ marginTop: '32px' }}>Custom Classes</div>
              <div className="form-group">
                <label>Add Extra Class</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter class name..."
                    onKeyDown={e => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        const newClass = e.target.value.trim();
                        const current = getCustomClassesOnly(selectedNode.props?.class || '', selectedNode.tag, selectedNode.label);
                        const classes = current.split(' ').filter(Boolean);
                        if (!classes.includes(newClass)) {
                          classes.push(newClass);
                          const merged = mergeClasses(classes.join(' '), selectedNode.tag, selectedNode.label);
                          updateNodeProperty(selectedNode.id, 'class', merged);
                        }
                        e.target.value = '';
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>All Classes (Raw)</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedNode.props?.class || ''}
                  readOnly
                  style={{ opacity: 0.6, fontSize: '11px' }}
                />
              </div>
              
              <button 
                type="button" 
                className="btn-secondary" 
                style={{ width: '100%', marginTop: '12px' }}
                onClick={() => resetToDefaultProps(selectedNode.id)}
              >
                Reset to Defaults
              </button>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="animate-fade">
              <div className="form-section-title">Data Binding</div>
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
          )}
        </div>
      </aside>
    </>
  );
}
