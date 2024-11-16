const leftTopBlock = document.getElementsByClassName('left-top-block')[0];
const leftBottomBlock = document.getElementsByClassName('left-bottom-block')[0];
const rightTopBlock = document.getElementsByClassName('right-top-block')[0];
const rightMiddleBlock = document.getElementsByClassName('right-middle-block')[0];
const rightBottomBlock = document.getElementsByClassName('right-bottom-block')[0];
const createListLinks = document.getElementsByClassName('list-link');

const blocks = [leftTopBlock, leftBottomBlock, rightTopBlock, rightMiddleBlock, rightBottomBlock];

for (let i = 0; i < blocks.length; i++) {
  createListLinks[i].addEventListener('click', () => {
    const listForm = document.createElement('form');
    listForm.className = 'list-form';
    
    blocks[i].innerHTML = '';
    blocks[i].style.flexDirection = 'column';
    blocks[i].style.justifyContent = 'start';
    listForm.innerHTML = '<label for="stringValue">Enter new string:</label><input type="text" name="stringValue" class="string-input"><button type="submit">Add</button>';
    blocks[i].appendChild(listForm);

    const list = document.createElement('ul');
    let listValues = [];
    blocks[i].appendChild(list);

    const saveButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    saveButton.textContent = 'Save';
    deleteButton.textContent = 'Delete';
    blocks[i].appendChild(saveButton);
    blocks[i].appendChild(deleteButton);

    listForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(listForm);
      const stringValue = formData.get('stringValue');

      if (stringValue.length != 0) {
        const stringElement = document.createElement('li');
        stringElement.textContent = stringValue;
        list.appendChild(stringElement);
        listValues.push(stringValue);
      }
    });

    deleteButton.addEventListener('click', () => {
      localStorage.removeItem(`list_${i+1}`);
      listValues = [];
      list.innerHTML = ''
    });

    saveButton.addEventListener('click', () => {
      if (listValues.length != 0) {
        localStorage.setItem(`list_${i+1}`, listValues);
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < createListLinks.length; i++) {
    let listValues = localStorage.getItem(`list_${i+1}`);
    if (listValues) {
      blocks[i].innerHTML = '';
      blocks[i].style.flexDirection = 'column';
      blocks[i].style.justifyContent = 'start';
      listValues = listValues.split(',');
      const list = document.createElement('ul');
      listValues.forEach((listValue) => {
        const stringElement = document.createElement('li');
        stringElement.textContent = listValue;
        list.appendChild(stringElement);
      });
      blocks[i].appendChild(list);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      blocks[i].appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        localStorage.removeItem(`list_${i+1}`);
      });
    }
  }
});