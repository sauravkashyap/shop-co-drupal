import { useState, useEffect } from 'react';
import { FieldEditor } from './FieldEditor';
import { ImageEditor } from './ImageEditor';
import { IconPicker } from './IconPicker';
import { getCustomClassesOnly, mergeClasses } from '../utils/styleUtils';
import { X, Palette, Plus, Trash2 } from 'lucide-react';
import { 
  STANDARD_PROPS, 
  PropertyEditor, 
  SelectorTree 
} from './StyleBuilderComponents';
import './StyleBuilder.css'; // Reuse same styles

function AccordionSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem(`uib_accordion_${title.replace(/\s+/g, '_')}`);
    if (saved !== null) return saved === 'true';
    return Array.isArray(defaultOpen) ? defaultOpen : defaultOpen;
  });

  useEffect(() => {
    localStorage.setItem(`uib_accordion_${title.replace(/\s+/g, '_')}`, isOpen);
  }, [isOpen, title]);
  
  return (
    <div className={`prop-group ${isOpen ? 'open' : ''}`}>
      <div 
        className="prop-group-header" 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '16px 20px', 
          background: isOpen ? '#fdfdfd' : '#fff', 
          cursor: 'pointer', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontWeight: '600', 
          fontSize: '14px', 
          color: 'var(--sb-text-main)', 
          userSelect: 'none', 
          borderBottom: isOpen ? '1px solid var(--sb-border)' : 'none'
        }}
      >
        <span className="prop-group-title">{title}</span>
        <div 
          className="prop-group-icon"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none', 
            transition: 'transform 0.2s ease', 
            color: 'var(--sb-text-muted)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="prop-group-body" style={{ padding: '20px', background: '#fdfdfd' }}>
          {children}
        </div>
      )}
    </div>
  );
}
export function PropertiesPanel({ 
  mode,
  selectedNode,
  selectedNodeId,
  selectedStyle,
  selectedComponent,
  updateNodeProperty,
  resetToDefaultProps,
  removeNode,
  updateNodeField,
  updateInstanceValue,
  updateInstanceStyles,
  onSaveStyle,
  onEditInstanceStyle,
  onDeselect,
  customStyles = []
}) {
  // Instance Style State
  const [instanceData, setInstanceData] = useState(null);
  const [selectedInstancePath, setSelectedInstancePath] = useState(['root']);
  const [editingNodePath, setEditingNodePath] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [collapsedPaths, setCollapsedPaths] = useState(new Set());
  const [draggedNodePath, setDraggedNodePath] = useState(null);
  const [dropTargetInfo, setDropTargetInfo] = useState(null);
  const [activeDevice, setActiveDevice] = useState('desktop'); // desktop, tablet, mobile
  const [pendingProp, setPendingProp] = useState('');
  const [pendingValue, setPendingValue] = useState('');

  // Global style editor state
  const [styleCode, setStyleCode] = useState('');
  const [styleLabel, setStyleLabel] = useState('');

  // Drupal blocks
  const [availableBlocks, setAvailableBlocks] = useState([]);
  useEffect(() => {
    fetch('/api/ui-builder/blocks')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAvailableBlocks(data);
        }
      })
      .catch(err => console.error('Error fetching blocks:', err));
  }, []);

  // SYNC INSTANCE STYLE STATE
  useEffect(() => {
    if (selectedNode && selectedNode.instanceStyles) {
      setInstanceData(JSON.parse(JSON.stringify(selectedNode.instanceStyles)));
    } else {
      setInstanceData({
        selector: '&',
        properties: {},
        custom_properties: {},
        children: []
      });
    }
    setSelectedInstancePath(['root']);
  }, [selectedNodeId]);

  const findInstanceNodeByPath = (tree, path) => {
    if (!tree) return null;
    if (path.length === 1 && path[0] === 'root') return tree;
    let current = tree;
    for (let i = 1; i < path.length; i++) {
      if (!current.children || !current.children[path[i]]) return current;
      current = current.children[path[i]];
    }
    return current;
  };

  const selectedInstanceNode = findInstanceNodeByPath(instanceData, selectedInstancePath);



  const getColFromClass = (prefix) => {
    const currentClasses = selectedNode.props?.class || '';
    const classesArray = currentClasses.split(/\s+/).filter(Boolean);
    const colClass = classesArray.find(c => c.startsWith(prefix));
    if (colClass) {
      return colClass.replace(prefix, '');
    }
    return '';
  };

  const handleColWidthChange = (colValue, prefix = '') => {
    const currentClasses = selectedNode.props?.class || '';
    let classesArray = currentClasses.split(/\s+/).filter(Boolean);
    
    let classPrefix = 'uib-col-';
    if (prefix === 'tablet:') classPrefix = 'uib-col-md-';
    if (prefix === 'mobile:') classPrefix = 'uib-col-sm-';
    
    classesArray = classesArray.filter(c => !c.startsWith(classPrefix));
    
    if (colValue) {
      classesArray.push(`${classPrefix}${colValue}`);
    }
    
    updateNodeField(selectedNode.id, { 
      props: { 
        ...selectedNode.props, 
        class: classesArray.join(' ') 
      } 
    });
  };

  const handleInstanceNodeAction = (action, ...args) => {
    console.log('handleInstanceNodeAction', action, ...args);
    if (!instanceData) return;
    
    const updateAndPersist = (newData) => {
      setInstanceData(newData);
      updateInstanceStyles(selectedNodeId, newData);
    };

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
        const node = findInstanceNodeByPath(instanceData, path);
        setIsAddingNew(false);
        setEditValue(node.selector);
        setEditingNodePath(path);
        setSelectedInstancePath(path);
        break;
      }
      case 'finishEdit': {
        const trimmed = editValue.trim();
        if (!trimmed) {
          setEditingNodePath(null);
          setIsAddingNew(false);
          return;
        }
        const newData = JSON.parse(JSON.stringify(instanceData));
        if (isAddingNew) {
          const parentPath = editingNodePath.slice(0, -1);
          let current = newData;
          if (parentPath[0] !== 'root' || parentPath.length > 1) {
            for (let i = 1; i < parentPath.length; i++) {
              current = current.children[parentPath[i]];
            }
          }
          current.children = current.children || [];
          const newIndex = current.children.length;
          current.children.push({ selector: trimmed, properties: {}, children: [] });
          setSelectedInstancePath([...parentPath, newIndex]);
        } else {
          let current = newData;
          if (editingNodePath.length > 1) {
            for (let i = 1; i < editingNodePath.length; i++) {
              current = current.children[editingNodePath[i]];
            }
          }
          current.selector = trimmed;
        }
        updateAndPersist(newData);
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
        
        const newData = JSON.parse(JSON.stringify(instanceData));
        let fromParent = newData;
        for (let i = 1; i < draggedNodePath.length - 1; i++) {
          fromParent = fromParent.children[draggedNodePath[i]];
        }
        const fromIndex = draggedNodePath[draggedNodePath.length - 1];
        const [movedNode] = fromParent.children.splice(fromIndex, 1);

        if (position === 'inside') {
          let targetNode = newData;
          for (let i = 1; i < toPath.length; i++) targetNode = targetNode.children[toPath[i]];
          targetNode.children = targetNode.children || [];
          targetNode.children.push(movedNode);
        } else {
          let toParent = newData;
          for (let i = 1; i < toPath.length - 1; i++) toParent = toParent.children[toPath[i]];
          let toIndex = toPath[toPath.length - 1];
          if (draggedNodePath.length === toPath.length && JSON.stringify(draggedNodePath.slice(0, -1)) === JSON.stringify(toPath.slice(0, -1)) && fromIndex < toIndex) toIndex--;
          if (position === 'after') toIndex++;
          toParent.children.splice(toIndex, 0, movedNode);
        }
        
        updateAndPersist(newData);
        setDraggedNodePath(null);
        setDropTargetInfo(null);
        setSelectedInstancePath(['root']);
        break;
      }
      case 'dragEnd': {
        setDraggedNodePath(null);
        setDropTargetInfo(null);
        break;
      }
    }
  };

  const handlePasteCss = async () => {
    try {
      let text = '';
      if (navigator.clipboard && navigator.clipboard.readText) {
        text = await navigator.clipboard.readText();
      } else {
        text = prompt('Clipboard API not available in this context (requires HTTPS or localhost). Please paste your CSS here:');
      }
      
      if (!text) return;
      
      // Remove comments
      let cleanedText = text.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Extract content inside { } if present
      const match = cleanedText.match(/\{([\s\S]*)\}/);
      if (match) {
        cleanedText = match[1];
      }
      
      const properties = {};
      const rules = cleanedText.split(';');
      rules.forEach(rule => {
        const parts = rule.split(':');
        if (parts.length >= 2) {
          const prop = parts[0].trim().replace(/[\r\n]/g, '');
          const value = parts.slice(1).join(':').trim().replace(/[\r\n]/g, ' ');
          if (prop && value) {
            properties[prop] = value;
          }
        }
      });
      
      console.log('Parsed properties:', properties);
      
      if (Object.keys(properties).length === 0) {
        alert('No valid CSS found! Please ensure it is in "property: value;" format.');
        return;
      }
      
      const newData = JSON.parse(JSON.stringify(instanceData));
      let target = newData;
      for (let i = 1; i < selectedInstancePath.length; i++) {
        target = target.children[selectedInstancePath[i]];
      }
      
      if (!target.custom_properties) target.custom_properties = {};
      Object.assign(target.custom_properties, properties);
      
      setInstanceData(newData);
      updateInstanceStyles(selectedNodeId, newData);
      alert(`Pasted ${Object.keys(properties).length} properties!`);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
      alert('Failed to read clipboard. Please allow clipboard access.');
    }
  };

  const updateInstanceProperty = (prop, value) => {
    const newData = JSON.parse(JSON.stringify(instanceData));
    let target = newData;
    for (let i = 1; i < selectedInstancePath.length; i++) {
      target = target.children[selectedInstancePath[i]];
    }
    if (!target.properties) target.properties = {};
    if (value) target.properties[prop] = value; else delete target.properties[prop];
    setInstanceData(newData);
    updateInstanceStyles(selectedNodeId, newData);
  };

  const updateInstanceCustomProperty = (prop, value, oldProp = null) => {
    const newData = JSON.parse(JSON.stringify(instanceData));
    let target = newData;
    for (let i = 1; i < selectedInstancePath.length; i++) {
      target = target.children[selectedInstancePath[i]];
    }
    if (!target.custom_properties) target.custom_properties = {};
    if (oldProp && oldProp !== prop) delete target.custom_properties[oldProp];
    if (value) target.custom_properties[prop] = value; else delete target.custom_properties[prop];
    setInstanceData(newData);
    updateInstanceStyles(selectedNodeId, newData);
  };
  // SYNC STYLE EDITOR STATE
  useEffect(() => {
    if (selectedStyle) {
      setStyleCode(selectedStyle.css_content || '');
      setStyleLabel(selectedStyle.label || '');
    }
  }, [selectedStyle]);

  // Sync style editor state
  useEffect(() => {
    if (selectedStyle) {
      setStyleCode(selectedStyle.css_content || '');
      setStyleLabel(selectedStyle.label || '');
    }
  }, [selectedStyle]);

  // Don't render at all if nothing is selected — panel stays hidden
  if (!selectedNode && !selectedStyle) {
    return null;
  }

  // GLOBAL STYLE EDITOR
  if (selectedStyle) {
    return (
      <>
        <div className="properties-backdrop" onClick={onDeselect} />
        <aside className="ui-builder-properties">
          <div className="properties-header">
            <h3>Style Editor</h3>
            <button type="button" className="properties-close-btn" onClick={onDeselect} title="Close"><X size={16} /></button>
          </div>
          <div className="properties-content animate-fade">
            <div className="form-group">
              <label>Style Label</label>
              <input 
                type="text" 
                className="form-control" 
                value={styleLabel} 
                onChange={e => setStyleLabel(e.target.value)} 
                placeholder="e.g. Hero Title"
              />
            </div>
            <div className="form-group">
              <label>CSS Class</label>
              <input 
                type="text" 
                className="form-control" 
                value={`.${selectedStyle.id}`} 
                disabled 
                style={{ opacity: 0.6 }}
              />
            </div>
            <div className="form-group">
              <label>CSS Rules</label>
              <textarea 
                className="form-control css-editor" 
                value={styleCode} 
                onChange={e => setStyleCode(e.target.value)}
                placeholder={`.${selectedStyle.id} {\n  color: #2563eb;\n  font-size: 24px;\n}`}
                spellCheck="false"
              />
            </div>
            <button 
              type="button" 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '12px' }} 
              onClick={() => onSaveStyle({ ...selectedStyle, label: styleLabel, css_content: styleCode })}
            >
              Save Style
            </button>
          </div>
        </aside>
      </>
    );
  }

  // NODE EDITOR
  const isPrimitive = !selectedNode.component_id && !!selectedNode.tag;
  const currentClasses = selectedNode.props?.class || '';
  const classesArray = currentClasses.split(/\s+/).filter(Boolean);
  const isColumn = classesArray.includes('column') || selectedNode.label === 'Column';
  const label = selectedNode.label || '';
  const isLayoutElement = isPrimitive && ['div', 'section', 'article', 'main', 'aside', 'nav'].includes(selectedNode.tag) && !selectedNode.props?.isBgImage;
  const isAccordionIconWrapper = selectedNode?.props?.class?.includes('uib-accordion-icon');

  return (
    <div onKeyDown={(e) => {
      if (e.key === 'Enter' && e.target.tagName.toLowerCase() === 'input') {
        e.preventDefault();
        e.stopPropagation();
        if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
          e.nativeEvent.stopImmediatePropagation();
        }
      }
    }}>
      <div className="properties-backdrop" onClick={onDeselect} />
      <aside className="ui-builder-properties" onClick={e => e.stopPropagation()}>
        <div className="properties-header">
          <h3>{selectedNode.label || selectedNode.tag}</h3>
          <button type="button" className="properties-close-btn" onClick={onDeselect} title="Close"><X size={16} /></button>
        </div>

        <div className="properties-content">
          <div className="animate-fade property-groups">
            {/* Site Studio Instance Styling - Opens full-screen Style Builder */}
            {selectedNode && (
              <AccordionSection title="INSTANCE STYLING (SITE STUDIO STYLE)" defaultOpen={true}>
                <div style={{ marginTop: '16px', padding: '4px' }} className="instance-style-editor animate-fade">
                  <p className="help-text" style={{ marginBottom: '16px', fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
                    Apply scoped styles, selectors, pseudo-elements, and responsive queries directly to this {selectedNode.label || selectedNode.tag}.
                  </p>
                  
                  <button
                    type="button"
                    className="save-btn"
                    style={{ 
                      width: '100%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', 
                      gap: '8px', 
                      padding: '12px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      background: 'var(--sb-primary, #2563eb)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
                      transition: 'all 0.2s ease-in-out'
                    }}
                    onClick={() => {
                      if (onEditInstanceStyle) {
                        onEditInstanceStyle({
                          id: selectedNode.id,
                          label: selectedNode.label || selectedNode.tag,
                          data: selectedNode.instanceStyles || {
                            selector: '&',
                            properties: {},
                            custom_properties: {},
                            children: []
                          },
                          isInstance: true
                        });
                      }
                    }}
                  >
                    <Palette size={16} /> Edit CSS in Style Builder
                  </button>
                </div>
              </AccordionSection>
            )}

            {/* 1. Identity */}
            <AccordionSection title="General Settings" defaultOpen={true}>
              <div className="form-group" style={{ marginTop: '16px' }}>
                <label>Label</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={selectedNode.label || ''} 
                  onChange={e => updateNodeField(selectedNode.id, { label: e.target.value })}
                  placeholder="Internal label..."
                />
              </div>

              {isColumn && (
                <div style={{ marginTop: '16px', borderTop: '1px solid #333', paddingTop: '16px' }}>
                  <label style={{ marginBottom: '8px', display: 'block' }}>Grid Columns</label>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                    <div>
                      <label style={{ fontSize: '12px', color: '#aaa' }}>Desktop</label>
                      <select 
                        className="form-control"
                        value={getColFromClass('uib-col-') || '12'}
                        onChange={(e) => handleColWidthChange(e.target.value, '')}
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '12px', color: '#aaa' }}>Tablet</label>
                      <select 
                        className="form-control"
                        value={getColFromClass('uib-col-md-') || ''}
                        onChange={(e) => handleColWidthChange(e.target.value, 'tablet:')}
                      >
                        <option value="">Auto</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '12px', color: '#aaa' }}>Mobile</label>
                      <select 
                        className="form-control"
                        value={getColFromClass('uib-col-sm-') || ''}
                        onChange={(e) => handleColWidthChange(e.target.value, 'mobile:')}
                      >
                        <option value="">Auto</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </AccordionSection>

            {/* 2. Content & Data */}
            {!isLayoutElement && !isAccordionIconWrapper && (
              <AccordionSection title="Content & Data" defaultOpen={['img', 'svg', 'video', 'text', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(selectedNode.tag)}>
                <div style={{ marginTop: '16px' }}>
                  {(selectedNode.tag === 'img' || selectedNode.props?.isBgImage) && (
                    <div className="form-group" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="checkbox" 
                        id="bg-image-toggle"
                        checked={selectedNode.props?.isBgImage || false}
                        onChange={(e) => {
                          const isBg = e.target.checked;
                          const updates = {
                            props: {
                              ...selectedNode.props,
                              isBgImage: isBg
                            }
                          };
                          if (isBg) {
                            updates.tag = 'div';
                            updates.props.style = {
                              ...selectedNode.props?.style,
                              backgroundImage: `url(${selectedNode.content})`
                            };
                            updates.label = 'Bg Image Container';
                            
                            // Add background_image class
                            const existingClasses = selectedNode.props?.class || '';
                            updates.props.class = existingClasses ? `${existingClasses} background_image` : 'background_image';
                          } else {
                            updates.tag = 'img';
                            const newStyle = { ...selectedNode.props?.style };
                            delete newStyle.backgroundImage;
                            delete newStyle.backgroundSize;
                            delete newStyle.backgroundPosition;
                            delete newStyle.minHeight;
                            updates.props.style = newStyle;
                            updates.label = 'Image';
                            
                            // Remove background_image class
                            const existingClasses = selectedNode.props?.class || '';
                            updates.props.class = existingClasses.replace('background_image', '').trim();
                          }
                          updateNodeField(selectedNode.id, updates);
                        }}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                      />
                      <label htmlFor="bg-image-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>Use as Background Image</label>
                    </div>
                  )}

                  {isPrimitive ? (
                    <>
                      {selectedNode.tag === 'drupal-block' ? (
                        <div className="form-group">
                          <label>Drupal Block</label>
                          <select 
                            value={selectedNode.props?.['block-id'] || ''}
                            onChange={(e) => updateNodeProperty(selectedNode.id, 'block-id', e.target.value)}
                            style={{ 
                              width: '100%', 
                              padding: '8px', 
                              borderRadius: '4px', 
                              border: '1px solid var(--sb-border)', 
                              fontSize: '13px', 
                              background: '#fff' 
                            }}
                          >
                            <option value="">-- Select a Block --</option>
                            {availableBlocks.map(block => (
                              <option key={block.id} value={block.id}>{block.label}</option>
                            ))}
                          </select>
                        </div>
                      ) : (
                        <div className="form-group">
                          <label>
                            {selectedNode.tag === 'img' ? 'Image Source' : selectedNode.tag === 'svg' ? 'SVG Media' : selectedNode.tag === 'video' ? 'Video Source' : 'Text Content'}
                          </label>
                          {(selectedNode.tag === 'img' || selectedNode.tag === 'svg' || selectedNode.tag === 'video') ? (
                            <>
                              <ImageEditor
                                mode={selectedNode.fieldMode || 'static'}
                                value={selectedNode.content || ''}
                                accept={selectedNode.tag === 'svg' ? '.svg,image/svg+xml' : selectedNode.tag === 'video' ? 'video/*' : 'image/*,.svg'}
                                label={selectedNode.tag === 'svg' ? 'SVG' : selectedNode.tag === 'video' ? 'Video' : 'Image'}
                                onUpdate={(val, m) => updateNodeField(selectedNode.id, { content: val, fieldMode: m })}
                              />
                            {selectedNode.tag === 'video' && (
                              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['controls', 'autoplay', 'loop', 'muted', 'playsinline'].map(prop => {
                                  const descriptions = {
                                    controls: "Show play/pause, timeline, and volume controls.",
                                    autoplay: "Start playing automatically (usually requires muted).",
                                    loop: "Restart video automatically when it finishes.",
                                    muted: "Play the video without sound.",
                                    playsinline: "Play within the layout on mobile (prevent fullscreen)."
                                  };
                                  return (
                                    <div className="form-group" key={prop} style={{ marginBottom: 0 }}>
                                      <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input 
                                          type="checkbox" 
                                          id={`video-${prop}-toggle`}
                                          checked={selectedNode.props?.[prop] === true || selectedNode.props?.[prop] === '1' || selectedNode.props?.[prop] === 'true'}
                                          onChange={(e) => {
                                            updateNodeProperty(selectedNode.id, prop, e.target.checked ? true : '');
                                          }}
                                          style={{ marginRight: '8px', cursor: 'pointer' }}
                                        />
                                        <label htmlFor={`video-${prop}-toggle`} style={{ marginBottom: 0, cursor: 'pointer', textTransform: 'capitalize', fontWeight: 600 }}>{prop}</label>
                                      </div>
                                      <div style={{ fontSize: '12px', color: '#666', marginLeft: '21px', marginTop: '2px' }}>
                                        {descriptions[prop]}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            </>
                          ) : (
                            <FieldEditor
                              mode={selectedNode.fieldMode || 'static'}
                              value={selectedNode.content || ''}
                              onUpdate={(val, m) => updateNodeField(selectedNode.id, { content: val, fieldMode: m })}
                            />
                          )}
                        </div>
                      )}

                      {selectedNode.tag === 'a' && (
                        <>
                          <div className="form-group" style={{ marginTop: '16px' }}>
                            <label>Link URL</label>
                            <FieldEditor
                              mode={selectedNode.props?.hrefMode || 'static'}
                              value={selectedNode.props?.href || ''}
                              onUpdate={(val, m) => {
                                updateNodeProperty(selectedNode.id, 'href', val);
                                updateNodeProperty(selectedNode.id, 'hrefMode', m);
                              }}
                            />
                          </div>
                          <div className="form-group" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                            <input 
                              type="checkbox" 
                              id="link-target-toggle"
                              checked={selectedNode.props?.target === '_blank'}
                              onChange={(e) => {
                                updateNodeProperty(selectedNode.id, 'target', e.target.checked ? '_blank' : '');
                              }}
                              style={{ marginRight: '8px', cursor: 'pointer' }}
                            />
                            <label htmlFor="link-target-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>Open in new tab</label>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="component-fields">
                      {(() => {
                        const schema = selectedComponent?.form_schema || {};
                        const entries = typeof schema === 'object' && !Array.isArray(schema) ? Object.entries(schema) : [];
                        if (entries.length === 0) return <p className="no-items-hint">No editable fields.</p>;
                        return entries.map(([key, fieldSchema]) => {
                          const data = selectedNode.values?.[key] || { mode: 'static', value: '' };
                          const entry = typeof data === 'object' ? data : { mode: 'static', value: data };
                          
                          // Clean up legacy titles that might have "IMG: {{ FIELD_XYZ }}" baked into them
                          let displayTitle = fieldSchema.title || key;
                          if (typeof displayTitle === 'string') {
                            // Try to strip anything from the first '{' to the last '}'
                            let firstBrace = displayTitle.indexOf('{');
                            let lastBrace = displayTitle.lastIndexOf('}');
                            if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
                              displayTitle = displayTitle.substring(0, firstBrace) + displayTitle.substring(lastBrace + 1);
                            }
                            
                            displayTitle = displayTitle.replace(/\{\s*\{[\s\S]*?\}\s*\}/g, '').replace(/:\s*$/, '').trim();
                            if (!displayTitle) displayTitle = `${key} Field`;
                          }

                          return (
                            <div className="form-group" key={key}>
                              <label>{displayTitle}</label>
                              {fieldSchema.type === 'image' ? (
                                <>
                                  <ImageEditor
                                    mode={entry.mode}
                                    value={entry.value}
                                    accept={fieldSchema.originalTag === 'svg' ? '.svg,image/svg+xml' : 'image/*,.svg'}
                                    label={fieldSchema.originalTag === 'svg' ? 'SVG' : 'Image'}
                                    onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                                  />
                                  <div className="form-group" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                                    <input 
                                      type="checkbox" 
                                      id={`bg-toggle-${key}`}
                                      checked={entry.isBgImage || false}
                                      onChange={(e) => {
                                        updateInstanceValue(selectedNode.id, key, entry.value, entry.mode, { isBgImage: e.target.checked });
                                      }}
                                      style={{ marginRight: '8px', cursor: 'pointer' }}
                                    />
                                    <label htmlFor={`bg-toggle-${key}`} style={{ marginBottom: 0, cursor: 'pointer' }}>Use as Background Image</label>
                                  </div>
                                </>
                              ) : (
                                <FieldEditor
                                  mode={entry.mode}
                                  value={entry.value}
                                  onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                                />
                              )}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  )}
                </div>
              </AccordionSection>
            )}

            {/* Slider Settings (Only for .swiper elements) */}
            {classesArray.includes('swiper') && (
              <AccordionSection title="Slider Settings" defaultOpen={true}>
                {['nav', 'pagination', 'loop', 'autoplay'].map(setting => {
                  const propName = `data-swiper-${setting}`;
                  const isEnabled = selectedNode.props?.[propName] === 'true';
                  
                  return (
                    <div key={setting} className="form-group" style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="checkbox" 
                        id={`swiper-toggle-${setting}`}
                        checked={isEnabled}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          let updatedProps = { ...selectedNode.props, [propName]: checked ? 'true' : 'false' };
                          
                          // Handle DOM changes for nav/pagination
                          let updatedChildren = [...(selectedNode.children || [])];
                          if (setting === 'nav') {
                            if (checked) {
                              const getArrowNode = (dir) => {
                                const type = selectedNode.props?.[`data-nav-${dir}-type`] || 'default';
                                const val = selectedNode.props?.[`data-nav-${dir}-val`] || '';
                                let btnClasses = `swiper-button-${dir}`;
                                if (type !== 'default') btnClasses += ' uib-custom-arrow';
                                
                                let children = [];
                                if (type === 'image' && val) children = [{ type: 'img', tag: 'img', label: 'Arrow Image', id: Math.random().toString(36).substr(2, 9), props: { src: val, alt: `${dir} arrow` } }];
                                else if (type === 'font' && val) children = [{ type: 'i', tag: 'i', label: 'Arrow Icon', id: Math.random().toString(36).substr(2, 9), props: { class: val } }];
                                
                                return { type: 'div', tag: 'div', label: `${dir === 'next' ? 'Next' : 'Prev'} Arrow`, id: Math.random().toString(36).substr(2, 9), props: { class: btnClasses }, children };
                              };
                              
                              if (!updatedChildren.find(c => c.props?.class?.includes('swiper-button-next'))) {
                                updatedChildren.push(getArrowNode('next'));
                              }
                              if (!updatedChildren.find(c => c.props?.class?.includes('swiper-button-prev'))) {
                                updatedChildren.push(getArrowNode('prev'));
                              }
                            } else {
                              updatedChildren = updatedChildren.filter(c => !c.props?.class?.includes('swiper-button-next') && !c.props?.class?.includes('swiper-button-prev'));
                            }
                          }
                          if (setting === 'pagination') {
                            if (checked) {
                              if (!updatedChildren.find(c => c.props?.class?.includes('swiper-pagination'))) {
                                updatedChildren.push({ type: 'div', tag: 'div', label: 'Pagination', id: Math.random().toString(36).substr(2, 9), props: { class: 'swiper-pagination' } });
                              }
                            } else {
                              updatedChildren = updatedChildren.filter(c => !c.props?.class?.includes('swiper-pagination'));
                            }
                          }
                          
                          updateNodeField(selectedNode.id, { props: updatedProps, children: updatedChildren });
                        }}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                      />
                      <label htmlFor={`swiper-toggle-${setting}`} style={{ marginBottom: 0, cursor: 'pointer', textTransform: 'capitalize' }}>
                        Enable {setting}
                      </label>
                    </div>
                  );
                })}

                {selectedNode.props?.['data-swiper-nav'] === 'true' && (
                  <div style={{ marginTop: '20px', borderTop: '1px solid var(--sb-border)', paddingTop: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600' }}>Custom Navigation Arrows</label>
                    
                    {['next', 'prev'].map(dir => {
                      const typeProp = `data-nav-${dir}-type`;
                      const valProp = `data-nav-${dir}-val`;
                      const currentType = selectedNode.props?.[typeProp] || 'default';
                      const currentVal = selectedNode.props?.[valProp] || '';

                      const updateArrowContent = (type, val) => {
                        let updatedProps = { ...selectedNode.props, [typeProp]: type, [valProp]: val };
                        let updatedChildren = [...(selectedNode.children || [])];
                        const btnClass = `swiper-button-${dir}`;
                        
                        const btnIndex = updatedChildren.findIndex(c => c.props?.class?.includes(btnClass));
                        if (btnIndex !== -1) {
                          const btn = { ...updatedChildren[btnIndex] };
                          // Toggle custom class
                          let btnClasses = btn.props?.class?.split(' ') || [];
                          btnClasses = btnClasses.filter(c => c !== 'uib-custom-arrow');
                          if (type !== 'default') btnClasses.push('uib-custom-arrow');
                          btn.props = { ...btn.props, class: btnClasses.join(' ') };
                          
                          // Clear children and add custom if needed
                          if (type === 'image' && val) {
                            btn.children = [{ type: 'img', tag: 'img', label: 'Arrow Image', id: Math.random().toString(36).substr(2, 9), props: { src: val, alt: `${dir} arrow` } }];
                          } else if (type === 'font' && val) {
                            btn.children = [{ type: 'i', tag: 'i', label: 'Arrow Icon', id: Math.random().toString(36).substr(2, 9), props: { class: val } }];
                          } else {
                            btn.children = [];
                          }
                          
                          updatedChildren[btnIndex] = btn;
                        }
                        
                        updateNodeField(selectedNode.id, { props: updatedProps, children: updatedChildren });
                      };

                      return (
                        <div key={dir} style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: dir === 'next' ? '1px dashed var(--sb-border)' : 'none' }}>
                          <label className="uib-label" style={{ textTransform: 'capitalize', fontWeight: '600' }}>{dir} Arrow Style</label>
                          <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', background: 'var(--sb-bg-dark)', padding: '4px', borderRadius: '6px' }}>
                            {[
                              { id: 'default', label: 'Default' },
                              { id: 'image', label: 'Image' },
                              { id: 'font', label: 'Icon' }
                            ].map(opt => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => updateArrowContent(opt.id, '')}
                                style={{
                                  flex: 1,
                                  padding: '6px',
                                  fontSize: '12px',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  background: currentType === opt.id ? 'var(--sb-bg-main)' : 'transparent',
                                  color: currentType === opt.id ? 'var(--sb-text-main)' : 'var(--sb-text-muted)',
                                  boxShadow: currentType === opt.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                  transition: 'all 0.2s'
                                }}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                          
                          {currentType === 'image' && (
                            <ImageEditor 
                              mode="static"
                              value={currentVal}
                              onUpdate={(val) => updateArrowContent('image', val)}
                              label="Arrow Image"
                            />
                          )}
                          
                          {currentType === 'font' && (
                            <IconPicker 
                              value={currentVal}
                              onSelect={(val) => updateArrowContent('font', val)}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="form-group" style={{ marginTop: '20px', borderTop: '1px solid var(--sb-border)', paddingTop: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600' }}>Manage Slides</label>
                  <button 
                    type="button" 
                    className="sb-btn sb-btn-primary" 
                    style={{ width: '100%', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    onClick={() => {
                      const trackIndex = (selectedNode.children || []).findIndex(c => c.props?.class?.includes('swiper-wrapper'));
                      if (trackIndex !== -1) {
                        const updatedChildren = [...selectedNode.children];
                        const track = { ...updatedChildren[trackIndex] };
                        const newSlideIndex = (track.children?.length || 0) + 1;
                        
                        const newSlide = {
                          type: 'div',
                          tag: 'div',
                          label: `Slide ${newSlideIndex}`,
                          id: Math.random().toString(36).substr(2, 9),
                          props: { class: 'swiper-slide uib-slide' },
                          children: [{
                            type: 'div',
                            tag: 'div',
                            label: 'Slide Content',
                            id: Math.random().toString(36).substr(2, 9),
                            props: { class: 'uib-container' },
                            content: `Slide ${newSlideIndex}`,
                            isField: true
                          }]
                        };
                        
                        track.children = [...(track.children || []), newSlide];
                        updatedChildren[trackIndex] = track;
                        
                        updateNodeField(selectedNode.id, { children: updatedChildren });
                      }
                    }}
                  >
                    <Plus size={16} /> Add New Slide
                  </button>
                  
                  {(() => {
                    const track = (selectedNode.children || []).find(c => c.props?.class?.includes('swiper-wrapper'));
                    if (!track || !track.children || track.children.length === 0) return <p className="help-text">No slides found.</p>;
                    
                    return track.children.map((slide, idx) => (
                      <div key={slide.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--sb-bg-darker)', padding: '8px', marginBottom: '8px', borderRadius: '4px', border: '1px solid var(--sb-border)' }}>
                        <span style={{ fontSize: '13px', fontWeight: '500' }}>{slide.label || `Slide ${idx + 1}`}</span>
                        <button 
                          type="button" 
                          style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                          title="Delete Slide"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this slide?')) {
                              const trackIndex = selectedNode.children.findIndex(c => c.props?.class?.includes('swiper-wrapper'));
                              const updatedChildren = [...selectedNode.children];
                              const updatedTrack = { ...updatedChildren[trackIndex] };
                              updatedTrack.children = updatedTrack.children.filter(c => c.id !== slide.id);
                              updatedChildren[trackIndex] = updatedTrack;
                              updateNodeField(selectedNode.id, { children: updatedChildren });
                            }
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ));
                  })()}
                </div>
              </AccordionSection>
            )}

            {/* Accordion Settings */}
            {classesArray.includes('uib-accordion') && (
              <AccordionSection title="Accordion Settings" defaultOpen={true}>


                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Animation Speed</label>
                  <select 
                    className="sb-select" 
                    value={selectedNode.props?.['data-accordion-speed'] || '300'}
                    onChange={(e) => updateNodeProperty(selectedNode.id, 'data-accordion-speed', e.target.value)}
                    style={{ width: '100%', padding: '6px' }}
                  >
                    <option value="0">Instant (0ms)</option>
                    <option value="150">Fast (150ms)</option>
                    <option value="300">Normal (300ms)</option>
                    <option value="500">Slow (500ms)</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginTop: '20px', borderTop: '1px solid var(--sb-border)', paddingTop: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600' }}>Manage Items</label>
                  <button 
                    type="button" 
                    className="sb-btn sb-btn-primary" 
                    style={{ width: '100%', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    onClick={() => {
                      const updatedChildren = [...(selectedNode.children || [])];
                      const newItemIndex = updatedChildren.length + 1;
                      
                      const newItem = {
                        type: 'div',
                        label: 'Accordion Item',
                        id: Math.random().toString(36).substr(2, 9),
                        props: { class: 'uib-accordion-item', 'data-state': 'closed' },
                        children: [
                          { 
                            type: 'div', 
                            label: 'Accordion Header', 
                            id: Math.random().toString(36).substr(2, 9),
                            props: { class: 'uib-accordion-header' },
                            children: [
                              { type: 'span', label: 'Header Text', id: Math.random().toString(36).substr(2, 9), content: `Accordion Item ${newItemIndex}`, isField: true, props: { class: 'uib-accordion-title' } },
                              { type: 'span', label: 'Accordion Icon', id: Math.random().toString(36).substr(2, 9), props: { class: 'uib-accordion-icon uib-accordion-icon-open' }, children: [{ type: 'span', tag: 'span', id: Math.random().toString(36).substr(2, 9), label: 'Icon', isUnselectable: true, props: { class: 'fa-solid fa-plus' } }] },
                              { type: 'span', label: 'Accordion Icon', id: Math.random().toString(36).substr(2, 9), props: { class: 'uib-accordion-icon uib-accordion-icon-close', style: 'display:none;' }, children: [{ type: 'span', tag: 'span', id: Math.random().toString(36).substr(2, 9), label: 'Icon', isUnselectable: true, props: { class: 'fa-solid fa-minus' } }] }
                            ]
                          },
                          { 
                            type: 'div', 
                            label: 'Accordion Content', 
                            id: Math.random().toString(36).substr(2, 9),
                            props: { class: 'uib-accordion-content', style: 'display:none;' }, 
                            children: [
                              { type: 'p', label: 'Paragraph', id: Math.random().toString(36).substr(2, 9), content: 'Accordion content goes here.', isField: true, props: { class: 'uib-p' } }
                            ] 
                          }
                        ]
                      };
                      
                      updatedChildren.push(newItem);
                      updateNodeField(selectedNode.id, { children: updatedChildren });
                    }}
                  >
                    <Plus size={16} /> Add New Item
                  </button>
                  
                  {(() => {
                    const items = selectedNode.children || [];
                    if (items.length === 0) return <p className="help-text">No items found.</p>;
                    
                    return items.map((item, idx) => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--sb-bg-darker)', padding: '8px', marginBottom: '8px', borderRadius: '4px', border: '1px solid var(--sb-border)' }}>
                        <span style={{ fontSize: '13px', fontWeight: '500' }}>{item.label || `Item ${idx + 1}`}</span>
                        <button 
                          type="button" 
                          style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                          title="Delete Item"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this item?')) {
                              const updatedChildren = selectedNode.children.filter(c => c.id !== item.id);
                              updateNodeField(selectedNode.id, { children: updatedChildren });
                            }
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ));
                  })()}
                </div>
              </AccordionSection>
            )}

            {/* Accordion Item Settings */}
            {classesArray.includes('uib-accordion-item') && (
              <AccordionSection title="Accordion Item Settings" defaultOpen={true}>
                <div className="form-group" style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    id="accordion-item-state-toggle"
                    checked={selectedNode.props?.['data-state'] === 'open'}
                    onChange={(e) => {
                      const isOpen = e.target.checked;
                      updateNodeProperty(selectedNode.id, 'data-state', isOpen ? 'open' : 'closed');
                      
                      // Also update the child 'uib-accordion-content' style so it appears open/closed in the editor
                      let updatedChildren = [...(selectedNode.children || [])];
                      
                      // Find header to toggle icons
                      const headerIdx = updatedChildren.findIndex(c => c.props?.class?.includes('uib-accordion-header'));
                      if (headerIdx !== -1) {
                        let header = { ...updatedChildren[headerIdx] };
                        let headerChildren = [...(header.children || [])];
                        
                        const openIconIdx = headerChildren.findIndex(c => c.props?.class?.includes('uib-accordion-icon-open'));
                        if (openIconIdx !== -1) {
                           let openIcon = { ...headerChildren[openIconIdx] };
                           openIcon.props = { ...openIcon.props, style: isOpen ? 'display:none;' : '' };
                           headerChildren[openIconIdx] = openIcon;
                        }
                        const closeIconIdx = headerChildren.findIndex(c => c.props?.class?.includes('uib-accordion-icon-close'));
                        if (closeIconIdx !== -1) {
                           let closeIcon = { ...headerChildren[closeIconIdx] };
                           closeIcon.props = { ...closeIcon.props, style: isOpen ? '' : 'display:none;' };
                           headerChildren[closeIconIdx] = closeIcon;
                        }
                        
                        header.children = headerChildren;
                        updatedChildren[headerIdx] = header;
                      }

                      // Find content to toggle visibility
                      const contentIdx = updatedChildren.findIndex(c => c.props?.class?.includes('uib-accordion-content'));
                      if (contentIdx !== -1) {
                        let content = { ...updatedChildren[contentIdx] };
                        content.props = { ...content.props, style: isOpen ? '' : 'display:none;' };
                        updatedChildren[contentIdx] = content;
                      }
                      
                      updateNodeField(selectedNode.id, { children: updatedChildren });
                    }}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  <label htmlFor="accordion-item-state-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>
                    Open by default
                  </label>
                </div>
                
                <div style={{ marginTop: '20px', borderTop: '1px solid var(--sb-border)', paddingTop: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600' }}>Custom Icons</label>
                  
                  {['open', 'close'].map(state => {
                    // Find the current icon
                    let currentIconClass = '';
                    const header = (selectedNode.children || []).find(c => c.props?.class?.includes('uib-accordion-header'));
                    if (header) {
                      const iconContainer = (header.children || []).find(c => c.props?.class?.includes(`uib-accordion-icon-${state}`));
                      if (iconContainer && iconContainer.children && iconContainer.children[0]) {
                        currentIconClass = iconContainer.children[0].props?.class || '';
                      }
                    }

                    return (
                      <div key={state} style={{ marginBottom: '16px' }}>
                        <label className="uib-label" style={{ textTransform: 'capitalize', fontWeight: '600' }}>Icon for {state === 'open' ? 'Collapsed State (+)' : 'Expanded State (-)'}</label>
                        <IconPicker 
                          value={currentIconClass}
                          onSelect={(val) => {
                            let updatedChildren = [...(selectedNode.children || [])];
                            const headerIdx = updatedChildren.findIndex(c => c.props?.class?.includes('uib-accordion-header'));
                            if (headerIdx !== -1) {
                              let headerNode = { ...updatedChildren[headerIdx] };
                              let headerChildren = [...(headerNode.children || [])];
                              const iconContainerIdx = headerChildren.findIndex(c => c.props?.class?.includes(`uib-accordion-icon-${state}`));
                              
                              if (iconContainerIdx !== -1) {
                                let iconContainer = { ...headerChildren[iconContainerIdx] };
                                let iconChildren = [...(iconContainer.children || [])];
                                if (iconChildren.length > 0) {
                                  let iconNode = { ...iconChildren[0] };
                                  iconNode.props = { ...iconNode.props, class: val };
                                  iconChildren[0] = iconNode;
                                } else {
                                  iconChildren = [{ type: 'span', tag: 'span', label: 'Icon', isUnselectable: true, props: { class: val } }];
                                }
                                iconContainer.children = iconChildren;
                                headerChildren[iconContainerIdx] = iconContainer;
                              }
                              
                              headerNode.children = headerChildren;
                              updatedChildren[headerIdx] = headerNode;
                              updateNodeField(selectedNode.id, { children: updatedChildren });
                            }
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </AccordionSection>
            )}

            {/* Accordion Icon Settings */}
            {classesArray.includes('uib-accordion-icon') && (
              <AccordionSection title="Icon Settings" defaultOpen={true}>
                {(() => {
                  const isExpandedIcon = classesArray.includes('uib-accordion-icon-close');
                  const defaultIconClass = isExpandedIcon ? 'fa-solid fa-minus' : 'fa-solid fa-plus';
                  
                  // Use a property to track the current type so it doesn't reset when value is empty
                  const currentType = selectedNode.props?.['data-icon-type'] || 'default';
                  
                  // Determine current value based on children
                  let currentVal = '';
                  if (selectedNode.children && selectedNode.children.length > 0) {
                    const child = selectedNode.children[0];
                    if (child.type === 'img') {
                      currentVal = child.props?.src || '';
                    } else if (child.type === 'span' || child.type === 'i') {
                      currentVal = child.props?.class || '';
                      if (currentVal === defaultIconClass) currentVal = '';
                    }
                  }

                  const updateIconType = (type) => {
                    // When changing type, we update the data-icon-type prop.
                    // If switching to default, we also reset the children to the default icon.
                    // If switching to image or font, we leave children empty until a value is picked,
                    // or keep the old value if they switch back.
                    let updatedProps = { ...selectedNode.props, 'data-icon-type': type };
                    let newChildren = [...(selectedNode.children || [])];
                    
                    if (type === 'default') {
                      newChildren = [{
                        type: 'span',
                        tag: 'span',
                        id: Math.random().toString(36).substr(2, 9),
                        label: 'Icon',
                        props: { class: defaultIconClass }
                      }];
                    } else {
                      newChildren = [];
                    }
                    
                    updateNodeField(selectedNode.id, { props: updatedProps, children: newChildren });
                  };

                  const updateIconValue = (val) => {
                    let newChildren = [];
                    if (currentType === 'image' && val) {
                      newChildren = [{
                        type: 'img',
                        tag: 'img',
                        label: 'Icon Image',
                        id: Math.random().toString(36).substr(2, 9),
                        props: { src: val, alt: 'Accordion icon' }
                      }];
                    } else if (currentType === 'font' && val) {
                      newChildren = [{
                        type: 'i',
                        tag: 'i',
                        label: 'Icon',
                        id: Math.random().toString(36).substr(2, 9),
                        props: { class: val }
                      }];
                    }
                    updateNodeField(selectedNode.id, { children: newChildren });
                  };

                  return (
                    <div style={{ marginTop: '12px' }}>
                      <label className="uib-label" style={{ textTransform: 'capitalize', fontWeight: '600', marginBottom: '12px', display: 'block' }}>
                        Icon Style
                      </label>
                      <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', background: 'var(--sb-bg-dark)', padding: '4px', borderRadius: '6px' }}>
                        {[
                          { id: 'default', label: 'Default' },
                          { id: 'image', label: 'Image/SVG' },
                          { id: 'font', label: 'Font Icon' }
                        ].map(opt => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => updateIconType(opt.id)}
                            style={{
                              flex: 1,
                              padding: '6px',
                              fontSize: '12px',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              background: currentType === opt.id ? 'var(--sb-bg-main)' : 'transparent',
                              color: currentType === opt.id ? 'var(--sb-text-main)' : 'var(--sb-text-muted)',
                              boxShadow: currentType === opt.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                              transition: 'all 0.2s'
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      
                      {currentType === 'image' && (
                        <div style={{ marginTop: '12px' }}>
                          <ImageEditor 
                            mode="static"
                            value={currentVal}
                            onUpdate={(val) => updateIconValue(val)}
                            label="Upload Image or SVG"
                          />
                        </div>
                      )}
                      
                      {currentType === 'font' && (
                        <div style={{ marginTop: '12px' }}>
                          <IconPicker 
                            value={currentVal}
                            onSelect={(val) => updateIconValue(val)}
                          />
                        </div>
                      )}
                    </div>
                  );
                })()}
              </AccordionSection>
            )}

            {/* 4. Styles & Classes */}
            <AccordionSection title="Styles & Classes">
              {(classesArray.includes('uib-container') || classesArray.includes('uib-full-width')) && (
                <div className="form-group" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    id="full-width-toggle"
                    checked={classesArray.includes('uib-full-width')}
                    onChange={(e) => {
                      let updatedClasses = [...classesArray];
                      if (e.target.checked) {
                        updatedClasses = updatedClasses.filter(c => c !== 'uib-container');
                        if (!updatedClasses.includes('uib-full-width')) updatedClasses.push('uib-full-width');
                      } else {
                        updatedClasses = updatedClasses.filter(c => c !== 'uib-full-width');
                        if (!updatedClasses.includes('uib-container')) updatedClasses.push('uib-container');
                      }
                      updateNodeProperty(selectedNode.id, 'class', updatedClasses.join(' '));
                    }}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  <label htmlFor="full-width-toggle" style={{ marginBottom: 0, cursor: 'pointer' }}>Full Width Container</label>
                </div>
              )}

              <div className="form-group" style={{ marginTop: (classesArray.includes('uib-container') || classesArray.includes('uib-full-width')) ? '12px' : '16px' }}>
                <label>Apply Custom Style</label>
                <select 
                  className="form-control"
                  onChange={(e) => {
                    if (!e.target.value) return;
                    const current = selectedNode.props?.class || '';
                    const classes = current.split(/\s+/).filter(Boolean);
                    if (!classes.includes(e.target.value)) {
                      const updated = [...classes, e.target.value].join(' ');
                      updateNodeProperty(selectedNode.id, 'class', updated);
                    }
                    e.target.value = '';
                  }}
                >
                  <option value="">-- Select a style --</option>
                  {customStyles.map(s => {
                    const classId = s.id.startsWith('uib-') ? s.id : 'uib-' + s.id;
                    return <option key={s.id} value={classId}>{s.label || s.id}</option>;
                  })}
                </select>
              </div>

              <div className="form-group" style={{ marginTop: '12px' }}>
                <label>Applied Classes</label>
                <div className="active-styles-list">
                  {(() => {
                    const current = selectedNode.props?.class || '';
                    const classes = current.split(/\s+/).filter(Boolean);
                    if (classes.length === 0) return <p className="help-text">No classes applied.</p>;
                    return classes.map(cls => {
                      const isProtected = 
                        (selectedNode.label === 'Container' && (cls === 'container' || cls === 'uib-full-width')) || 
                        (selectedNode.label === 'Row' && cls === 'row') || 
                        (selectedNode.label === 'Column' && cls === 'column');

                      return (
                        <div key={cls} className={`style-tag ${isProtected ? 'is-protected' : ''}`}>
                          <span className="style-tag-label">{cls}</span>
                          {!isProtected && (
                            <button 
                              type="button" 
                              className="style-tag-remove"
                              onClick={() => {
                                const newClasses = classesArray.filter(c => c !== cls).join(' ');
                                updateNodeField(selectedNode.id, { 
                                  props: { ...selectedNode.props, class: newClasses } 
                                });
                              }}
                              title="Remove class"
                              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            ><X size={12} /></button>
                          )}
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              <div className="form-group">
                <label>Add Extra Class Manually</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type class and press Enter..."
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (e.target.value.trim()) {
                        const newClass = e.target.value.trim();
                        const current = selectedNode.props?.class || '';
                        const classes = current.split(/\s+/).filter(Boolean);
                        const newClassesToAdd = newClass.split(/\s+/).filter(Boolean);
                        
                        let updatedClasses = [...classes];
                        newClassesToAdd.forEach(c => {
                          const prefixed = c.startsWith('uib-') ? c : `uib-${c}`;
                          if (!updatedClasses.includes(prefixed)) updatedClasses.push(prefixed);
                        });
                        
                        updateNodeProperty(selectedNode.id, 'class', updatedClasses.join(' '));
                        e.target.value = '';
                      }
                    }
                  }}
                />
              </div>

              <button 
                type="button" 
                className="btn-secondary" 
                style={{ width: '100%', marginTop: '16px' }}
                onClick={() => resetToDefaultProps(selectedNode.id)}
              >
                Reset all to Defaults
              </button>
            </AccordionSection>

            {/* 5. Actions */}
            <div className="form-group" style={{ marginTop: '32px', padding: '0 20px 20px 20px' }}>
              <button 
                type="button"
                className="delete-element-btn"
                style={{ width: '100%' }}
                onClick={() => { removeNode(selectedNode.id); onDeselect(); }}
              >
                Delete {isPrimitive ? 'Element' : 'Instance'}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
