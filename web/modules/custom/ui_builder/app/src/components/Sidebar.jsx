import { useState } from 'react';
import { ELEMENT_CATEGORIES } from '../constants/elements';
import { CATEGORY_COLORS } from '../constants/typeColors';

// Icons for element types — matching Site Studio's colored square icons
const ELEMENT_ICONS = {
  // Layout
  'Container': '□',
  'Row for columns': '⊞',
  'Column': '⊞',
  'Section': '□',
  'Grid': '⊞',
  // Media
  'Image': '🖼',
  'Video': '▶',
  // Typography
  'Heading 1': 'H1',
  'Heading 2': 'H2',
  'Heading 3': 'H3',
  'Heading 4': 'H4',
  'Heading 5': 'H5',
  'Heading 6': 'H6',
  'Paragraph': '¶',
  'Span / Text': 'T',
  // Interactive
  'Button': '▢',
  'Link': '⟁',
  // Drupal
  'Block': '☐',
  'Menu': '☰',
};

export function Sidebar({ 
  mode, 
  availableComponents = [], 
  customStyles = [],
  selectedNodeId, 
  selectedStyleId,
  selectedNode, 
  addElement, 
  addComponentInstance,
  onSelectStyle,
  onDeselect,
  onClose
}) {
  const [activeTab, setActiveTab] = useState('elements');
  const [search, setSearch] = useState('');

  // Filter elements by search query
  const filteredCategories = ELEMENT_CATEGORIES.map(cat => ({
    ...cat,
    elements: cat.elements.filter(el =>
      !search || el.label.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.elements.length > 0);

  return (
    <aside className="ui-builder-sidebar">
      {/* Header with close */}
      <div className="sidebar-header">
        <h3 className="sidebar-header-title">Elements</h3>
        <button type="button" className="sidebar-close-btn" onClick={onClose} title="Close">
          ✕
        </button>
      </div>

      {/* Tab bar */}
      <div className="sidebar-tabs">
        {['elements', 'library', 'styles'].map(tab => (
          <button
            key={tab}
            type="button"
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Search — only on Elements tab */}
      {activeTab === 'elements' && (
        <div className="sidebar-search">
          <span className="sidebar-search-icon">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <input
            type="text"
            className="sidebar-search-input"
            placeholder="Search for Elements"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button type="button" className="sidebar-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>
      )}

      {/* Tab Content */}
      <div className="sidebar-content">

        {/* ── Elements Tab ── */}
        {activeTab === 'elements' && (
          <div className="animate-fade">
            {filteredCategories.length === 0 && (
              <div className="no-items-hint">No elements match "{search}"</div>
            )}
            {filteredCategories.map(cat => {
              const catColor = CATEGORY_COLORS[cat.name] || '#64748b';
              return (
                <div key={cat.name} className="ss-element-category">
                  <div className="ss-category-title">{cat.name} elements</div>
                  <div className="ss-category-list">
                    {cat.elements.map(el => (
                      <div
                        key={el.label}
                        className="ss-element-row"
                        onClick={() => addElement(el)}
                        title={`Add ${el.label}`}
                      >
                        <span className="ss-element-icon" style={{ background: catColor }}>
                          {ELEMENT_ICONS[el.label] || '□'}
                        </span>
                        <span className="ss-element-label">{el.label}</span>
                        <button type="button" className="ss-element-add" title={`Add ${el.label}`}>
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Library Tab ── */}
        {activeTab === 'library' && (
          <div className="animate-fade">
            <div className="ss-element-category">
              <div className="ss-category-title">Reusable Components</div>
              <div className="ss-category-list">
                {availableComponents.map(comp => (
                  <div
                    key={comp.id}
                    className="ss-element-row"
                    onClick={() => addComponentInstance(comp.id)}
                    title={`Add ${comp.label}`}
                  >
                    <span className="ss-element-icon" style={{ background: '#8b5cf6' }}>🧩</span>
                    <span className="ss-element-label">{comp.label}</span>
                    <button type="button" className="ss-element-add">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
                {availableComponents.length === 0 && (
                  <div className="no-items-hint">No components saved yet.</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Styles Tab ── */}
        {activeTab === 'styles' && (
          <div className="animate-fade">
            <div className="ss-element-category">
              <div className="ss-category-title">Global Styles</div>
              <div className="ss-category-list">
                {customStyles.map(style => (
                  <div
                    key={style.id}
                    className={`ss-element-row ${selectedStyleId === style.id ? 'ss-element-row-active' : ''}`}
                    onClick={() => onSelectStyle(style.id)}
                  >
                    <span className="ss-element-icon" style={{ background: '#10b981' }}>🎨</span>
                    <span className="ss-element-label">.{style.id}</span>
                  </div>
                ))}
                <div
                  className="ss-element-row ss-element-row-add-new"
                  onClick={() => {
                    const label = prompt('Enter a label for the new style:');
                    if (label) {
                      const id = label.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                      onSelectStyle(id);
                    }
                  }}
                >
                  <span className="ss-element-icon" style={{ background: '#475569' }}>+</span>
                  <span className="ss-element-label">New Style</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected context hint */}
      {(selectedNodeId || selectedStyleId) && (
        <div className="sidebar-context-hint">
          {selectedNodeId ? (
            <span>✅ <strong>{selectedNode?.label || selectedNode?.tag}</strong></span>
          ) : (
            <span>🎨 <strong>Style: .{selectedStyleId}</strong></span>
          )}
          <button type="button" className="deselect-link" onClick={onDeselect}>Deselect</button>
        </div>
      )}
    </aside>
  );
}
