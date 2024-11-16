const numberForm = document.getElementsByClassName('number-form')[0];

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

function setCookie(name, value) {
  let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  document.cookie = cookie;
}

window.addEventListener('DOMContentLoaded', () => {
  if (getCookie('number')) {
    const result = confirm(`Dividers of ${getCookie('number')}: ${getCookie('dividers')}\nDo you want to delete this data from cookies?`);
    if (result) {
      setCookie('number', '');
      setCookie('dividers', '');
      numberForm.style.display = 'block';
    } else {
      alert('There are some cookies on this page. Reload the page to view them');
    }
  } else {
    numberForm.style.display = 'block';
  }
});

numberForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(numberForm);
  const number = parseInt(formData.get('number'));
  if (isNaN(number) || number <= 0) {
    alert('You must choose a positive number');
  } else {
    const dividers = [];
    for (let i = 1; i <= Math.ceil(number / 2); i++) {
      if (number % i == 0) {
        dividers.push(i);
      }
    }
    dividers.push(number);
    window.alert(`Dividers of ${number}: ${dividers.join(', ')}`);
    setCookie('number', number);
    setCookie('dividers', dividers.join(', '));
  }
});