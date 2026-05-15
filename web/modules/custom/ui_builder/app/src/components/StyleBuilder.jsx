import { useState, useEffect } from 'react';
import './StyleBuilder.css';
import { 
  STANDARD_PROPS, 
  PropertyEditor, 
  SelectorTree 
} from './StyleBuilderComponents';

/**
 * Site Studio-style Custom Style Builder.
 * Manages a tree of selectors and properties for a single custom class.
 */
export function StyleBuilder({ style, onSave, onBack }) {
  const [data, setData] = useState(() => {
    let initialData = style.data;
    if (!initialData) {
      return {
        selector: '&',
        properties: {},
        custom_properties: {},
        children: []
      };
    }
    // Deep clone to prevent mutating props
    let clonedData = JSON.parse(JSON.stringify(initialData));
    
    // Migrate old custom CSS properties from properties to custom_properties
    const migrateCustomProps = (node) => {
      if (node.properties) {
        if (!node.custom_properties) node.custom_properties = {};
        Object.keys(node.properties).forEach(key => {
          if (!STANDARD_PROPS.includes(key)) {
            // It's a custom property!
            node.custom_properties[key] = node.properties[key];
            delete node.properties[key];
          }
        });
      }
      if (node.children) {
        node.children.forEach(migrateCustomProps);
      }
    };
    migrateCustomProps(clonedData);
    return clonedData;
  });

  const [selectedNodePath, setSelectedNodePath] = useState(['root']);
  const [label, setLabel] = useState(style.label || style.id);
  const [classId, setClassId] = useState(style.id);

  // Selector tree UI states
  const [editingNodePath, setEditingNodePath] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [collapsedPaths, setCollapsedPaths] = useState(new Set());
  const [draggedNodePath, setDraggedNodePath] = useState(null);
  const [dropTargetInfo, setDropTargetInfo] = useState(null);

  // Property editor states
  const [pendingProp, setPendingProp] = useState('');
  const [pendingValue, setPendingValue] = useState('');

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const handleLabelChange = (e) => {
    const newLabel = e.target.value;
    const prevSlug = slugify(label);
    setLabel(newLabel);
    if (classId === prevSlug || classId.startsWith('style-')) {
      setClassId(slugify(newLabel));
    }
  };

  const findNodeByPath = (tree, path) => {
    if (path.length === 1 && path[0] === 'root') return tree;
    let current = tree;
    for (let i = 1; i < path.length; i++) {
      if (!current.children || !current.children[path[i]]) return current;
      current = current.children[path[i]];
    }
    return current;
  };

  const selectedNode = findNodeByPath(data, selectedNodePath);

  const updateNodeByPath = (tree, path, updates) => {
    const newTree = JSON.parse(JSON.stringify(tree));
    let current = newTree;
    if (path.length === 1 && path[0] === 'root') {
      Object.assign(current, updates);
    } else {
      for (let i = 1; i < path.length; i++) {
        current = current.children[path[i]];
      }
      Object.assign(current, updates);
    }
    return newTree;
  };

  const handleNodeAction = (action, ...args) => {
    switch (action) {
      case 'add': {
        const [e, path] = args;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setIsAddingNew(true);
        setEditValue(':hover');
        setEditingNodePath([...path, 'new']);
        break;
      }
      case 'rename': {
        const [e, path] = args;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        if (path.length === 1 && path[0] === 'root') return;
        const node = findNodeByPath(data, path);
        setIsAddingNew(false);
        setEditValue(node.selector);
        setEditingNodePath(path);
        setSelectedNodePath(path);
        break;
      }
      case 'finishEdit': {
        const trimmed = editValue.trim();
        if (!trimmed) {
          setEditingNodePath(null);
          setIsAddingNew(false);
          return;
        }
        if (isAddingNew) {
          const parentPath = editingNodePath.slice(0, -1);
          setData(prev => {
            const newTree = JSON.parse(JSON.stringify(prev));
            let current = newTree;
            if (parentPath[0] !== 'root' || parentPath.length > 1) {
              for (let i = 1; i < parentPath.length; i++) {
                current = current.children[parentPath[i]];
              }
            }
            current.children = current.children || [];
            const newIndex = current.children.length;
            current.children.push({ selector: trimmed, properties: {}, children: [] });
            setSelectedNodePath([...parentPath, newIndex]);
            return newTree;
          });
        } else {
          setData(prev => updateNodeByPath(prev, editingNodePath, { selector: trimmed }));
        }
        setEditingNodePath(null);
        setIsAddingNew(false);
        break;
      }
      case 'dragStart': {
        const [e, path] = args;
        setDraggedNodePath(path);
        e.dataTransfer.effectAllowed = 'move';
        break;
      }
      case 'dragOver': {
        const [e, path, position] = args;
        e.preventDefault();
        e.stopPropagation();
        if (!draggedNodePath) return;
        if (JSON.stringify(path) === JSON.stringify(draggedNodePath)) return;
        setDropTargetInfo({ path, position });
        break;
      }
      case 'drop': {
        const [e, toPath, position] = args;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        if (!draggedNodePath) return;
        
        setData(prev => {
          const newTree = JSON.parse(JSON.stringify(prev));
          let fromParent = newTree;
          for (let i = 1; i < draggedNodePath.length - 1; i++) {
            fromParent = fromParent.children[draggedNodePath[i]];
          }
          const fromIndex = draggedNodePath[draggedNodePath.length - 1];
          const [movedNode] = fromParent.children.splice(fromIndex, 1);

          if (position === 'inside') {
            let targetNode = newTree;
            for (let i = 1; i < toPath.length; i++) targetNode = targetNode.children[toPath[i]];
            targetNode.children = targetNode.children || [];
            targetNode.children.push(movedNode);
          } else {
            let toParent = newTree;
            for (let i = 1; i < toPath.length - 1; i++) toParent = toParent.children[toPath[i]];
            let toIndex = toPath[toPath.length - 1];
            if (draggedNodePath.length === toPath.length && JSON.stringify(draggedNodePath.slice(0, -1)) === JSON.stringify(toPath.slice(0, -1)) && fromIndex < toIndex) toIndex--;
            if (position === 'after') toIndex++;
            toParent.children.splice(toIndex, 0, movedNode);
          }
          return newTree;
        });
        setDraggedNodePath(null);
        setDropTargetInfo(null);
        setSelectedNodePath(['root']);
        break;
      }
      case 'dragEnd': {
        setDraggedNodePath(null);
        setDropTargetInfo(null);
        break;
      }
    }
  };

  const updateProperty = (prop, value) => {
    const newData = JSON.parse(JSON.stringify(data));
    let target = newData;
    for (let i = 1; i < selectedNodePath.length; i++) target = target.children[selectedNodePath[i]];
    if (!target.properties) target.properties = {};
    if (value) target.properties[prop] = value; else delete target.properties[prop];
    setData(newData);
  };

  const updateCustomProperty = (prop, value, oldProp = null) => {
    const newData = JSON.parse(JSON.stringify(data));
    let target = newData;
    for (let i = 1; i < selectedNodePath.length; i++) target = target.children[selectedNodePath[i]];
    if (!target.custom_properties) target.custom_properties = {};
    if (oldProp && oldProp !== prop) delete target.custom_properties[oldProp];
    if (value) target.custom_properties[prop] = value; else delete target.custom_properties[prop];
    setData(newData);
  };

  const handleMainSave = () => {
    let finalData = JSON.parse(JSON.stringify(data));
    if (pendingProp.trim() && pendingValue.trim()) {
      let target = finalData;
      for (let i = 1; i < selectedNodePath.length; i++) target = target.children[selectedNodePath[i]];
      if (!target.custom_properties) target.custom_properties = {};
      target.custom_properties[pendingProp.trim()] = pendingValue.trim();
    }
    onSave({ ...style, label, id: classId || style.id, old_id: style.id, data: finalData });
  };

  return (
    <div className="style-builder-overlay" onClick={(e) => { if (e.target === e.currentTarget) onBack(); }}>
      <div className="style-builder-sidebar" onClick={e => e.stopPropagation()}>
        <div className="style-builder-header">
          <div className="header-left">
            <button type="button" className="back-btn" onClick={onBack}><span>←</span> Back to Layout</button>
            <div className="style-info">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <input type="text" value={label} onChange={handleLabelChange} className="style-label-input" placeholder="Enter Style Label" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#64748b' }}>
                  <span>Class:</span><span style={{ fontFamily: 'monospace' }}>.uib-</span>
                  <input type="text" value={classId} onChange={e => setClassId(slugify(e.target.value))} style={{ border: 'none', background: 'transparent', color: '#64748b', fontFamily: 'monospace', outline: 'none', padding: 0, width: '150px' }} placeholder="class-name" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <button type="button" className="save-btn" onClick={handleMainSave}>Save Style</button>
          </div>
        </div>

        <div className="style-builder-body">
          <div className="style-builder-tree">
            <div className="tree-header">Selectors & Modifiers</div>
            <SelectorTree 
              data={data}
              selectedNodePath={selectedNodePath}
              setSelectedNodePath={setSelectedNodePath}
              editingNodePath={editingNodePath}
              setEditingNodePath={setEditingNodePath}
              editValue={editValue}
              setEditValue={setEditValue}
              isAddingNew={isAddingNew}
              setIsAddingNew={setIsAddingNew}
              collapsedPaths={collapsedPaths}
              setCollapsedPaths={setCollapsedPaths}
              draggedNodePath={draggedNodePath}
              setDraggedNodePath={setDraggedNodePath}
              dropTargetInfo={dropTargetInfo}
              setDropTargetInfo={setDropTargetInfo}
              onNodeAction={handleNodeAction}
            />
          </div>

          <div className="style-builder-properties">
            <div className="props-header">
              <h2>{selectedNode.selector === '&' ? `Base class (.uib-${style.id})` : selectedNode.selector}</h2>
              <div className="props-header-path">Configuring properties for the selected selector</div>
            </div>
            <div className="props-content">
              <PropertyEditor 
                selectedNode={selectedNode}
                updateProperty={updateProperty}
                updateCustomProperty={updateCustomProperty}
                pendingProp={pendingProp}
                setPendingProp={setPendingProp}
                pendingValue={pendingValue}
                setPendingValue={setPendingValue}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
