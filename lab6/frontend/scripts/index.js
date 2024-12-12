const glitchForm = document.getElementsByClassName('glitch-form')[0];
const messageBlock = document.getElementsByClassName('message-block')[0];

glitchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(glitchForm);
  const content = formData.get('content').toString();
  const firstColor = formData.get('firstColor').toString();
  const secondColor = formData.get('secondColor').toString();
  const spacing = parseInt(formData.get('spacing'));
  const duration = parseFloat(formData.get('duration'));
  const body = {
    content: content,
    firstColor: firstColor,
    secondColor: secondColor,
    spacing: spacing,
    duration: duration,
  };

  const response = await fetch('https://web-dev-labs-rose.vercel.app/textItems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    messageBlock.textContent = 'Element saved';
  } else {
    messageBlock.textContent = 'Error!';
  }
  setTimeout(() => {
    messageBlock.textContent = '';
  }, 3000);
});