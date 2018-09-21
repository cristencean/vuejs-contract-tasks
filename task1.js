//  Task 1
const decimalToHex = value => value.toString(16);
const hexToDecimal = value => parseInt(value, 16);
const regex = /[\da-z]{2}/g;

const getAverageColor = (color1, color2) => {
  const color1Array = color1.match(regex);
  const color2Array = color2.match(regex);
  let decimalPart;
  let averColorArray = [];

  for (let i = color1Array.length; i;) {
    decimalPart = decimalToHex((hexToDecimal(color1Array[--i]) +
      hexToDecimal(color2Array[i])) >> 1);

    averColorArray[i] = decimalPart.length === 2 ? '' +
      decimalPart : '0' + decimalPart;
  }
  return  averColorArray.join('');
};

//  Exemple
console.log(`Average color from b4280b and 0bb41f is ${getAverageColor('b4280b', '0bb41f')}.`);