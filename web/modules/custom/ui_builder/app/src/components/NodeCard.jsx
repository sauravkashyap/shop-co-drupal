import { useState, useEffect, useRef } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { NodeChildren } from './NodeChildren';
import { CONTAINER_TAGS } from '../constants/elements';
import { useDragState } from '../contexts/DragStateContext';
import { 
  Component, Square, PanelLeft, File, FileText, Triangle, 
  Image as ImageIcon, Play, Heading, Type, Link2, 
  MousePointerClick, List, Circle, Grid3X3, AlignJustify, 
  Minus, FormInput, TextSelect, CircleDot, 
  Plus, ChevronDown, ChevronUp, MoreHorizontal,
  Box, Layout, Compass, Hexagon, Quote, Table, Rows, Grid2X2, 
  PanelTop, LayoutList, ListOrdered, ListTree, ClipboardList, 
  TextCursorInput, MousePointer2, AlignLeft, SlidersHorizontal, ListCollapse,
  Frame, GripVertical, Bold, Italic, Code, CaseLower,
  Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Columns,
  LayoutTemplate, Menu, ChevronRight, ChevronLeft
} from 'lucide-react';

// Returns the icon and color for the element box
function getBaseElementBranding(tag, label, isInstance) {
  if (isInstance) return { icon: Component };
  
  const l = label || tag || '';
  
  // Try exact label match first
  const EXACT_MATCHES = {
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
    'Image': ImageIcon,
    'SVG': Hexagon,
    'Video': Play,
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
    'Table': Table,
    'Table Head': PanelTop,
    'Table Body': LayoutList,
    'Table Row': Rows,
    'Table Cell': Grid2X2,
    'Unordered List': List,
    'Ordered List': ListOrdered,
    'List Item': ListTree,
    'Form': ClipboardList,
    'Label': Type,
    'Input Field': TextCursorInput,
    'Textarea': AlignLeft,
    'Select Dropdown': MousePointer2,
    'Select Option': CircleDot,
    'Button': MousePointerClick,
    'Link': Link2,
    'Slider': SlidersHorizontal,
    'Accordion': ListCollapse,
    'Block': LayoutTemplate,
    'Menu': Menu,
    'Slider Track': Columns,
    'Next Arrow': ChevronRight,
    'Prev Arrow': ChevronLeft,
    'Pagination': MoreHorizontal,
    'Accordion Item': AlignJustify,
    'Accordion Header': Heading,
    'Header Text': Type,
    'Accordion Icon': ChevronDown,
    'Accordion Content': AlignLeft
  };
  
  if (EXACT_MATCHES[l]) return { icon: EXACT_MATCHES[l] };

  // Fallbacks for tags
  if (tag === 'main') return { icon: Layout };
  if (tag === 'aside') return { icon: PanelLeft };
  if (tag === 'article') return { icon: File };
  if (tag === 'section') return { icon: FileText };
  if (tag === 'nav') return { icon: Compass };
  if (tag === 'svg') return { icon: Hexagon };
  if (tag === 'strong' || tag === 'b') return { icon: Bold };
  if (tag === 'em' || tag === 'i') return { icon: Italic };
  if (tag === 'code') return { icon: Code };
  if (tag === 'small') return { icon: CaseLower };
  if (tag === 'p' || tag === 'span') return { icon: Type };
  if (tag === 'blockquote') return { icon: Quote };
  if (tag === 'hr') return { icon: Minus };
  if (tag === 'a') return { icon: Link2 };
  if (tag === 'button') return { icon: MousePointerClick };
  if (tag === 'ul') return { icon: List };
  if (tag === 'ol') return { icon: ListOrdered };
  if (tag === 'li') return { icon: ListTree };
  if (tag === 'table') return { icon: Table };
  if (tag === 'thead') return { icon: PanelTop };
  if (tag === 'tbody') return { icon: LayoutList };
  if (tag === 'tr') return { icon: Rows };
  if (['th', 'td'].includes(tag)) return { icon: Grid2X2 };
  if (tag === 'form') return { icon: ClipboardList };
  if (tag === 'label') return { icon: Type };
  if (tag === 'input') return { icon: TextCursorInput };
  if (tag === 'textarea') return { icon: AlignLeft };
  if (tag === 'select') return { icon: MousePointer2 };
  if (tag === 'option') return { icon: CircleDot };
  
  // Partial matches for renamed nodes
  if (l.startsWith('Container')) return { icon: Box };
  if (l.startsWith('Plain Div')) return { icon: Frame };
  if (l.startsWith('Row')) return { icon: Columns };
  if (l.startsWith('Column')) return { icon: GripVertical };
  if (l.startsWith('Grid')) return { icon: Grid3X3 };
  if (l.startsWith('Heading') || l.startsWith('Header')) return { icon: Heading };
  if (l.startsWith('Slide Content')) return { icon: Box };
  if (l.startsWith('Slide')) return { icon: Square };
  if (tag === 'div') return { icon: Square };

  return { icon: File };
}

