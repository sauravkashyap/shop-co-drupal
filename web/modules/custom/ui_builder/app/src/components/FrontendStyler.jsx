import React, { useState, useEffect, useRef } from 'react';
import App from '../App.jsx';

import { createPortal } from 'react-dom';

function PopupWindow({ isOpen, onClose, children }) {
  const [container, setContainer] = useState(null);
  const externalWindow = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Open a new browser window (popup)
      externalWindow.current = window.open('', '', 'width=940,height=570,left=100,top=100,menubar=no,toolbar=no,location=no,status=no');
      
      if (!externalWindow.current) {
        alert("Popup blocked! Please allow popups for this site.");
        onClose();
        return;
      }

      const doc = externalWindow.current.document;
      doc.title = 'UI Builder Styler';
      
      // Ensure relative paths work
      const baseEl = doc.createElement('base');
      baseEl.href = window.location.href;
      doc.head.appendChild(baseEl);
      
      // Copy all existing stylesheets and style tags
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach(node => {
        doc.head.appendChild(node.cloneNode(true));
      });
      
      // Set body styling
      doc.body.style.margin = '0';
      doc.body.style.padding = '0';
      doc.body.style.height = '100vh';
      doc.body.style.display = 'flex';
      doc.body.style.flexDirection = 'column';
      doc.body.style.backgroundColor = '#f9fafb';
      
      // Create container for portal
      const newContainer = doc.createElement('div');
      newContainer.style.flex = '1';
      newContainer.style.display = 'flex';
      newContainer.style.flexDirection = 'column';
      newContainer.style.overflow = 'hidden';
      doc.body.appendChild(newContainer);
      
      setContainer(newContainer);

      // Handle window close
      externalWindow.current.addEventListener('beforeunload', () => {
        onClose();
      });
    } else {
      if (externalWindow.current) {
        externalWindow.current.close();
        externalWindow.current = null;
      }
      setContainer(null);
    }
    
    return () => {
      if (externalWindow.current) {
        externalWindow.current.close();
      }
    };
  }, [isOpen]);

  if (!isOpen || !container) return null;

  return createPortal(children, container);
}

export default function FrontendStyler() {
  const [isOpen, setIsOpen] = useState(false);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchStyles();
    }
  }, [isOpen]);

  const getCsrfToken = () => {
    // The popup window shares the same session - get CSRF token from parent window's drupalSettings
    try {
      return window.drupalSettings?.ui_builder?.csrf_token 
        || window.opener?.drupalSettings?.ui_builder?.csrf_token 
        || '';
    } catch (e) {
      return '';
    }
  };

  const fetchStyles = async () => {
    try {
      const res = await fetch('/api/ui-builder/styles', { credentials: 'same-origin' });
      const data = await res.json();
      setStyles(data);
    } catch (e) {
      console.error("Failed to fetch UI builder styles", e);
    }
  };

  const handleSave = async (updatedStyle) => {
    try {
      const payload = {
        id: updatedStyle.id,
        label: updatedStyle.label,
        data: updatedStyle.data,
      };
      
      if (selectedStyle && selectedStyle.id !== updatedStyle.id) {
        payload.old_id = selectedStyle.id;
      }

      console.log('[UIB Save] Payload being sent:', JSON.stringify(payload, null, 2));
      console.log('[UIB Save] Root custom_properties:', payload.data?.custom_properties);
      const res = await fetch('/api/ui-builder/style/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCsrfToken(),
        },
        credentials: 'same-origin',
        body: JSON.stringify(payload)
      });
      const result = await res.json().catch(() => ({}));
      console.log('[UIB Save] Response:', res.status, result);
      
      if (res.ok) {
        // Cache bust the CSS link in the PARENT window (not popup)
        const parentDoc = window.opener?.document || document;
        const cssLink = parentDoc.querySelector('link[href*="uib-styles.css"]');
        if (cssLink) {
          const url = new URL(cssLink.href, window.location.origin);
          url.searchParams.set('t', Date.now());
          cssLink.href = url.toString();
        }
        
        // Go back to list
        setSelectedStyle(null);
        setIsCreatingNew(false);
        fetchStyles();
      } else {
        console.error("Save failed");
        alert("Failed to save style");
      }
    } catch (e) {
      console.error("Save error", e);
      alert("Error saving style");
    }
  };

  const handleBack = () => {
    setSelectedStyle(null);
    setIsCreatingNew(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999999,
          width: '50px',
          height: '50px',
          borderRadius: '25px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="UI Builder Styler"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
        </svg>
      </button>

      <PopupWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedStyle || isCreatingNew ? (
          <div style={{ flex: 1, position: 'relative', overflow: 'auto', backgroundColor: 'white' }}>
            <App 
              mode="style"
              initialStyle={selectedStyle || { id: '', label: '', data: { selector: '&', properties: {}, custom_properties: {}, children: [] } }}
              onSaveStyle={handleSave}
              onBackStyle={handleBack}
            />
          </div>
        ) : (
          <div style={{ padding: '20px' }}>
            <button 
              onClick={() => setIsCreatingNew(true)}
              style={{ padding: '12px 15px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px', width: '100%', fontWeight: 'bold' }}
            >
              + Create New Style
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {styles.map(s => (
                <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px', alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div>
                    <strong style={{ display: 'block', color: '#111827' }}>{s.label}</strong>
                    <span style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>.{s.id}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedStyle(s)}
                    style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                  >
                    Edit
                  </button>
                </div>
              ))}
              {styles.length === 0 && <div style={{ color: '#6b7280', textAlign: 'center', padding: '40px 0' }}>No custom styles found.</div>}
            </div>
          </div>
        )}
      </PopupWindow>
    </>
  );
}
