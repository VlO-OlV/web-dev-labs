const outputBlock = document.getElementsByClassName('right-middle-block')[0];
const outputElement = document.createElement('p');

const smallAxis = Math.ceil(Math.random() * 10);
const bigAxis = Math.ceil(Math.random() * 20);
const square = Math.PI * smallAxis * bigAxis;

const text = document.createTextNode(`Ellipse square: ${Math.round(square * 100) / 100}`);

outputElement.appendChild(text);
outputBlock.appendChild(outputElement);