import { useState } from 'react';
import { NodeChildren } from './NodeChildren';

// Returns the icon and background color for the element box
function getElementBranding(tag, label, isInstance) {
  if (isInstance) return { icon: '🧩', color: '#a855f7' };
  
  const l = label || tag || '';
  if (l.startsWith('Container') || l.startsWith('Section') || l.startsWith('Row') || l === 'Column' || tag === 'div') {
    return { icon: '□', color: '#f5a623' };
  }
  if (l === 'Image') return { icon: '🖼', color: '#0073ba' };
  if (l === 'Video') return { icon: '▶', color: '#0073ba' };
  if (l.startsWith('Heading') || l.startsWith('Header')) return { icon: 'H', color: '#0073ba' };
  if (l === 'WYSIWYG' || l === 'Paragraph' || tag === 'p') return { icon: '¶', color: '#0073ba' };
  if (l === 'Link' || tag === 'a') return { icon: '🔗', color: '#0073ba' };
  if (l === 'Button' || tag === 'button') return { icon: '▢', color: '#0073ba' };
  
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
  availableComponents, 
  isOverlay, 
  isDragging, 
  isOver, 
  attributes, 
  listeners, 
  setNodeRef, 
  style,
  depth = 0,
  isInherited = false
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isSelected = selectedId === node.id;
  const isContainer = ['div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav'].includes(node.tag);
  const isRow = node.label === 'Row for columns' || (node.label && node.label.startsWith('Row'));
  const isColumn = node.label === 'Column';
  const showDropOver = isOver && isContainer && !isDragging;
  const isInstance = !!node.component_id;

  const displayName = isInstance
    ? (node.label || 'Component')
    : node.label || (node.tag ? node.tag.charAt(0).toUpperCase() + node.tag.slice(1) : 'Element');

  const branding = getElementBranding(node.tag, displayName, isInstance);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        ss-box-el
        ${isSelected ? 'ss-box-selected' : ''}
        ${showDropOver ? 'ss-box-drop-over' : ''}
        ${isDragging ? 'ss-box-dragging' : ''}
        ${isOverlay ? 'ss-box-overlay' : ''}
        ${isColumn ? 'ss-box-column' : ''}
      `}
      onClick={e => { e.stopPropagation(); onSelect(node.id); }}
      onDoubleClick={e => { e.stopPropagation(); if (onOpenProperties) onOpenProperties(node.id); }}
    >
      {/* Top Bar */}
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

        {isContainer && (
          <button
            type="button"
            className="ss-box-action ss-box-collapse-btn"
            onClick={e => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? '⤢' : '⤡'}
          </button>
        )}

        <button
          type="button"
          className="ss-box-action ss-box-options-btn"
          onClick={e => e.stopPropagation()}
          title="Options"
        >
          •••
        </button>
      </div>

      {/* Body / Children */}
      {!isCollapsed && isContainer && (
        <div className={`ss-box-body ${isRow ? 'ss-box-row-body' : ''}`}>
          <NodeChildren
            parentNode={node}
            mode={mode}
            selectedId={selectedId}
            onSelect={onSelect}
            onOpenProperties={onOpenProperties}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
            availableComponents={availableComponents}
            depth={depth + 1}
            isInherited={isInherited || isInstance}
            isRow={isRow}
          />
        </div>
      )}

      {/* Text Content */}
      {!isCollapsed && !isContainer && node.content && (
        <div className="ss-box-text-content">
          {node.content}
        </div>
      )}
    </div>
  );
}
