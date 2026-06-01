const STANDARD_PROPS = [
  'font-size', 'font-weight', 'color', 'line-height', 'letter-spacing', 'text-align', 'text-transform', 'font-family',
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-top', 'margin-bottom', 'margin-right', 'margin-left',
  'display', 'width', 'height', 'max-width', 'position', 'z-index', 'flex-direction', 'justify-content', 'align-items', 'gap',
  'background-color', 'background', 'border', 'border-radius', 'box-shadow', 'opacity', 'cursor', 'transition'
];

let data = { properties: {}, custom_properties: {}, children: [] };
let pastedProps = { 'display': 'flex', 'margin-bottom': '50px' };

let target = data;
if (!target.properties) target.properties = {};
if (!target.custom_properties) target.custom_properties = {};

Object.entries(pastedProps).forEach(([prop, val]) => {
  if (STANDARD_PROPS.includes(prop)) {
    target.properties[prop] = val;
  } else {
    target.custom_properties[prop] = val;
  }
});
console.log("data after paste:", data);
