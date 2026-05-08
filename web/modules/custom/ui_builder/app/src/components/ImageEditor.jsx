import { useState, useRef } from 'react';

export function ImageEditor({ mode, value, onUpdate }) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('files[image]', file);

      try {
        const csrfToken = window.drupalSettings?.ui_builder?.csrf_token;
        const headers = {};
        if (csrfToken) {
          headers['X-CSRF-Token'] = csrfToken;
        }

        const response = await fetch('/ui-builder/upload', {
          method: 'POST',
          body: formData,
          headers: headers,
        });
        
        if (response.ok) {
          const data = await response.json();
          onUpdate(data.url, 'static');
        } else {
          const errorData = await response.json().catch(() => ({}));
          alert('Upload failed: ' + (errorData.error || 'Server error ' + response.status));
        }
      } catch (err) {
        console.error('Error uploading file:', err);
        alert('Error connecting to upload server. Check console for details.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const images = Array.isArray(value) ? value : (value ? [value] : []);

  return (
    <div className="field-editor-wrapper image-editor">
      <div className="field-mode-toggle">
        <button type="button" className={`mode-btn ${mode === 'static' ? 'active' : ''}`} onClick={() => onUpdate(value, 'static')}>Static</button>
        <button type="button" className={`mode-btn ${mode === 'mapping' ? 'active' : ''}`} onClick={() => onUpdate(value, 'mapping')}>Mapping</button>
      </div>
      
      <div className="field-input-container">
        {mode === 'mapping' ? (
          <div className="input-with-prefix">
            <span className="prefix">[</span>
            <input type="text" className="mapping-source-input" value={typeof value === 'string' ? value : ''} placeholder="field_image_mapping" onChange={e => onUpdate(e.target.value, 'mapping')} />
            <span className="prefix">]</span>
          </div>
        ) : (
          <div className="image-static-controls">
            <div className="image-preview-grid">
              {images.length > 0 ? images.map((img, i) => (
                <div key={i} className="image-preview-item">
                  <img src={img} alt="Preview" />
                  <button type="button" className="remove-img" onClick={() => {
                    const newImgs = images.filter((_, idx) => idx !== i);
                    const finalVal = newImgs.length === 0 ? '' : (newImgs.length === 1 ? newImgs[0] : newImgs);
                    onUpdate(finalVal, 'static');
                  }}>× </button>
                </div>
              )) : (
                <div className="image-placeholder">No image selected</div>
              )}
            </div>
            
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*" />
            <button type="button" className="upload-btn" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
              {isUploading ? <><span className="spinner"></span>Uploading...</> : (images.length > 0 ? 'Change / Add Image' : 'Upload Image')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
