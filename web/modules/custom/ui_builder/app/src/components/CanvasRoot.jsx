import { useDroppable } from '@dnd-kit/core';
import { SortableNode } from './SortableNode';
import { useDragState } from '../contexts/DragStateContext';

function DropGap({ parentId, index, isActive }) {
  const dropId = `gap::${parentId}::${index}`;
  const { setNodeRef, isOver } = useDroppable({ id: dropId });

  return (
    <div
      ref={setNodeRef}
      className={`ss-drop-gap ${isOver ? 'ss-drop-gap-active' : ''} ${isActive ? 'ss-drop-gap-visible' : ''}`}
    />
  );
}

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
  availableComponents
}) {
  const { isDraggingGlobal } = useDragState();
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-root' });
  
  return (
    <div 
      ref={setNodeRef} 
      className={`tree-render ${isOver ? 'root-over' : ''} ${isDraggingGlobal ? 'is-dragging-mode' : ''}`}
    >
      {nodes.map((node, i) => (
        <div key={node.id} className="ss-drop-slot">
          {isDraggingGlobal && <DropGap parentId="canvas-root" index={i} isActive={isDraggingGlobal} />}
          <SortableNode
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
        </div>
      ))}
      {/* Final gap — drop after last root node */}
      {isDraggingGlobal && <DropGap parentId="canvas-root" index={nodes.length} isActive={isDraggingGlobal} />}
      {isDraggingGlobal && (
        <div className="canvas-extract-hint">
          Drop here to move to root
        </div>
      )}
    </div>
  );
}
