const alignForm = document.getElementsByClassName('align-form')[0];
const firstBlock = document.getElementsByClassName('left-top-block')[0];
const secondBlock = document.getElementsByClassName('right-top-block')[0];

alignForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(alignForm);
  const leftTopAlign = formData.get('leftTop');
  const rightTopAlign = formData.get('rightTop');
  localStorage.setItem('leftTopAlign', leftTopAlign);
  localStorage.setItem('rightTopAlign', rightTopAlign);
});

secondBlock.addEventListener('mouseover', () => {
  if (localStorage.getItem('rightTopAlign') == 'on') {
    secondBlock.style.justifyContent = 'end';
  }
});

firstBlock.addEventListener('mouseover', () => {
  if (localStorage.getItem('leftTopAlign') == 'on') {
    firstBlock.style.alignItems = 'end';
  }
});