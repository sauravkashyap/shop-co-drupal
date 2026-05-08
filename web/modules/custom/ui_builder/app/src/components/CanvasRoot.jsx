import { useDroppable } from '@dnd-kit/core';

export function CanvasRoot({ children, isDragging }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-root' });
  return (
    <div 
      ref={setNodeRef} 
      className={`tree-render ${isOver ? 'root-over' : ''} ${isDragging ? 'is-dragging-mode' : ''}`}
    >
      {children}
      {isDragging && (
        <div className="canvas-extract-hint">
          Drop here to move to root
        </div>
      )}
    </div>
  );
}
