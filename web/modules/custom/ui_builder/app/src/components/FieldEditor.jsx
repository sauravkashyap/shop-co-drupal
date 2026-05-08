export function FieldEditor({ mode, value, onUpdate }) {
  return (
    <div className="field-editor-wrapper">
      <div className="field-mode-toggle">
        <button type="button" className={`mode-btn ${mode === 'static' ? 'active' : ''}`} onClick={() => onUpdate(value, 'static')}>Static</button>
        <button type="button" className={`mode-btn ${mode === 'mapping' ? 'active' : ''}`} onClick={() => onUpdate(value, 'mapping')}>Mapping</button>
      </div>
      <div className="field-input-container">
        {mode === 'mapping' ? (
          <div className="input-with-prefix">
            <span className="prefix">[</span>
            <input type="text" className="mapping-source-input" value={value || ''} placeholder="e.g. node:title" onChange={e => onUpdate(e.target.value, 'mapping')} />
            <span className="prefix">]</span>
          </div>
        ) : (
          <textarea className="form-control" value={value || ''} placeholder="Enter text content..." onChange={e => onUpdate(e.target.value, 'static')} />
        )}
      </div>
    </div>
  );
}