function getElementBranding(tag, label, isInstance) {
  const base = getBaseElementBranding(tag, label, isInstance);
  const COLORS = {
    layout: '#3b82f6',     // blue
    typography: '#10b981', // green
    media: '#8b5cf6',      // purple
    interactive: '#f97316',// orange
    basic: '#94a3b8'       // gray
  };
  
  let category = COLORS.basic;
  const lowerLabel = (label || '').toLowerCase();
  const lowerTag = (tag || '').toLowerCase();
  
  if (isInstance) {
    category = COLORS.interactive;
  } else if (['container', 'row', 'column', 'grid', 'section', 'article', 'main', 'aside', 'nav', 'block', 'table', 'tbody', 'thead', 'tr', 'td', 'th', 'list', 'ul', 'ol', 'li'].some(k => lowerLabel.includes(k) || lowerTag === k)) {
    category = COLORS.layout;
  } else if (['heading', 'header text', 'paragraph', 'text', 'span', 'quote', 'label', 'strong', 'b', 'em', 'i', 'code', 'small', 'p', 'a'].some(k => lowerLabel.includes(k) || lowerTag === k)) {
    category = COLORS.typography;
  } else if (['image', 'svg', 'video', 'img'].some(k => lowerLabel.includes(k) || lowerTag === k)) {
    category = COLORS.media;
  } else if (['button', 'link', 'slider', 'accordion', 'menu', 'form', 'input', 'textarea', 'select', 'pagination', 'arrow'].some(k => lowerLabel.includes(k) || lowerTag === k)) {
    category = COLORS.interactive;
  } else if (['div'].some(k => lowerLabel.includes(k) || lowerTag === k)) {
    category = COLORS.basic;
  }

  return { ...base, color: category };
}

