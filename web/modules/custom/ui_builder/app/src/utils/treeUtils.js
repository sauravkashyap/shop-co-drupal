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

export function hydrateTree(nodes) {
  return nodes.map(node => ({
    ...node,
    props: node.props || {},
    children: node.children ? hydrateTree(node.children) : (node.isField ? undefined : [])
  }));
}

export function deleteNodeById(nodes, id) {
  return nodes
    .filter(n => n.id !== id)
    .map(n => ({ ...n, children: n.children ? deleteNodeById(n.children, id) : [] }));
}

export function canAcceptChild(parent, child) {
  if (!parent) return true;
  const isContainer = CONTAINER_TAGS.includes(parent.tag);
  if (!isContainer) return false;
  
  // Specific restrictions
  const childTag = child.type || child.tag;
  
  // Lists
  if ((parent.tag === 'ul' || parent.tag === 'ol') && childTag !== 'li') {
    return false; // Lists only accept list items
  }
  
  // Tables
  if (parent.tag === 'table' && !['thead', 'tbody', 'tr'].includes(childTag)) {
    return false; // Tables only accept thead, tbody, or tr
  }
  if (['thead', 'tbody'].includes(parent.tag) && childTag !== 'tr') {
    return false; // thead/tbody only accept tr
  }
  if (parent.tag === 'tr' && !['th', 'td'].includes(childTag)) {
    return false; // Rows only accept cells
  }
  if (['th', 'td'].includes(childTag) && parent.tag !== 'tr') {
    return false; // Cells must be inside rows
  }

  // Forms
  if (parent.tag === 'select' && childTag !== 'option') {
    return false; // Select only accepts options
  }

  // Prevent nesting major sections deeply
  if (['section', 'header', 'footer', 'main'].includes(childTag) && !['div', 'main'].includes(parent.tag)) {
    return false;
  }
  
  return true;
}
