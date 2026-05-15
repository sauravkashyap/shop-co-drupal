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
  if (!node || !node.props) return false;
  const p = node.props;
  
  if (p.flexDirection) return true;
  if (p.justifyContent) return true;
  if (p.alignItems) return true;
  if (p.alignSelf) return true;
  if (p.flexGrow !== undefined && p.flexGrow !== 0) return true;
  if (p.flexShrink !== undefined && p.flexShrink !== 1) return true;
  if (p.width) return true;
  if (p.height) return true;
  
  return false;
}
