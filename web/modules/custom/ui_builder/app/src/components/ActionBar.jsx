import React from 'react';

export function ActionBar({ mode, onSavePage, onSaveAsComponent, onToggleStyles, sidebarOpen, onToggleSidebar }) {
  return (
    <header className="ui-builder-action-bar">
      <div className="bar-left">
        <button 
          type="button" 
          className={`ss-sidebar-toggle ${sidebarOpen ? 'active' : ''}`}
          onClick={onToggleSidebar}
          title={sidebarOpen ? 'Hide Elements' : 'Show Elements'}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="2" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="9" y="2" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
        <div className="builder-logo">
          <span className="logo-icon" style={{ color: 'var(--primary)' }}>💠</span>
          <span className="logo-text">Site Studio <span style={{ fontWeight: 300, opacity: 0.7 }}>Unified</span></span>
        </div>
        <div className="mode-badge" style={{ 
          background: mode === 'architect' ? '#dbeafe' : '#dcfce7',
          color: mode === 'architect' ? '#1e40af' : '#166534', 
          fontSize: '10px', 
          fontWeight: 700, 
          padding: '2px 8px', 
          borderRadius: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {mode === 'architect' ? 'Component Builder' : 'Page Composer'}
        </div>
      </div>
      
      <div className="bar-center">
        {/* Future: Undo/Redo, Viewport Switcher */}
      </div>

      <div className="bar-right">
        {mode === 'architect' && (
          <>
            <button type="button" className="btn-secondary" onClick={onToggleStyles}>
              <span className="icon">🎨</span> Style Library
            </button>
            <button type="button" className="btn-secondary" onClick={onSaveAsComponent}>
              <span className="icon">🧩</span> Save as Component
            </button>
          </>
        )}
      </div>
    </header>
  );
}
