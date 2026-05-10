import { useDroppable } from '@dnd-kit/core';
import { SortableNode } from './SortableNode';

export function CanvasRoot({ 
  nodes, 
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
  isDragging 
}) {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-root' });
  return (
    <div 
      ref={setNodeRef} 
      className={`tree-render ${isOver ? 'root-over' : ''} ${isDragging ? 'is-dragging-mode' : ''}`}
    >
      {nodes.map(node => (
        <SortableNode
          key={node.id}
          node={node}
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
        />
      ))}
      {isDragging && (
        <div className="canvas-extract-hint">
          Drop here to move to root
        </div>
      )}
    </div>
  );
}