export function NodeCard({ 
  node, 
  parentNode,
  mode, 
  selectedId, 
  onSelect,
  onOpenProperties,
  onDuplicate,
  onDelete,
  onQuickAdd,
  onStartTargetedAdd,
  onSaveAsComponent,
  pendingParentId,
  availableComponents, 
  isOverlay, 
  isDragging, 
  attributes, 
  listeners, 
  setNodeRef, 
  style,
  depth = 0,
  isInherited = false
}) {
  const { isDraggingGlobal } = useDragState();
  const isInstance = !!node.component_id;
  
  const isAccordionInnerIcon = parentNode?.props?.class?.includes('uib-accordion-icon') && node.label === 'Icon';
  const effectivelyUnselectable = node.isUnselectable || isAccordionInnerIcon;
  
  const isAccordionIconWrapper = node.props?.class?.includes('uib-accordion-icon');
  
  // Make the container body a droppable zone for "drop inside as last child"
  const isContainer = (CONTAINER_TAGS.includes(node.tag) || (node.children && node.children.length > 0)) && !isAccordionIconWrapper;
  const { setNodeRef: setDropInsideRef, isOver: isOverInside } = useDroppable({ 
    id: `inside::${node.id}`,
    disabled: !isContainer || isDragging || isInherited || isInstance || effectivelyUnselectable,
  });
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem(`uib_node_collapse_${node.id}`);
    if (saved !== null) return saved === 'true';
    return !!node.isCollapsed;
  });
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(`uib_node_collapse_${node.id}`, isCollapsed);
  }, [isCollapsed, node.id]);

  useEffect(() => {
    const nodeState = !!node.isCollapsed;
    setIsCollapsed(prev => {
      if (node.isCollapsed !== undefined && nodeState !== prev) return nodeState;
      return prev;
    });
  }, [node.isCollapsed]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);



  const toggleCollapse = (e) => {
    e.stopPropagation();
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    window.dispatchEvent(new CustomEvent('ss-update-node-field', {
      detail: { id: node.id, updates: { isCollapsed: newState } }
    }));
  };


  const isSelected = selectedId === node.id;
  const isRow = node.label === 'Row for columns' || (node.label && node.label.startsWith('Row'));
  const isColumn = node.label === 'Column';
  const showDropOver = isOverInside && isContainer && !isDragging && isDraggingGlobal;

  let displayName = isInstance
    ? (node.label || 'Component')
    : node.label || (node.tag ? node.tag.charAt(0).toUpperCase() + node.tag.slice(1) : 'Element');

  // Add layout info to display name for Rows and Columns
  if (isColumn) {
    let span;
    const customWidth = node.instanceStyles?.custom_properties?.['max-width'];
    if (customWidth) {
      const pct = parseFloat(customWidth.replace('%', ''));
      span = Math.round((pct / 100) * 12).toString();
    } else {
      const colClass = (node.props?.class || '').split(/\s+/).find(c => c.startsWith('uib-col-')) || 'uib-col-12';
      span = colClass.replace('uib-col-', '');
    }
    displayName = `${displayName} (${span}/12)`;
  } else if (isRow) {
    const dir = node.props?.flexDirection;
    if (dir && dir !== 'row') {
      displayName = `${displayName} (${dir.charAt(0).toUpperCase() + dir.slice(1)})`;
    }
  }

  const branding = getElementBranding(node.tag, displayName, isInstance);

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, touchAction: 'none', '--node-color': branding.color }}
      className={`
        ss-box-el
        ${isSelected ? 'ss-box-selected' : ''}
        ${showDropOver ? 'ss-box-drop-over' : ''}
        ${isDragging ? 'ss-box-dragging' : ''}
        ${isOverlay ? 'ss-box-overlay' : ''}
        ${isColumn ? 'ss-box-column' : ''}
        ${node.tag === 'aside' ? `uib-aside-${node.props?.side || 'left'}` : ''}
        ${node.tag === 'aside' && node.props?.collapsible ? 'uib-collapsible' : ''}
        ${pendingParentId === node.id ? 'ss-box-is-targeted' : ''}
      `}
      onClick={e => { 
        if (effectivelyUnselectable) return;
        e.stopPropagation(); 
        onSelect(node.id); 
      }}
      onDoubleClick={e => { 
        if (effectivelyUnselectable) return;
        e.stopPropagation(); 
        if (onOpenProperties) onOpenProperties(node.id); 
      }}
    >
      {/* Top Bar — drag handle */}
      {!effectivelyUnselectable && (
        <div 
        className="ss-box-topbar"
        {...attributes}
        {...listeners}
      >
        <span className="ss-box-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {branding.icon && <branding.icon size={14} color="var(--node-color, var(--text-muted))" strokeWidth={2.5} />}
        </span>

        <span className="ss-box-title">{displayName}</span>

        <span className="ss-box-spacer" />

        {(isContainer || node.content) && (
          <>
            {isContainer && !isInherited && !isInstance && (
              <button
                type="button"
                className="ss-box-action ss-box-targeted-add"
                onClick={e => { e.stopPropagation(); onStartTargetedAdd(node.id); }}
                title="Add element inside..."
              >
                <Plus size={14} strokeWidth={2.5} />
              </button>
            )}
            <button
              type="button"
              className="ss-box-action ss-box-collapse-btn"
              onClick={toggleCollapse}
              title={isCollapsed ? "Expand" : "Collapse"}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isCollapsed ? <ChevronDown size={14} strokeWidth={2} /> : <ChevronUp size={14} strokeWidth={2} />}
            </button>
          </>
        )}

        {!isInherited && (
          <div className="ss-box-menu-container" ref={menuRef} onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="ss-box-action ss-box-options-btn"
              onClick={e => { e.stopPropagation(); setShowMenu(!showMenu); }}
              title="Options"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <MoreHorizontal size={14} strokeWidth={2.5} />
            </button>
            
            {showMenu && (
              <div className="ss-box-dropdown">
                <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onOpenProperties) onOpenProperties(node.id); }}>Edit Settings</button>
                <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onDuplicate) onDuplicate(node.id); }}>Duplicate</button>
                
                {/* Quick Add Shortcuts */}
                 {node.tag === 'table' && (
                  <>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'thead'); }}>+ Add Table Head (thead)</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'tbody'); }}>+ Add Table Body (tbody)</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'tr'); }}>+ Add Row (tr)</button>
                  </>
                )}
                {['thead', 'tbody'].includes(node.tag) && (
                  <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'tr'); }}>+ Add Row (tr)</button>
                )}
                {node.tag === 'tr' && (
                  <>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'td'); }}>+ Add Cell (td)</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'th'); }}>+ Add Cell (th)</button>
                  </>
                )}
                {node.tag === 'form' && (
                  <>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'input'); }}>+ Add Input</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'label'); }}>+ Add Label</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'select'); }}>+ Add Select</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'textarea'); }}>+ Add Textarea</button>
                  </>
                )}
                {['ul', 'ol'].includes(node.tag) && (
                  <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'li'); }}>+ Add Item</button>
                )}
                {node.tag === 'select' && (
                  <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onQuickAdd) onQuickAdd(node.id, 'option'); }}>+ Add Option</button>
                )}

                <div className="ss-box-dropdown-divider"></div>
                <button type="button" className="ss-box-dropdown-danger" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onDelete) onDelete(node.id); }}>Delete</button>
              </div>
            )}
          </div>
        )}
      </div>
      )}

      {/* Body / Children */}
      {!isCollapsed && isContainer && (
        <div 
          ref={setDropInsideRef} 
          className={`ss-box-body ${isRow ? 'ss-box-row-body' : ''} ${showDropOver ? 'ss-box-drop-inside-active' : ''}`}
          style={(node.props?.isBgImage && node.content && !(typeof node.content === 'string' && /^\{\{\s*field_/.test(node.content.trim()))) ? { 
            backgroundImage: `url(${node.content})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100px'
          } : (node.props?.isBgImage ? { minHeight: '100px', backgroundColor: '#f3f4f6', border: '1px dashed #cbd5e1' } : {})}
        >
          <NodeChildren
            parentNode={node}
            mode={mode}
            selectedId={selectedId}
            onSelect={onSelect}
            onOpenProperties={onOpenProperties}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
            onQuickAdd={onQuickAdd}
            onStartTargetedAdd={onStartTargetedAdd}
            onSaveAsComponent={onSaveAsComponent}
            pendingParentId={pendingParentId}
            availableComponents={availableComponents}
            depth={depth + 1}
            isInherited={isInherited || isInstance}
            isRow={isRow}
          />
        </div>
      )}

      {/* Text or Image Content */}
      {(() => {
        const isAutoAssignedField = (str) => typeof str === 'string' && /^\{\{\s*field_/i.test(str.trim());
        const displayContent = isAutoAssignedField(node.content) ? '' : node.content;

        return !isCollapsed && !isContainer && displayContent && (
          <div className="ss-box-text-content">
            {node.tag === 'img' ? (
              <div className="ss-box-image-preview">
                <img 
                  src={displayContent} 
                  alt="Preview" 
                  style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '4px', display: 'block', margin: '0 auto' }} 
                />
              </div>
            ) : node.tag === 'video' ? (
              <div className="ss-box-video-preview">
                <video 
                  src={displayContent} 
                  controls 
                  style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '4px', display: 'block', margin: '0 auto' }} 
                />
              </div>
            ) : node.tag === 'svg' ? (
              // SVG: URL from media library → img preview; raw markup → render inline
              <div className="ss-box-image-preview" style={{ textAlign: 'center', padding: '8px' }}>
                {displayContent.trim().startsWith('<') ? (
                  // Raw SVG markup — render it
                  <div 
                    style={{ display: 'inline-block', maxWidth: '100%', maxHeight: '150px' }}
                    dangerouslySetInnerHTML={{ __html: displayContent }} 
                  />
                ) : (
                  // URL from media library — show as img
                  <img 
                    src={displayContent} 
                    alt="SVG Preview" 
                    style={{ maxWidth: '100%', maxHeight: '150px', display: 'block', margin: '0 auto' }} 
                  />
                )}
              </div>
            ) : (
              displayContent
            )}
          </div>
        );
      })()}
    </div>
  );
}
