import { useState } from 'react';
import { MediaLibraryModal } from './MediaLibraryModal';

export function ImageEditor({ mode, value, onUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
            
            <button type="button" className="upload-btn" onClick={() => setIsModalOpen(true)}>
              {images.length > 0 ? 'Change / Add Image' : 'Select / Upload Image'}
            </button>
          </div>
        )}
      </div>

      <MediaLibraryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={(url) => {
          onUpdate(url, 'static');
          setIsModalOpen(false);
        }} 
      />
    </div>
  );
}
