import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { ELEMENT_CATEGORIES } from '../constants/elements';
import { CATEGORY_COLORS } from '../constants/typeColors';

// Icons for element types — matching Site Studio's colored square icons
const ELEMENT_ICONS = {
  // Layout
  'Container': '□',
  'Row for columns': '⊞',
  'Column': '⊞',
  'Section': '📑',
  'Article': '📄',
  'Main': '🔲',
  'Aside': '◧',
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

function ComponentTreePreview({ nodes }) {
  if (!nodes || !Array.isArray(nodes)) return null;
  
  return (
    <ul className="ss-preview-list">
      {nodes.map((node, i) => (
        <li key={i} className="ss-preview-item">
          <span className="ss-preview-tag">{node.tag}</span>
          {node.label && <span className="ss-preview-label">({node.label})</span>}
          {node.children && node.children.length > 0 && (
            <ComponentTreePreview nodes={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

function LibraryComponent({ comp, addComponentInstance }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="ss-component-item">
      <div
        className={`ss-element-row ${isExpanded ? 'ss-element-row-expanded' : ''}`}
        onClick={() => addComponentInstance(comp.id)}
        title={`Add ${comp.label}`}
      >
        <span 
          className="ss-component-toggle" 
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? '▼' : '▶'}
        </span>
        <span className="ss-element-icon" style={{ background: '#8b5cf6' }}>🧩</span>
        <span className="ss-element-label">{comp.label}</span>
        <button type="button" className="ss-element-add" title={`Add ${comp.label}`}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {isExpanded && comp.layout_tree && (
        <div className="ss-component-preview">
          <ComponentTreePreview nodes={comp.layout_tree} />
        </div>
      )}
    </div>
  );
}

function DraggableElement({ el, catColor, onClick }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `sidebar-el-${el.label}`,
    data: {
      type: 'sidebar-element',
      element: el
    }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 1000,
    opacity: isDragging ? 0.5 : 1
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`ss-element-row ${isDragging ? 'is-dragging' : ''}`}
      onClick={() => onClick(el)}
      title={`Add ${el.label}`}
      {...listeners}
      {...attributes}
    >
      <span className="ss-element-icon" style={{ background: catColor }}>
        {el.icon || ELEMENT_ICONS[el.label] || '□'}
      </span>
      <span className="ss-element-label">{el.label}</span>
      <button type="button" className="ss-element-add" title={`Add ${el.label}`}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

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
  const [expandedCategories, setExpandedCategories] = useState(['Layout', 'Media', 'Typography', 'Tables', 'Lists', 'Forms']);

  const toggleCategory = (name) => {
    setExpandedCategories(prev => 
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

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
              const isExpanded = expandedCategories.includes(cat.name) || search;
              return (
                <div key={cat.name} className={`ss-element-category ${isExpanded ? 'expanded' : 'collapsed'}`}>
                  <div 
                    className="ss-category-title" 
                    onClick={() => toggleCategory(cat.name)}
                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>{cat.name} elements</span>
                    <span style={{ fontSize: '10px', opacity: 0.5 }}>{isExpanded ? '▼' : '▶'}</span>
                  </div>
                  {isExpanded && (
                    <div className="ss-category-list">
                      {cat.elements.map(el => (
                        <DraggableElement 
                          key={el.label} 
                          el={el} 
                          catColor={catColor} 
                          onClick={addElement} 
                        />
                      ))}
                    </div>
                  )}
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
                  <LibraryComponent 
                    key={comp.id} 
                    comp={comp} 
                    addComponentInstance={addComponentInstance} 
                  />
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
