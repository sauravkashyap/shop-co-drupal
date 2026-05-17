import { useState, useEffect, useRef } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { NodeChildren } from './NodeChildren';
import { CONTAINER_TAGS } from '../constants/elements';
import { useDragState } from '../contexts/DragStateContext';
import { hasUniqueStyles } from '../utils/treeUtils';

// Returns the icon and background color for the element box
function getElementBranding(tag, label, isInstance) {
  if (isInstance) return { icon: '🧩', color: '#a855f7' };
  
  const l = label || tag || '';
  if (l.startsWith('Container') || l.startsWith('Plain Div') || l.startsWith('Section') || l.startsWith('Row') || l.startsWith('Column') || tag === 'div' || tag === 'main' || tag === 'aside' || tag === 'article' || tag === 'nav') {
    if (tag === 'aside') return { icon: '◧', color: '#fbbf24' };
    if (tag === 'article') return { icon: '📄', color: '#d97706' };
    if (tag === 'section') return { icon: '📑', color: '#f5a623' };
    if (tag === 'main') return { icon: '🔲', color: '#f5a623' };
    if (tag === 'nav') return { icon: '⟁', color: '#f5a623' };
    return { icon: '□', color: '#f5a623' };
  }
  if (l === 'Image') return { icon: '🖼', color: '#0073ba' };
  if (tag === 'svg') return { icon: 'S', color: '#0073ba' };
  if (l === 'Video') return { icon: '▶', color: '#0073ba' };
  if (l.startsWith('Heading') || l.startsWith('Header')) return { icon: 'H', color: '#0073ba' };
  if (l === 'WYSIWYG' || l === 'Paragraph' || tag === 'p') return { icon: '¶', color: '#0073ba' };
  if (l === 'Link' || tag === 'a') return { icon: '🔗', color: '#0073ba' };
  if (l === 'Button' || tag === 'button') return { icon: '▢', color: '#0073ba' };
  if (tag === 'ul' || tag === 'ol') return { icon: '≡', color: '#0073ba' };
  if (tag === 'li') return { icon: '•', color: '#0073ba' };
  if (tag === 'table') return { icon: '▦', color: '#10b981' };
  if (['thead', 'tbody'].includes(tag)) return { icon: '☰', color: '#10b981' };
  if (tag === 'tr') return { icon: '＝', color: '#10b981' };
  if (['th', 'td'].includes(tag)) return { icon: '▫', color: '#10b981' };
  if (tag === 'form') return { icon: '✉', color: '#f43f5e' };
  if (tag === 'label') return { icon: 'L', color: '#f43f5e' };
  if (['input', 'textarea', 'select'].includes(tag)) return { icon: '✎', color: '#f43f5e' };
  if (tag === 'option') return { icon: '○', color: '#f43f5e' };
  
  return { icon: '📄', color: '#0073ba' };
}

export function NodeCard({ 
  node, 
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
  // Make the container body a droppable zone for "drop inside as last child"
  const isContainer = CONTAINER_TAGS.includes(node.tag) || (node.children && node.children.length > 0) || !!node.component_id;
  const { setNodeRef: setDropInsideRef, isOver: isOverInside } = useDroppable({ 
    id: `inside::${node.id}`,
    disabled: !isContainer || isDragging,
  });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  useEffect(() => {
    const onCollapseAll = () => setIsCollapsed(true);
    const onExpandAll = () => setIsCollapsed(false);
    window.addEventListener('ss-collapse-all', onCollapseAll);
    window.addEventListener('ss-expand-all', onExpandAll);
    return () => {
      window.removeEventListener('ss-collapse-all', onCollapseAll);
      window.removeEventListener('ss-expand-all', onExpandAll);
    };
  }, []);


  const isSelected = selectedId === node.id;
  const isRow = node.label === 'Row for columns' || (node.label && node.label.startsWith('Row'));
  const isColumn = node.label === 'Column';
  const showDropOver = isOverInside && isContainer && !isDragging && isDraggingGlobal;
  const isInstance = !!node.component_id;

  let displayName = isInstance
    ? (node.label || 'Component')
    : node.label || (node.tag ? node.tag.charAt(0).toUpperCase() + node.tag.slice(1) : 'Element');

  // Add layout info to display name for Rows and Columns
  if (isColumn) {
    let span = '12';
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
      style={{ ...style, touchAction: 'none' }}
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
        e.stopPropagation(); 
        onSelect(node.id); 
      }}
      onDoubleClick={e => { e.stopPropagation(); if (onOpenProperties) onOpenProperties(node.id); }}
    >
      {/* Top Bar — drag handle */}
      <div 
        className="ss-box-topbar"
        {...attributes}
        {...listeners}
      >
        <span className="ss-box-icon" style={{ background: branding.color }}>
          {branding.icon}
        </span>

        <span className="ss-box-title">{displayName}</span>

        <span className="ss-box-spacer" />

        {(isContainer || node.content) && (
          <>
            {isContainer && (
              <button
                type="button"
                className="ss-box-action ss-box-targeted-add"
                onClick={e => { e.stopPropagation(); onStartTargetedAdd(node.id); }}
                title="Add element inside..."
              >
                +
              </button>
            )}
            <button
              type="button"
              className="ss-box-action ss-box-collapse-btn"
              onClick={e => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
              title={isCollapsed ? "Expand" : "Collapse"}
            >
              {isCollapsed ? '⤢' : '⤡'}
            </button>
          </>
        )}

        <div className="ss-box-menu-container" ref={menuRef} onClick={e => e.stopPropagation()}>
          <button
            type="button"
            className="ss-box-action ss-box-options-btn"
            onClick={e => { e.stopPropagation(); setShowMenu(!showMenu); }}
            title="Options"
          >
            •••
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
              <button type="button" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onSaveAsComponent) onSaveAsComponent(node.id); }}>Save to Library</button>
              <div className="ss-box-dropdown-divider"></div>
              <button type="button" className="ss-box-dropdown-danger" onClick={(e) => { e.stopPropagation(); setShowMenu(false); if (onDelete) onDelete(node.id); }}>Delete</button>
            </div>
          )}
        </div>
      </div>

      {/* Body / Children */}
      {!isCollapsed && isContainer && (
        <div ref={setDropInsideRef} className={`ss-box-body ${isRow ? 'ss-box-row-body' : ''} ${showDropOver ? 'ss-box-drop-inside-active' : ''}`}>
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
      {!isCollapsed && !isContainer && node.content && (
        <div className="ss-box-text-content">
          {node.tag === 'img' ? (
            <div className="ss-box-image-preview">
              <img 
                src={node.content} 
                alt="Preview" 
                style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '4px', display: 'block', margin: '0 auto' }} 
              />
            </div>
          ) : (
            node.content
          )}
        </div>
      )}
    </div>
  );
}
