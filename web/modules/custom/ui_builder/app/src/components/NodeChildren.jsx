import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableNode } from './SortableNode';

export function NodeChildren({ parentNode, mode, selectedId, onSelect, onOpenProperties, onDuplicate, onDelete, onQuickAdd, onStartTargetedAdd, onSaveAsComponent, pendingParentId, availableComponents, depth = 0, isInherited = false, isRow = false }) {
  const children = parentNode.children || [];
  const childIds = children.map(c => c.id);

  // Row with columns — side by side flex layout
  if (isRow) {
    return (
      <div className="ss-box-columns-wrap">
        <SortableContext items={childIds} strategy={verticalListSortingStrategy}>
          {children.map((child) => (
            <div key={child.id} className="ss-box-col-slot">
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
        </SortableContext>
      </div>
    );
  }

  // Normal stacked children
  return (
    <div className="ss-box-children-wrap">
      <SortableContext items={childIds} strategy={verticalListSortingStrategy}>
        {children.map(child => (
          <SortableNode
            key={child.id}
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
        ))}
      </SortableContext>
      {/* Empty padding at the bottom of a container to allow dropping */}
      <div className="ss-box-empty-drop-area" />
    </div>
  );
}
