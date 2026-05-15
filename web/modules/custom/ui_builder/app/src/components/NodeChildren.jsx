import { useDroppable } from '@dnd-kit/core';
import { SortableNode } from './SortableNode';
import { useDragState } from '../contexts/DragStateContext';
import { hasUniqueStyles } from '../utils/treeUtils';

/**
 * A thin horizontal drop zone rendered between nodes (or at the end).
 * Drop ID encodes parentId + insertion index so handleDragEnd can decode it.
 */
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

/**
 * A droppable zone on the node itself for "drop inside as last child".
 */
function DropOnNode({ nodeId }) {
  const dropId = `inside::${nodeId}`;
  const { setNodeRef, isOver } = useDroppable({ id: dropId });

  return (
    <div
      ref={setNodeRef}
      className={`ss-drop-inside ${isOver ? 'ss-drop-inside-active' : ''}`}
    />
  );
}

export function NodeChildren({ parentNode, mode, selectedId, onSelect, onOpenProperties, onDuplicate, onDelete, onQuickAdd, onStartTargetedAdd, onSaveAsComponent, pendingParentId, availableComponents, depth = 0, isInherited = false, isRow = false }) {
  const { isDraggingGlobal } = useDragState();
  const children = parentNode.children || [];

  // Row with columns — side by side flex layout
  if (isRow) {
    const baseClass = parentNode.props?.class || 'uib-row';
    const uniqueClass = hasUniqueStyles(parentNode) ? `uib-${parentNode.id}` : '';
    return (
      <div className={`ss-box-columns-wrap ${baseClass} ${uniqueClass}`}>
        {children.map((child, i) => {
          const colSpanClass = (child.props?.class || '').split(/\s+/).find(c => c.startsWith('uib-col-')) || 'uib-col-12';
          const childUniqueClass = hasUniqueStyles(child) ? `uib-${child.id}` : '';

          return (
            <div key={child.id} className={`ss-box-col-slot ${colSpanClass} ${childUniqueClass}`}>
              {isDraggingGlobal && <DropGap parentId={parentNode.id} index={i} isActive={isDraggingGlobal} />}
              <SortableNode
                node={child}
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
                depth={depth}
                isInherited={isInherited}
              />
            </div>
          );
        })}
        {isDraggingGlobal && <DropGap parentId={parentNode.id} index={children.length} isActive={isDraggingGlobal} />}
      </div>
    );
  }

  // Normal stacked children
  return (
    <div className="ss-box-children-wrap">
      {children.map((child, i) => (
        <div key={child.id} className="ss-drop-slot">
          {isDraggingGlobal && <DropGap parentId={parentNode.id} index={i} isActive={isDraggingGlobal} />}
          <SortableNode
            node={child}
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
            depth={depth}
            isInherited={isInherited}
          />
        </div>
      ))}
      {/* Final gap — drop after last child */}
      {isDraggingGlobal && <DropGap parentId={parentNode.id} index={children.length} isActive={isDraggingGlobal} />}
      {/* Empty padding at the bottom of a container to allow dropping */}
      <div className="ss-box-empty-drop-area" />
    </div>
  );
}
