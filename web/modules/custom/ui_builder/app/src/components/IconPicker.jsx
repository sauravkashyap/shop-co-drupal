import { useState, useRef, useEffect } from 'react';
import { ARROW_ICONS } from '../constants/icons';

export function IconPicker({ value, onSelect, label = 'Select Icon' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const pickerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const filteredIcons = ARROW_ICONS.filter(icon => 
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="icon-picker-container" ref={pickerRef} style={{ position: 'relative' }}>
      <button 
        type="button" 
        className="sb-btn" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px',
          width: '100%',
          padding: '8px 12px',
          border: '1px solid var(--sb-border)',
          background: 'var(--sb-bg-main)',
          color: 'var(--sb-text-main)'
        }}
      >
        {value ? <i className={value} style={{ fontSize: '18px' }}></i> : <span>{label}</span>}
        {value && <span style={{ fontSize: '12px', opacity: 0.8 }}>{value.split('-').pop()}</span>}
      </button>
      
      {isOpen && (
        <div 
          className="icon-picker-popover" 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '260px',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            zIndex: 9999,
            marginTop: '8px',
            padding: '12px'
          }}
        >
          <input 
            type="text" 
            placeholder="Search icons..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              marginBottom: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '13px'
            }}
          />
          
          <div 
            className="icon-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              maxHeight: '200px',
              overflowY: 'auto',
              paddingRight: '4px' // for scrollbar
            }}
          >
            {filteredIcons.length > 0 ? (
              filteredIcons.map(icon => (
                <button
                  key={icon}
                  type="button"
                  title={icon}
                  onClick={() => {
                    onSelect(icon);
                    setIsOpen(false);
                  }}
                  style={{
                    background: value === icon ? '#e0e7ff' : 'transparent',
                    border: 'none',
                    padding: '10px 0',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    color: value === icon ? '#3730a3' : '#374151',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#f3f4f6'}
                  onMouseOut={(e) => e.currentTarget.style.background = value === icon ? '#e0e7ff' : 'transparent'}
                >
                  <i className={icon} style={{ fontSize: '20px' }}></i>
                </button>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px 0', color: 'var(--sb-text-muted)' }}>
                No icons found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
