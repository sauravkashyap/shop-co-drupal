export const ELEMENT_CATEGORIES = [
  {
    name: 'Layout',
    elements: [
      { type: 'div', label: 'Container', icon: '□', isField: false, defaultProps: { class: 'max-w-7xl mx-auto px-4 w-full' } },
      { type: 'div', label: 'Row for columns', icon: '⊞', isField: false, defaultProps: { class: 'flex flex-row gap-4 w-full min-h-[50px]' } },
      { type: 'div', label: 'Column', icon: '⊞', isField: false, defaultProps: { class: 'flex flex-col gap-4 flex-1 min-h-[50px]' } },
      { type: 'section', label: 'Section', icon: '□', isField: false, defaultProps: { class: 'py-12 px-6 w-full' } },
      { type: 'div', label: 'Grid', icon: '⊞', isField: false, defaultProps: { class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full' } },
    ]
  },
  {
    name: 'Media',
    elements: [
      { type: 'img', label: 'Image', icon: '🖼', isField: true, defaultProps: { class: 'w-full h-auto object-cover rounded-lg' } },
      { type: 'video', label: 'Video', icon: '▶', isField: true, defaultProps: { class: 'w-full h-auto rounded-lg' } },
    ]
  },
  {
    name: 'Typography',
    elements: [
      { type: 'h1', label: 'Heading 1', icon: 'H1', isField: true, defaultProps: { class: 'text-4xl font-bold' }, defaultContent: 'Heading 1' },
      { type: 'h2', label: 'Heading 2', icon: 'H2', isField: true, defaultProps: { class: 'text-3xl font-semibold' }, defaultContent: 'Heading 2' },
      { type: 'h3', label: 'Heading 3', icon: 'H3', isField: true, defaultProps: { class: 'text-2xl font-medium' }, defaultContent: 'Heading 3' },
      { type: 'h4', label: 'Heading 4', icon: 'H4', isField: true, defaultProps: { class: 'text-xl font-medium' }, defaultContent: 'Heading 4' },
      { type: 'h5', label: 'Heading 5', icon: 'H5', isField: true, defaultProps: { class: 'text-lg font-medium' }, defaultContent: 'Heading 5' },
      { type: 'h6', label: 'Heading 6', icon: 'H6', isField: true, defaultProps: { class: 'text-base font-medium' }, defaultContent: 'Heading 6' },
      { type: 'p', label: 'Paragraph', icon: '¶', isField: true, defaultProps: { class: 'text-base leading-relaxed text-gray-600' }, defaultContent: 'This is a paragraph of text.' },
      { type: 'span', label: 'Span / Text', icon: 'T', isField: true, defaultProps: { class: '' }, defaultContent: 'Inline text' },
    ]
  },
  {
    name: 'Interactive',
    elements: [
      { type: 'button', label: 'Button', icon: '▢', isField: true, defaultProps: { class: 'px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium inline-block text-center' }, defaultContent: 'Click Me' },
      { type: 'a', label: 'Link', icon: '⟁', isField: true, defaultProps: { class: 'text-blue-600 hover:underline cursor-pointer font-medium' }, defaultContent: 'Read more' },
    ]
  },
  {
    name: 'Drupal',
    elements: [
      { type: 'drupal-block', label: 'Block', icon: '☐', isField: false, isDrupal: true, defaultProps: { 'block-id': '', class: '' } },
      { type: 'drupal-menu', label: 'Menu', icon: '☰', isField: false, isDrupal: true, defaultProps: { 'menu-name': '', class: '' } },
    ]
  }
];
