import React from 'react';

export function PreviewRenderer({ nodes }) {
  if (!nodes || !Array.isArray(nodes)) return null;

  return nodes.map((node, index) => {
    if (typeof node === 'string') {
      return <React.Fragment key={index}>{node}</React.Fragment>;
    }

    const Tag = node.tag || node.type || 'div';
    const props = { ...node.props } || {};
    
    // Convert 'class' to 'className' for React
    if (props.class) {
      props.className = props.class;
      delete props.class;
    }
    
    // React Error 62: style prop must be an object
    if (typeof props.style === 'string') {
      const styleObj = {};
      props.style.split(';').forEach(rule => {
        const [key, val] = rule.split(':');
        if (key && val) {
          const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
          styleObj[camelKey] = val.trim();
        }
      });
      props.style = styleObj;
    }

    // Add unique key
    props.key = node.id || index;

    // Handle SVG specifically
    if (Tag === 'svg' && node.content) {
      return (
        <svg 
          {...props} 
          dangerouslySetInnerHTML={{ __html: node.content }} 
        />
      );
    }

    // Handle background image or other specific styles handled in NodeCard
    // Normally props.style might need to be converted to React style object
    // if it's a string, but usually in this builder it seems styles are classes
    // or we might need a basic parser. Let's assume props are already React-friendly.

    const VOID_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    
    if (VOID_ELEMENTS.includes(Tag.toLowerCase())) {
      if (Tag.toLowerCase() === 'img' && node.content && !props.src) {
        props.src = node.content;
      }
      return <Tag {...props} />;
    }

    // Handle video, audio, iframe where content might be the URL
    if (['video', 'audio', 'iframe', 'source'].includes(Tag.toLowerCase()) && node.content && !props.src) {
      // If the content is just a URL string and not HTML tags
      if (typeof node.content === 'string' && !node.content.trim().startsWith('<')) {
        props.src = node.content;
        delete node.content;
      }
    }

    // If node has content (text or HTML) and no children
    if (node.content && (!node.children || node.children.length === 0)) {
      if (typeof node.content === 'string' && node.content.trim().startsWith('<')) {
        return <Tag {...props} dangerouslySetInnerHTML={{ __html: node.content }} />;
      }
      return <Tag {...props}>{node.content}</Tag>;
    }

    // Handle children recursively
    return (
      <Tag {...props}>
        {node.children && node.children.length > 0 && (
          <PreviewRenderer nodes={node.children} />
        )}
      </Tag>
    );
  });
}
