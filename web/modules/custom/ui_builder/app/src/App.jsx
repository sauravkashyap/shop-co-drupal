import { useState, useEffect, useRef } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  MeasuringStrategy,
  pointerWithin,
  rectIntersection,
  getFirstCollision,
  useDroppable,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './App.css';

const DEFAULT_ELEMENTS = [
  { type: 'div', label: 'Container', icon: '📦' },
  { type: 'h1', label: 'Heading 1', icon: 'H1' },
  { type: 'p', label: 'Paragraph', icon: 'P' },
  { type: 'img', label: 'Image', icon: '🖼️' },
  { type: 'button', label: 'Button', icon: '🔘' },
];

// ─── Tree Utilities ────────────────────────────────────────────────────────────

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function findNodeById(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children?.length) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

/** Returns { parentArray, index } where the node lives. parentArray is the array reference. */
function findNodeLocation(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) return { parentArray: nodes, index: i };
    if (nodes[i].children?.length) {
      const found = findNodeLocation(nodes[i].children, id);
      if (found) return found;
    }
  }
  return null;
}

function deleteNodeById(nodes, id) {
  return nodes
    .filter(n => n.id !== id)
    .map(n => ({ ...n, children: n.children ? deleteNodeById(n.children, id) : [] }));
}

function hydrateTree(nodes, schema) {
  if (!nodes) return [];
  return nodes.map(node => {
    let newNode = { ...node };
    if (node.tag !== 'div' && node.content?.includes('{{')) {
      const key = node.content.replace(/\{\{\s*|\s*\}\}/g, '');
      if (schema?.[key]) {
        newNode.content = schema[key].default.value;
        newNode.fieldMode = schema[key].default.mode;
      }
    }
    if (node.children) newNode.children = hydrateTree(node.children, schema);
    return newNode;
  });
}

// ─── FieldEditor ───────────────────────────────────────────────────────────────

function FieldEditor({ mode, value, onUpdate }) {
  return (
    <div className="field-editor-wrapper">
      <div className="field-mode-toggle">
        <button type="button" className={`mode-btn ${mode === 'static' ? 'active' : ''}`} onClick={() => onUpdate(value, 'static')}>Static</button>
        <button type="button" className={`mode-btn ${mode === 'mapping' ? 'active' : ''}`} onClick={() => onUpdate(value, 'mapping')}>Mapping</button>
      </div>
      <div className="field-input-container">
        {mode === 'mapping' ? (
          <div className="input-with-prefix">
            <span className="prefix">[</span>
            <input type="text" className="mapping-source-input" value={value || ''} placeholder="e.g. node:title" onChange={e => onUpdate(e.target.value, 'mapping')} />
            <span className="prefix">]</span>
          </div>
        ) : (
          <textarea value={value || ''} placeholder="Enter text content..." onChange={e => onUpdate(e.target.value, 'static')} />
        )}
      </div>
    </div>
  );
}

// ─── NodeCard (Pure Visual Component) ──────────────────────────────────────────

