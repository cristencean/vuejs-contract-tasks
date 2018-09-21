// Task 2
const encodeHtmlEntities = str => String(str)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const getHtmlFromArray = (array) => {
  if (array.length === 1) {
    return `<${array[0]}/>`;
  }
  let html = '';
  array.forEach((fragment, index) => {
    if (index === 0){
      html += `<${array[0]}>`;
    } else if (Array.isArray(fragment)) {
      html += getHtmlFromArray(fragment);
    } else {
      html += encodeHtmlEntities(fragment);
    }
  });
  html += `</${array[0]}>`;
  return html;
};

// Example
const exampleArray = ['div','some ','element',['p','with text',
  ['span','with <b>text</b>']],['br'],'end text'];
console.log(getHtmlFromArray(exampleArray));