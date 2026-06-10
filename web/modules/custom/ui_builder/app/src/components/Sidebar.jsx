import { useState, useEffect, createElement } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { ELEMENT_CATEGORIES } from '../constants/elements';
import { CATEGORY_COLORS } from '../constants/typeColors';
import { 
  Square, Columns, FileText, File, PanelLeft, 
  Image as ImageIcon, Play, Heading1, Heading2, Heading3, 
  Heading4, Heading5, Heading6, Type, MousePointerClick, 
  Link2, LayoutTemplate, Menu, ChevronDown, ChevronRight, 
  Component, Plus, Palette, CheckCircle2, X,
  Box, Layout, Compass, Hexagon, Quote, Minus,
  Table, List, Grid2X2, PanelTop, LayoutList, ListOrdered, ListTree,
  ClipboardList, TextCursorInput, MousePointer2, CircleDot, AlignLeft,
  SlidersHorizontal, ListCollapse, Rows, Frame, GripVertical, Grid3X3,
  Bold, Italic, Code, CaseLower
} from 'lucide-react';

// Icons for element types — matching Site Studio's colored square icons
const ELEMENT_ICONS = {
  'Container': Box,
  'Plain Div': Frame,
  'Row': Columns,
  'Column': GripVertical,
  'Section': FileText,
  'Article': File,
  'Main': Layout,
  'Aside': PanelLeft,
  'Navigation': Compass,
  'Grid': Grid3X3,
  // Media
  'Image': ImageIcon,
  'SVG': Hexagon,
  'Video': Play,
  // Typography
  'Heading 1': Heading1,
  'Heading 2': Heading2,
  'Heading 3': Heading3,
  'Heading 4': Heading4,
  'Heading 5': Heading5,
  'Heading 6': Heading6,
  'Paragraph': Type,
  'Quote': Quote,
  'Divider': Minus,
  'Span / Text': Type,
  'Bold': Bold,
  'Italic': Italic,
  'Code': Code,
  'Small': CaseLower,
  // Tables
  'Table': Table,
  'Table Head': PanelTop,
  'Table Body': LayoutList,
  'Table Row': Rows,
  'Table Cell': Grid2X2,
  // Lists
  'Unordered List': List,
  'Ordered List': ListOrdered,
  'List Item': ListTree,
  // Forms
  'Form': ClipboardList,
  'Label': Type,
  'Input Field': TextCursorInput,
  'Textarea': AlignLeft,
  'Select Dropdown': MousePointer2,
  'Advanced Select (Choices.js)': MousePointer2,
  'Select Option': CircleDot,
  // Interactive
  'Button': MousePointerClick,
  'Link': Link2,
  'Slider': SlidersHorizontal,
  'Accordion': ListCollapse,
  // Drupal
  'Block': LayoutTemplate,
  'Menu': Menu,
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
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </span>
        <span className="ss-element-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Component size={14} color="var(--text-muted)" />
        </span>
        <span className="ss-element-label">{comp.label}</span>
        <button type="button" className="ss-element-add" title={`Add ${comp.label}`}>
          <Plus size={16} />
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

  const IconComponent = ELEMENT_ICONS[el.label] || Square;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`ss-element-row ${isDragging ? 'is-dragging' : ''}`}
      onClick={() => onClick(el)}
      title={el.tooltip || `Add ${el.label}`}
      {...listeners}
      {...attributes}
    >
      <span className="ss-element-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconComponent size={14} color="var(--text-muted)" strokeWidth={2} />
      </span>
      <span className="ss-element-label">{el.label}</span>
      <button type="button" className="ss-element-add" title={`Add ${el.label}`}>
        <Plus size={16} />
      </button>
    </div>
  );
}

export function Sidebar({ 
  mode, 
  availableComponents = [], 
  customStyles = [],
  selectedNodeId, 
  currentStyle,
  selectedNode, 
  addElement, 
  addComponentInstance,
  onSelectStyle,
  onDeselect,
  onClose
}) {
  const [activeTab, setActiveTab] = useState('elements');
  const [search, setSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(() => {
    const saved = localStorage.getItem('uib_sidebar_expanded_categories');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return ['Layout', 'Media', 'Typography', 'Tables', 'Lists', 'Forms'];
  });

  useEffect(() => {
    localStorage.setItem('uib_sidebar_expanded_categories', JSON.stringify(expandedCategories));
  }, [expandedCategories]);

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
        <button type="button" className="sidebar-close-btn" onClick={onClose} title="Close" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <X size={16} />
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
            <button type="button" className="sidebar-search-clear" onClick={() => setSearch('')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={12} />
            </button>
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
                    <span style={{ fontSize: '10px', opacity: 0.5, display: 'flex' }}>
                      {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
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
                    className={`ss-element-row ${currentStyle?.id === style.id ? 'ss-element-row-active' : ''}`}
                    onClick={() => onSelectStyle(style.id)}
                  >
                    <span className="ss-element-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Palette size={14} color="var(--text-muted)" />
                    </span>
                    <span className="ss-element-label">.{style.id}</span>
                  </div>
                ))}
                <div
                  className="ss-element-row ss-element-row-add-new"
                  onClick={() => {
                    const id = 'style-' + Math.random().toString(36).substr(2, 5);
                    onSelectStyle(id);
                  }}
                >
                  <span className="ss-element-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={14} color="var(--text-muted)" />
                  </span>
                  <span className="ss-element-label">Create New Style</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected context hint */}
      {(selectedNodeId || currentStyle) && (
        <div className="sidebar-context-hint">
          {selectedNodeId ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--primary)" /> <strong>{selectedNode?.label || selectedNode?.tag}</strong>
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Palette size={16} color="var(--primary)" /> <strong>Style: .{currentStyle?.id}</strong>
            </span>
          )}
          <button type="button" className="deselect-link" onClick={onDeselect}>Deselect</button>
        </div>
      )}
    </aside>
  );
}
