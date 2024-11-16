const firstTextBlock = document.getElementsByClassName('left-top-text')[0];
const secondTextBlock = document.getElementsByClassName('right-top-text')[0];

const firstText = firstTextBlock.textContent;
const secondText = secondTextBlock.textContent;

firstTextBlock.textContent = secondText;
secondTextBlock.textContent = firstText;