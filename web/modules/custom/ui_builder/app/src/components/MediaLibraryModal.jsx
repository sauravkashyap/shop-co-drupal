import { useState, useEffect, useRef } from 'react';
import './MediaLibraryModal.css';

export function MediaLibraryModal({ isOpen, onClose, onSelect }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      fetchImages();
    }
  }, [isOpen]);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/ui-builder/images');
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (err) {
      console.error('Error fetching images:', err);
    } finally {
      setIsLoading(false);
    }
  };

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
          // Refresh list to show new image
          fetchImages();
        } else {
          const errorData = await response.json().catch(() => ({}));
          alert('Upload failed: ' + (errorData.error || 'Server error ' + response.status));
        }
      } catch (err) {
        console.error('Error uploading file:', err);
        alert('Error connecting to upload server.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="media-library-modal-overlay" onClick={onClose}>
      <div className="media-library-modal-container" onClick={e => e.stopPropagation()}>
        <div className="media-library-modal-header">
          <h3>Media Library</h3>
          <button type="button" className="close-modal-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="media-library-modal-body">
          <div className="media-library-actions">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*,.svg" />
            <button type="button" className="upload-new-btn" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Upload New Image'}
            </button>
            <span className="media-library-help-text">Allowed formats: PNG, JPG, GIF, WEBP, SVG</span>
          </div>

          {isLoading ? (
            <div className="loading-state">Loading images...</div>
          ) : (
            <div className="images-grid">
              {images.map(img => (
                <div key={img.mid} className="image-item" onClick={() => onSelect(img.url)}>
                  <div className="image-wrapper">
                    <img src={img.url} alt={img.name} title={img.name} />
                  </div>
                  <div className="image-name">{img.name}</div>
                </div>
              ))}
              {images.length === 0 && <div className="no-images">No images found.</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