function NodeCard({ 
  node, 
  mode, 
  selectedId, 
  onSelect, 
  availableComponents, 
  isOverlay, 
  isDragging, 
  isOver, 
  attributes, 
  listeners, 
  setNodeRef, 
  style 
}) {
  const isSelected = selectedId === node.id;
  const isContainer = node.tag === 'div';
  const hasChildren = isContainer && node.children?.length > 0;
  const showDropOver = isOver && isContainer && !isDragging;

  const component = mode === 'composer' ? availableComponents?.find(c => c.id === node.component_id) : null;
  const schema = component?.form_schema || {};
  const schemaEntries = typeof schema === 'object' && !Array.isArray(schema) ? Object.entries(schema) : [];

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`node-preview ${isSelected ? 'selected' : ''} mode-${mode} ${isContainer && !hasChildren ? 'empty-container' : ''} ${isOverlay ? 'is-overlay' : ''} ${showDropOver ? 'drop-over' : ''} ${isDragging ? 'is-dragging' : ''}`}
      onClick={e => { e.stopPropagation(); onSelect(node.id); }}
    >
      <div className="node-label">
        <span className="drag-handle" {...attributes} {...listeners}>⠿</span>
        <span className="tag-name">
          {mode === 'architect' ? node.tag : node.label}
          {node.props?.class && <span className="class-name"> .{node.props.class.split(' ')[0]}</span>}
        </span>
        {isContainer && (
          <span className="container-badge">Container</span>
        )}
      </div>

      {mode === 'architect' && !isContainer && node.content && (
        <div className="node-content-preview">{node.content}</div>
      )}

      {mode === 'composer' && schemaEntries.length > 0 && (
        <div className="instance-preview-pills">
          {schemaEntries.map(([k, s]) => {
            const data = node.values?.[k] || { mode: 'static', value: '' };
            const entry = typeof data === 'object' ? data : { mode: 'static', value: data };
            return (
              <div key={k} className="instance-pill">
                <strong>{s.title || k}:</strong> {entry.mode === 'mapping' ? `[${entry.value}]` : (entry.value || '').substring(0, 40)}
              </div>
            );
          })}
        </div>
      )}

      {isContainer && (
        <NodeChildren
          parentNode={node}
          mode={mode}
          selectedId={selectedId}
          onSelect={onSelect}
          availableComponents={availableComponents}
        />
      )}
    </div>
  );
}

// ─── SortableNode (Logic Wrapper) ─────────────────────────────────────────────

