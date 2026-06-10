export const ELEMENT_CATEGORIES = [
  {
    name: 'Layout',
    elements: [
      { type: 'div', label: 'Container', icon: '□', isField: false, defaultProps: { class: 'uib-container' } },
      { type: 'div', label: 'Plain Div', icon: '□', isField: false, defaultProps: { class: '' } },
      { type: 'div', label: 'Row', icon: '⊞', isField: false, defaultProps: { class: 'uib-row' } },
      { type: 'div', label: 'Column', icon: '⊞', isField: false, defaultProps: { class: 'uib-col-12' } },
      { type: 'section', label: 'Section', icon: '📑', isField: false, defaultProps: { class: 'uib-section' } },
      { type: 'article', label: 'Article', icon: '📄', isField: false, defaultProps: { class: 'uib-article' } },
      { type: 'main', label: 'Main', icon: '🔲', isField: false, defaultProps: { class: 'uib-main' } },
      { type: 'aside', label: 'Aside', icon: '◧', isField: false, defaultProps: { class: 'uib-aside' } },
      { type: 'nav', label: 'Navigation', icon: '⟁', isField: false, defaultProps: { class: 'uib-nav' } },
      { type: 'div', label: 'Grid', icon: '⊞', isField: false, defaultProps: { class: 'uib-grid' } },
    ]
  },
  {
    name: 'Media',
    elements: [
      { type: 'img', label: 'Image', icon: '🖼', isField: true, defaultProps: { class: 'uib-img' } },
      { type: 'svg', label: 'SVG', icon: 'S', isField: true, defaultProps: { class: 'uib-svg' } },
      { type: 'video', label: 'Video', icon: '▶', isField: true, defaultProps: { class: '', controls: true } },
    ]
  },
  {
    name: 'Typography',
    elements: [
      { type: 'h1', label: 'Heading 1', icon: 'H1', isField: true, defaultProps: { class: 'uib-h1' }, defaultContent: 'Heading 1' },
      { type: 'h2', label: 'Heading 2', icon: 'H2', isField: true, defaultProps: { class: 'uib-h2' }, defaultContent: 'Heading 2' },
      { type: 'h3', label: 'Heading 3', icon: 'H3', isField: true, defaultProps: { class: 'uib-h3' }, defaultContent: 'Heading 3' },
      { type: 'h4', label: 'Heading 4', icon: 'H4', isField: true, defaultProps: { class: 'uib-h4' }, defaultContent: 'Heading 4' },
      { type: 'h5', label: 'Heading 5', icon: 'H5', isField: true, defaultProps: { class: 'uib-h5' }, defaultContent: 'Heading 5' },
      { type: 'h6', label: 'Heading 6', icon: 'H6', isField: true, defaultProps: { class: 'uib-h6' }, defaultContent: 'Heading 6' },
      { type: 'p', label: 'Paragraph', icon: '¶', isField: true, defaultProps: { class: 'uib-p' }, defaultContent: 'This is a paragraph of text.' },
      { type: 'blockquote', label: 'Quote', icon: '“', isField: true, defaultProps: { class: 'uib-blockquote' }, defaultContent: 'Enter your quote here.' },
      { type: 'hr', label: 'Divider', icon: '—', isField: true, defaultProps: { class: 'uib-hr' } },
    ]
  },
  {
    name: 'Inline',
    elements: [
      { type: 'span', label: 'Span / Text', icon: 'T', isField: true, defaultProps: { class: 'uib-span' }, defaultContent: 'Inline text' },
      { type: 'strong', label: 'Bold', icon: 'B', isField: true, defaultProps: { class: 'uib-strong' }, defaultContent: 'Bold text' },
      { type: 'em', label: 'Italic', icon: 'I', isField: true, defaultProps: { class: 'uib-em' }, defaultContent: 'Italic text' },
      { type: 'code', label: 'Code', icon: '</>', isField: true, defaultProps: { class: 'uib-code' }, defaultContent: 'code_here()' },
      { type: 'small', label: 'Small', icon: 's', isField: true, defaultProps: { class: 'uib-small' }, defaultContent: 'Small text' },
    ]
  },
  {
    name: 'Tables',
    elements: [
      { 
        type: 'table', 
        label: 'Table', 
        icon: '▦', 
        isField: false, 
        defaultProps: { class: 'uib-table' },
        defaultChildren: [
          { 
            type: 'thead', 
            label: 'Table Head',
            children: [
              { 
                type: 'tr', 
                label: 'Table Row',
                children: [
                  { type: 'th', label: 'Table Cell', content: 'Header 1', isField: true },
                  { type: 'th', label: 'Table Cell', content: 'Header 2', isField: true },
                  { type: 'th', label: 'Table Cell', content: 'Header 3', isField: true }
                ]
              }
            ]
          },
          { 
            type: 'tbody', 
            label: 'Table Body',
            children: [
              { 
                type: 'tr', 
                label: 'Table Row',
                children: [
                  { type: 'td', label: 'Table Cell', content: 'Data 1', isField: true },
                  { type: 'td', label: 'Table Cell', content: 'Data 2', isField: true },
                  { type: 'td', label: 'Table Cell', content: 'Data 3', isField: true }
                ]
              }
            ]
          }
        ]
      },
      { type: 'tr', label: 'Table Row', icon: '=', isField: false },
      { type: 'td', label: 'Table Cell', icon: '□', isField: true, defaultContent: 'Cell data' },
      { type: 'thead', label: 'Table Head', icon: '☰', isField: false },
      { type: 'tbody', label: 'Table Body', icon: '☰', isField: false },
    ]
  },
  {
    name: 'Lists',
    elements: [
      { 
        type: 'ul', 
        label: 'Unordered List', 
        icon: '•', 
        isField: false, 
        defaultProps: { class: 'uib-ul' },
        defaultChildren: [
          { type: 'li', label: 'List Item', props: { class: 'uib-li' }, content: 'New list item', isField: true }
        ]
      },
      { 
        type: 'ol', 
        label: 'Ordered List', 
        icon: '1.', 
        isField: false, 
        defaultProps: { class: 'uib-ol' },
        defaultChildren: [
          { type: 'li', label: 'List Item', props: { class: 'uib-li' }, content: 'New list item', isField: true }
        ]
      },
      { type: 'li', label: 'List Item', icon: '-', isField: true, defaultProps: { class: 'uib-li' }, defaultContent: 'List item' },
    ]
  },
  {
    name: 'Forms',
    elements: [
      { 
        type: 'form', 
        label: 'Form', 
        icon: '✉', 
        isField: false, 
        defaultProps: { class: 'uib-form' },
        defaultChildren: [
          { type: 'label', label: 'Label', content: 'Email Address', isField: true, props: { class: 'uib-label' } },
          { type: 'input', label: 'Input', isField: true, props: { class: 'uib-input', type: 'email', placeholder: 'Enter email...' } },
          { type: 'button', label: 'Submit', content: 'Submit', isField: true, props: { class: 'uib-button uib-submit', type: 'submit' } }
        ]
      },
      { type: 'label', label: 'Label', icon: 'T', isField: true, defaultProps: { class: 'uib-label' }, defaultContent: 'Field Label' },
      { type: 'input', label: 'Input Field', icon: '✎', isField: true, defaultProps: { class: 'uib-input', type: 'text' } },
      { 
        type: 'select', 
        label: 'Select Dropdown', 
        icon: '▾', 
        isField: false, 
        defaultProps: { class: 'uib-select' },
        defaultChildren: [
          { type: 'option', label: 'Select Option', content: 'Select an option...', isField: true }
        ]
      },
      { 
        type: 'choices', 
        label: 'Advanced Select (Choices.js)', 
        icon: '▾', 
        isField: false,
        tooltip: 'Means you can style it or you can style this select element or whatever suits so users can understand why there are two select elements.',
        defaultProps: { class: 'uib-choices' },
        defaultChildren: [
          { type: 'option', label: 'Select Option', content: 'Select an option...', isField: true }
        ]
      },
      { type: 'option', label: 'Select Option', icon: '○', isField: true, defaultContent: 'Option' },
      { type: 'textarea', label: 'Textarea', icon: '¶', isField: true, defaultProps: { class: 'uib-textarea' } },
    ]
  },
  {
    name: 'Interactive',
    elements: [
      { type: 'button', label: 'Button', icon: '▢', isField: true, defaultProps: { class: 'uib-button' }, defaultContent: 'Click Me' },
      { type: 'a', label: 'Link', icon: '⟁', isField: true, defaultProps: { class: 'uib-link' }, defaultContent: 'Read more' },
      { 
        type: 'div', 
        label: 'Slider', 
        icon: '↔', 
        isField: false, 
        defaultProps: { 
          class: 'swiper uib-slider',
          'data-swiper-nav': 'true',
          'data-swiper-pagination': 'false',
          'data-swiper-loop': 'false',
          'data-swiper-autoplay': 'false'
        },
        defaultChildren: [
          {
            type: 'div',
            label: 'Slider Track',
            props: { class: 'swiper-wrapper' },
            children: [
              { type: 'div', label: 'Slide 1', props: { class: 'swiper-slide uib-slide' }, children: [{ type: 'div', label: 'Slide Content', props: { class: 'uib-container' }, content: 'Slide 1', isField: true }] },
              { type: 'div', label: 'Slide 2', props: { class: 'swiper-slide uib-slide' }, children: [{ type: 'div', label: 'Slide Content', props: { class: 'uib-container' }, content: 'Slide 2', isField: true }] },
              { type: 'div', label: 'Slide 3', props: { class: 'swiper-slide uib-slide' }, children: [{ type: 'div', label: 'Slide Content', props: { class: 'uib-container' }, content: 'Slide 3', isField: true }] }
            ]
          },
          { type: 'div', label: 'Next Arrow', props: { class: 'swiper-button-next' } },
          { type: 'div', label: 'Prev Arrow', props: { class: 'swiper-button-prev' } }
        ]
      },
      { 
        type: 'div', 
        label: 'Accordion', 
        icon: '≚', 
        isField: false, 
        defaultProps: { 
          class: 'uib-accordion',
          'data-accordion-multiple': 'false'
        },
        defaultChildren: [
          {
            type: 'div',
            label: 'Accordion Item',
            props: { class: 'uib-accordion-item', 'data-state': 'closed' },
            children: [
              { 
                type: 'div', 
                label: 'Accordion Header', 
                props: { class: 'uib-accordion-header' },
                children: [
                  { type: 'span', label: 'Header Text', content: 'Accordion Item 1', isField: true, props: { class: 'uib-accordion-title' } },
                  { type: 'span', label: 'Accordion Icon', props: { class: 'uib-accordion-icon uib-accordion-icon-open' }, children: [{ type: 'span', tag: 'span', label: 'Icon', props: { class: 'fa-solid fa-plus' } }] },
                  { type: 'span', label: 'Accordion Icon', props: { class: 'uib-accordion-icon uib-accordion-icon-close', style: 'display:none;' }, children: [{ type: 'span', tag: 'span', label: 'Icon', props: { class: 'fa-solid fa-minus' } }] }
                ]
              },
              { 
                type: 'div', 
                label: 'Accordion Content', 
                props: { class: 'uib-accordion-content', style: 'display:none;' }, 
                children: [
                  { type: 'p', label: 'Paragraph', content: 'Accordion content goes here.', isField: true, props: { class: 'uib-p' } }
                ] 
              }
            ]
          }
        ]
      }
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

export const CONTAINER_TAGS = [
  'div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav', 
  'ul', 'ol', 'table', 'thead', 'tbody', 'tr', 'form', 'select'
];
