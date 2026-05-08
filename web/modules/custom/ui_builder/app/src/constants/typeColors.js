/**
 * Shared type-color map used by both NodeCard (canvas) and Sidebar (element list).
 * Matches the Site Studio color-coding convention.
 */
export const TYPE_COLORS = {
  // Layout — Amber/Yellow
  div: '#f59e0b',
  section: '#f59e0b',
  article: '#f59e0b',
  header: '#f59e0b',
  footer: '#f59e0b',
  main: '#f59e0b',
  aside: '#f59e0b',
  nav: '#f59e0b',
  // Typography — Blue
  h1: '#3b82f6',
  h2: '#3b82f6',
  h3: '#3b82f6',
  h4: '#3b82f6',
  h5: '#3b82f6',
  h6: '#3b82f6',
  p: '#3b82f6',
  span: '#3b82f6',
  // Media — Green/Teal
  img: '#10b981',
  video: '#10b981',
  audio: '#10b981',
  picture: '#10b981',
  // Interactive — Orange
  button: '#f97316',
  a: '#f97316',
  input: '#f97316',
  form: '#f97316',
  // Drupal elements — Cyan
  'drupal-block': '#06b6d4',
  'drupal-menu': '#06b6d4',
  // Component instance — Purple
  component: '#8b5cf6',
};

export const CATEGORY_COLORS = {
  'Layout': '#f59e0b',
  'Media': '#10b981',
  'Typography': '#3b82f6',
  'Interactive': '#f97316',
  'Drupal': '#06b6d4',
};

export function getTypeColor(tag, isInstance = false) {
  if (isInstance) return TYPE_COLORS.component;
  return TYPE_COLORS[tag?.toLowerCase()] || '#64748b';
}
