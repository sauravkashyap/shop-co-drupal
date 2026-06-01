const pasted = `
.uib-menu-card {
  display: flex;
}
.uib-menu-card .title {
  color: red;
}
`;
let cleanedText = pasted;
const match = cleanedText.match(/\{([\s\S]*)\}/);
if (match) cleanedText = match[1];
console.log(cleanedText);