function SortableNode({ node, mode, selectedId, onSelect, availableComponents }) {
  const { 
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
    transition, 
    isDragging, 
    isOver 
  } = useSortable({ id: node.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <NodeCard
      node={node}
      mode={mode}
      selectedId={selectedId}
      onSelect={onSelect}
      availableComponents={availableComponents}
      isDragging={isDragging}
      isOver={isOver}
      attributes={attributes}
      listeners={listeners}
      setNodeRef={setNodeRef}
      style={style}
    />
  );
}

// ─── NodeChildren – each container gets its own DndContext ─────────────────────

function NodeChildren({ parentNode, mode, selectedId, onSelect, availableComponents }) {
  const children = parentNode.children || [];
  const childIds = children.map(c => c.id);

  return (
    <div className={`node-children ${children.length === 0 ? 'node-children-empty' : ''}`}>
      <SortableContext items={childIds} strategy={verticalListSortingStrategy}>
        {children.length === 0 && (
          <span className="drop-hint">Empty container</span>
        )}
        {children.map(child => (
          <SortableNode
            key={child.id}
            node={child}
            mode={mode}
            selectedId={selectedId}
            onSelect={onSelect}
            availableComponents={availableComponents}
          />
        ))}
      </SortableContext>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────

function App({ mode, initialLayout, initialSchema, availableComponents, onUpdate }) {
  const [layoutTree, setLayoutTree] = useState(() => {
    if (mode === 'architect') return hydrateTree(initialLayout, initialSchema);
    return initialLayout || [];
  });
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  // Ref so sidebar click handlers always see the latest selectedNodeId (no stale closure)
  // Ref so sidebar click handlers always see the latest selectedNodeId (no stale closure)
  const selectedNodeIdRef = useRef(null);
  const selectNode = (id) => {
    setSelectedNodeId(id);
    selectedNodeIdRef.current = id;
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Sync to Drupal
  useEffect(() => {
    if (mode === 'architect') {
      const newSchema = {};
      const transformedTree = deepClone(layoutTree);
      const processNodes = nodes => {
        nodes.forEach(node => {
          if (node.tag !== 'div') {
            const key = node.fieldLabel
              ? node.fieldLabel.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '')
              : `field_${node.id}`;
            const title = node.fieldLabel || `${node.tag.toUpperCase()}: ${(node.content || '').substring(0, 20)}`;
            newSchema[key] = { type: 'textfield', title, default: { mode: node.fieldMode || 'static', value: node.content || '' } };
            node.content = `{{ ${key} }}`;
          }
          if (node.children) processNodes(node.children);
        });
      };
      processNodes(transformedTree);
      if (onUpdate) onUpdate(transformedTree, newSchema);
    } else {
      if (onUpdate) onUpdate(layoutTree);
    }
  }, [layoutTree, mode, onUpdate]);

  // ── Tree Mutations ──────────────────────────────────────────────────────────

  /** Move a node from wherever it is into a target container */
  const moveIntoContainer = (draggedId, containerId) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      // Find the dragged node and pluck it out
      const loc = findNodeLocation(tree, draggedId);
      if (!loc) return prev;
      const [dragged] = loc.parentArray.splice(loc.index, 1);
      // Find the target container and push into it
      const container = findNodeById(tree, containerId);
      if (!container) return prev;
      if (!container.children) container.children = [];
      container.children.push(dragged);
      return tree;
    });
  };

  /** Move a node from wherever it is out to the root list */
  const moveToRoot = (draggedId, overRootId) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const loc = findNodeLocation(tree, draggedId);
      if (!loc) return prev;
      const [dragged] = loc.parentArray.splice(loc.index, 1);
      // Place next to the over node at root level
      const overIndex = tree.findIndex(n => n.id === overRootId);
      if (overIndex !== -1) {
        tree.splice(overIndex, 0, dragged);
      } else {
        tree.push(dragged);
      }
      return tree;
    });
  };

  /** Reorder items inside a specific parent (or root) */
  const reorderInParent = (parentId, oldIndex, newIndex) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      if (parentId === '__root__') {
        const [item] = tree.splice(oldIndex, 1);
        tree.splice(newIndex, 0, item);
        return tree;
      }
      const parent = findNodeById(tree, parentId);
      if (!parent?.children) return prev;
      const [item] = parent.children.splice(oldIndex, 1);
      parent.children.splice(newIndex, 0, item);
      return tree;
    });
  };

  /** Root-level drag start */
  const handleDragStart = (event) => {
    const { active } = event;
    const node = findNodeById(layoutTree, active.id);
    if (node) setActiveNode(node);
  };

  /** Root-level drag over - handles nested movement preview */
  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = active.id;
    const overId = over.id;

    // Logic for live moving across containers can go here if we want "sortable" feel
    // For now, we'll keep it simple and handle the move in handleDragEnd
  };

  /** Root-level drag end */
  const handleRootDragEnd = (event) => {
    const { active, over } = event;
    setActiveNode(null);

    const activeId = active.id;
    const overId = over?.id;

    if (!overId || activeId === overId) return;

    setLayoutTree(prev => {
      const tree = deepClone(prev);
      
      const locActive = findNodeLocation(tree, activeId);
      if (!locActive) return prev;

      const [dragged] = locActive.parentArray.splice(locActive.index, 1);

      if (overId === 'canvas-root') {
        // Dragged to the background -> move to end of root
        tree.push(dragged);
        return tree;
      }

      const locOver = findNodeLocation(tree, overId);

      if (locOver) {
        const overNode = locOver.parentArray[locOver.index];
        if (overNode?.tag === 'div' && overNode.id !== activeId) {
          // If we drop on a container, add it as a child
          overNode.children = overNode.children || [];
          overNode.children.push(dragged);
        } else {
          // Otherwise, insert at the position of the node we're over
          locOver.parentArray.splice(locOver.index, 0, dragged);
        }
      } else {
        // Fallback: move back to root
        tree.push(dragged);
      }
      
      return tree;
    });
  };

  /** Component for the droppable root area - covers the whole canvas */
  const CanvasRoot = ({ children, isDragging }) => {
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
  };

  // ── Element / Component Addition ────────────────────────────────────────────

  const addElement = (elType) => {
    const newNode = {
      id: Math.random().toString(36).substr(2, 9),
      tag: elType,
      props: { class: '' },
      children: [],
      content: elType === 'div' ? '' : `New ${elType}`,
      fieldMode: 'static',
    };
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const currentSelectedId = selectedNodeIdRef.current;
      if (currentSelectedId) {
        const target = findNodeById(tree, currentSelectedId);
        if (target?.tag === 'div') {
          target.children = target.children || [];
          target.children.push(newNode);
          return tree;
        }
      }
      return [...tree, newNode];
    });
  };

  const addComponentInstance = (compId) => {
    const comp = availableComponents.find(c => c.id === compId);
    const schema = comp?.form_schema || {};
    const initialValues = {};
    if (typeof schema === 'object' && !Array.isArray(schema)) {
      Object.keys(schema).forEach(key => {
        initialValues[key] = schema[key].default || { mode: 'static', value: '' };
      });
    }
    const newNode = { id: Math.random().toString(36).substr(2, 9), component_id: compId, label: comp?.label || compId, values: initialValues };
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const currentSelectedId = selectedNodeIdRef.current;
      if (currentSelectedId) {
        const target = findNodeById(tree, currentSelectedId);
        if (target?.tag === 'div') {
          target.children = target.children || [];
          target.children.push(newNode);
          return tree;
        }
      }
      return [...tree, newNode];
    });
  };

  // ── Property Updates ────────────────────────────────────────────────────────

  const updateNodeProperty = (id, key, value) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, id);
      if (node) { node.props = node.props || {}; node.props[key] = value; }
      return tree;
    });
  };

  const updateNodeField = (id, updates) => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, id);
      if (node) Object.assign(node, updates);
      return tree;
    });
  };

  const updateInstanceValue = (instanceId, key, value, valueMode = 'static') => {
    setLayoutTree(prev => {
      const tree = deepClone(prev);
      const node = findNodeById(tree, instanceId);
      if (node) { node.values = { ...(node.values || {}), [key]: { mode: valueMode, value } }; }
      return tree;
    });
  };

  const selectedNode = selectedNodeId ? findNodeById(layoutTree, selectedNodeId) : null;
  const selectedComponent = mode === 'composer' && selectedNode
    ? availableComponents.find(c => c.id === selectedNode.component_id)
    : null;

    const dropAnimation = {
      sideEffects: defaultDropAnimationSideEffects({
        styles: {
          active: {
            opacity: '0.5',
          },
        },
      }),
    };

    /** Custom collision detection for better nesting/extraction */
    const customCollisionDetection = (args) => {
      // 1. First check pointer collisions
      const pointerCollisions = pointerWithin(args);
      
      // 2. Filter out the active element itself
      const filteredCollisions = pointerCollisions.filter(c => c.id !== args.active.id);
      
      // 3. Separate "real" nodes from the background canvas
      const nodeCollisions = filteredCollisions.filter(c => c.id !== 'canvas-root');
      const rootCollision = filteredCollisions.find(c => c.id === 'canvas-root');

      // 4. If we are over any specific nodes (containers or siblings), prioritize them
      if (nodeCollisions.length > 0) {
        // Use closestCenter among the nodes we're actually hovering over
        // This makes it feel much more natural for reordering and nesting
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(container => 
            nodeCollisions.some(c => c.id === container.id)
          )
        });
      }

      // 5. If we are ONLY over the canvas-root, return that
      if (rootCollision) {
        return [rootCollision];
      }

      // 6. Final fallback
      return closestCenter(args);
    };

    return (
    <div className={`ui-builder-container mode-${mode}`}>
      {/* ── Sidebar ── */}
      <aside className="ui-builder-sidebar">
        <div className="pane-header">{mode === 'architect' ? 'Primitives' : 'Library'}</div>
        <div className="elements-list">
          {mode === 'architect' ? (
            DEFAULT_ELEMENTS.map(el => (
              <div key={el.type} className="element-item" onClick={() => addElement(el.type)}>
                <span className="icon">{el.icon}</span>
                <span className="label">{el.label}</span>
              </div>
            ))
          ) : (
            availableComponents.map(comp => (
              <div key={comp.id} className="element-item component-item" onClick={() => addComponentInstance(comp.id)}>
                <span className="icon">🧩</span>
                <span className="label">{comp.label}</span>
              </div>
            ))
          )}
        </div>
        {selectedNodeId && (
          <div className="sidebar-context-hint">
            ✅ <strong>Container selected</strong><br />
            Elements will be added inside it.
          </div>
        )}
      </aside>

      {/* ── Canvas ── */}
      <main className="ui-builder-canvas">
        <div className="pane-header">{mode === 'architect' ? 'Component Canvas' : 'Page Canvas'}</div>
        <div className="canvas-content" onClick={() => { setSelectedNodeId(null); selectedNodeIdRef.current = null; }}>
          {layoutTree.length === 0 ? (
            <div className="empty-state">
              <p>{mode === 'architect' ? 'Add elements from the left panel.' : 'Add components from the left panel.'}</p>
            </div>
          ) : (
            <DndContext 
              sensors={sensors} 
              collisionDetection={customCollisionDetection} 
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleRootDragEnd}
              measuring={{
                droppable: {
                  strategy: MeasuringStrategy.Always,
                },
              }}
            >
              <SortableContext 
                items={layoutTree.map(n => n.id)} 
                strategy={verticalListSortingStrategy}
              >
                <CanvasRoot isDragging={!!activeNode}>
                  {layoutTree.map(node => (
                    <SortableNode
                      key={node.id}
                      node={node}
                      mode={mode}
                      selectedId={selectedNodeId}
                      onSelect={selectNode}
                      availableComponents={availableComponents}
                    />
                  ))}
                </CanvasRoot>
              </SortableContext>

              <DragOverlay dropAnimation={dropAnimation}>
                {activeNode ? (
                  <NodeCard
                    node={activeNode}
                    mode={mode}
                    selectedId={null}
                    onSelect={() => {}}
                    availableComponents={availableComponents}
                    isOverlay
                  />
                ) : null}
              </DragOverlay>
            </DndContext>
          )}
        </div>
      </main>

      {/* ── Properties Panel ── */}
      <aside className="ui-builder-properties">
        <div className="pane-header">Configuration</div>
        <div className="properties-content">
          {selectedNode ? (
            <div className="properties-form">
              {mode === 'architect' ? (
                <>
                  <div className="form-group">
                    <label>Tag</label>
                    <input type="text" value={selectedNode.tag} disabled />
                  </div>
                  <div className="form-group">
                    <label>CSS Classes</label>
                    <input
                      type="text"
                      placeholder="e.g. flex gap-4 bg-white"
                      value={selectedNode.props?.class || ''}
                      onChange={e => updateNodeProperty(selectedNode.id, 'class', e.target.value)}
                    />
                  </div>
                  {selectedNode.tag !== 'div' && (
                    <>
                      <div className="form-group">
                        <label>Field Name</label>
                        <input
                          type="text"
                          placeholder="e.g. hero_title"
                          value={selectedNode.fieldLabel || ''}
                          onChange={e => updateNodeField(selectedNode.id, { fieldLabel: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Content / Mapping</label>
                        <FieldEditor
                          mode={selectedNode.fieldMode || 'static'}
                          value={selectedNode.content || ''}
                          onUpdate={(val, m) => updateNodeField(selectedNode.id, { content: val, fieldMode: m })}
                        />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {(() => {
                    const schema = selectedComponent?.form_schema || {};
                    const entries = typeof schema === 'object' && !Array.isArray(schema) ? Object.entries(schema) : [];
                    if (entries.length === 0) return <p className="no-fields-hint">This component has no editable fields.</p>;
                    return entries.map(([key, fieldSchema]) => {
                      const data = selectedNode.values?.[key] || { mode: 'static', value: '' };
                      const entry = typeof data === 'object' ? data : { mode: 'static', value: data };
                      return (
                        <div className="form-group" key={key}>
                          <label>{fieldSchema.title || key}</label>
                          <FieldEditor
                            mode={entry.mode}
                            value={entry.value}
                            onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                          />
                        </div>
                      );
                    });
                  })()}
                </>
              )}
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  setLayoutTree(prev => deleteNodeById(prev, selectedNode.id));
                  setSelectedNodeId(null);
                }}
              >
                🗑 Remove Item
              </button>
            </div>
          ) : (
            <div className="empty-selection">Select an item to configure it</div>
          )}
        </div>
      </aside>
    </div>
  );
}

export default App;
