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
  const isContainer = ['div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav'].includes(parent.tag);
  if (!isContainer) return false;
  
  // Specific restrictions
  const childTag = child.type || child.tag;
  if (['section', 'header', 'footer', 'main'].includes(childTag) && parent.tag !== 'div' && parent.tag !== 'main') {
    // Avoid nesting major sections deeply
    return false;
  }
  
  return true;
}
