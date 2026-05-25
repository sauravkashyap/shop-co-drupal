import { CONTAINER_TAGS } from '../constants/elements';

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function findNodeById(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

export function findNodeLocation(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) return { parent: nodes, index: i };
    if (nodes[i].children) {
      const location = findNodeLocation(nodes[i].children, id);
      if (location) return location;
    }
  }
  return null;
}

export const cleanLegacyText = (text) => {
  if (typeof text !== 'string') return text;
  let cleanText = text;
  let firstBrace = cleanText.indexOf('{');
  let lastBrace = cleanText.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleanText = cleanText.substring(0, firstBrace) + cleanText.substring(lastBrace + 1);
  }
  return cleanText.replace(/\{\s*\{[\s\S]*?\}\s*\}/g, '').replace(/:\s*$/, '').trim();
};

export const cleanLegacySchema = (schema) => {
  if (!schema) return schema;
  let parsed = typeof schema === 'string' ? JSON.parse(schema) : schema;
  if (typeof parsed !== 'object') return schema;
  const newSchema = { ...parsed };
  Object.keys(newSchema).forEach(key => {
    if (newSchema[key] && newSchema[key].title) {
      newSchema[key].title = cleanLegacyText(newSchema[key].title);
      if (!newSchema[key].title) newSchema[key].title = `${key} Field`;
    }
  });
  return typeof schema === 'string' ? JSON.stringify(newSchema) : newSchema;
};

export function hydrateTree(nodes) {
  return nodes.map(node => {
    let cleanLabel = node.label;
    if (cleanLabel) {
      cleanLabel = cleanLegacyText(cleanLabel);
      if (!cleanLabel) {
        cleanLabel = node.tag ? node.tag.charAt(0).toUpperCase() + node.tag.slice(1) : 'Element';
      }
    }
    let cleanContent = node.content;
    if (typeof cleanContent === 'string') {
      cleanContent = cleanLegacyText(cleanContent);
    }
    
    return {
      ...node,
      label: cleanLabel,
      content: cleanContent,
      props: node.props || {},
      children: node.children ? hydrateTree(node.children) : (node.isField ? undefined : [])
    };
  });
}

export function deleteNodeById(nodes, id) {
  return nodes
    .filter(n => n.id !== id)
    .map(n => ({ ...n, children: n.children ? deleteNodeById(n.children, id) : [] }));
}

export function canAcceptChild(parent, child) {
  // ... (existing implementation)
  if (!parent) return true;
  const isContainer = CONTAINER_TAGS.includes(parent.tag);
  if (!isContainer) return false;
  
  const childTag = child.type || child.tag;
  if ((parent.tag === 'ul' || parent.tag === 'ol') && childTag !== 'li') return false;
  if (parent.tag === 'table' && !['thead', 'tbody', 'tr'].includes(childTag)) return false;
  if (['thead', 'tbody'].includes(parent.tag) && childTag !== 'tr') return false;
  if (parent.tag === 'tr' && !['th', 'td'].includes(childTag)) return false;
  if (['th', 'td'].includes(childTag) && parent.tag !== 'tr') return false;
  if (parent.tag === 'select' && childTag !== 'option') return false;
  if (['section', 'header', 'footer', 'main'].includes(childTag) && !['div', 'main'].includes(parent.tag)) return false;
  
  return true;
}

export function hasUniqueStyles(node) {
  if (!node) return false;

  const label = node.label || '';
  const isContainerOrDiv = label.startsWith('Container') || label.startsWith('Plain Div') || node.tag === 'div';

  // Helper to check if style data has actual properties
  const hasActualProps = (styles) => {
    if (!styles) return false;
    if (styles.properties && Object.values(styles.properties).some(val => val && val.trim() !== '')) return true;
    if (styles.custom_properties && Object.values(styles.custom_properties).some(val => val && val.trim() !== '')) return true;
    if (styles.children && styles.children.some(child => hasActualProps(child))) return true;
    return false;
  };

  // Instance styles (Site Studio Style) - ONLY for Container and Plain Div
  if (isContainerOrDiv && node.instanceStyles && hasActualProps(node.instanceStyles)) {
    return true;
  }

  if (!node.props) return false;
  const p = node.props;
  
  // If it's a column, we skip checking these props because they are handled by classes
  const isCol = node.props?.class?.split(' ').some(c => c.startsWith('uib-col-'));
  
  if (!isCol) {
    if (p.flexDirection) return true;
    if (p.justifyContent) return true;
    if (p.alignItems) return true;
    if (p.alignSelf) return true;
    if (p.flexGrow !== undefined && p.flexGrow !== 0) return true;
    if (p.flexShrink !== undefined && p.flexShrink !== 1) return true;
    if (p.width) return true;
    if (p.height) return true;
  }
  
  return false;
}

export function findComponentRootForNode(nodes, targetId, currentComponentRoot = null) {
  for (const node of nodes) {
    const nextComponentRoot = node.component_id ? node : currentComponentRoot;
    if (node.id === targetId) {
      return nextComponentRoot;
    }
    if (node.children) {
      const found = findComponentRootForNode(node.children, targetId, nextComponentRoot);
      if (found) return found;
    }
  }
  return null;
}

export function applyComponentValues(nodes, values) {
  if (!nodes || !Array.isArray(nodes)) return;

  nodes.forEach(node => {
    if (node.originalContent === undefined) {
      node.originalContent = node.content !== undefined ? node.content : '';
    }
    if (node.originalProps === undefined) {
      node.originalProps = node.props ? { ...node.props } : {};
    }
    if (node.originalId === undefined) {
      node.originalId = node.id;
    }

    let key = null;
    if (node.fieldLabel) {
      key = node.fieldLabel.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
    } else if (node.originalId) {
      key = 'field_' + node.originalId;
    }

    if (key && values && values[key] !== undefined) {
      const valData = values[key];
      let finalVal;
      if (valData && typeof valData === 'object' && 'value' in valData) {
        finalVal = valData.value;
      } else {
        finalVal = valData !== null && valData !== undefined ? String(valData) : '';
      }
      node.content = finalVal;
    } else {
      node.content = node.originalContent;
    }

    if (node.props) {
      for (const propName of Object.keys(node.originalProps)) {
        const propVal = node.originalProps[propName];
        if (typeof propVal === 'string') {
          let resolvedVal = propVal;
          if (values) {
            for (const [valKey, valData] of Object.entries(values)) {
              const finalVal = (valData && typeof valData === 'object' && 'value' in valData) ? valData.value : String(valData || '');
              resolvedVal = resolvedVal.replace(new RegExp(`\\{\\{\\s*${valKey}\\s*\\}\\}`, 'g'), finalVal);
            }
          }
          node.props[propName] = resolvedVal;
        } else {
          node.props[propName] = propVal;
        }
      }
    }

    if (node.children && Array.isArray(node.children)) {
      applyComponentValues(node.children, values);
    }
  });
}

