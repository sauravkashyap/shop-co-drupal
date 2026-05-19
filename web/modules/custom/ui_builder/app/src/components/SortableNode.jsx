import { useDraggable } from '@dnd-kit/core';
import { NodeCard } from './NodeCard';

export function SortableNode({ node, mode, selectedId, onSelect, onOpenProperties, onDuplicate, onDelete, onQuickAdd, onStartTargetedAdd, onSaveAsComponent, pendingParentId, availableComponents, depth = 0, isInherited = false, isRow = false }) {
  const { 
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
    isDragging 
  } = useDraggable({ id: node.id });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    position: 'relative',
  };

  return (
    <NodeCard
      node={node}
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
      isDragging={isDragging}
      attributes={attributes}
      listeners={listeners}
      setNodeRef={setNodeRef}
      style={style}
      depth={depth}
      isInherited={isInherited}
      isRow={isRow}
    />
  );
}
