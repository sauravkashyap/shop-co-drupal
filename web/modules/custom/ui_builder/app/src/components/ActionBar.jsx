import React from 'react';
import { Menu, X, Diamond, Palette, Eye } from 'lucide-react';

export function ActionBar({ mode, onSavePage, onSaveAsComponent, onToggleStyles, sidebarOpen, onToggleSidebar, onPreview }) {
  return (
    <header className="ui-builder-action-bar">
      <div className="bar-left">
        <div className="builder-logo">
          <span className="logo-icon" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
            <Diamond size={20} />
          </span>
          <span className="logo-text">UI Builder</span>
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
            <button type="button" className="btn-secondary" onClick={onToggleStyles} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Palette size={16} /> Style Library
            </button>
          </>
        )}
        <button type="button" className="btn-secondary" onClick={onPreview} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Eye size={16} /> Preview
        </button>
      </div>
    </header>
  );
}
