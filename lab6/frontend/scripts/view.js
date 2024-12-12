const viewBlock = document.getElementsByClassName('right-middle-block')[0];

const renderData = (data) => {
  viewBlock.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const glitchElement = document.createElement('div');
    glitchElement.className = "glitch";
    glitchElement.style.letterSpacing = `${data[i].spacing}px`;
    glitchElement.innerHTML = `<p>${data[i].content}</p><div class="glitch-left" style="color: ${data[i].firstColor}; animation-duration: ${data[i].duration}s;">${data[i].content}</div><div class="glitch-right" style="color: ${data[i].secondColor}; animation-duration: ${data[i].duration}s;">${data[i].content}</div>`;
    viewBlock.appendChild(glitchElement);
  }
}

const fetchData = async () => {
  const response = await fetch('https://web-dev-labs-rose.vercel.app/textItems');
  const data = await response.json();
  renderData(data);
}

document.addEventListener('DOMContentLoaded', async () => {
  fetchData();
  setInterval(() => { fetchData(); }, 20000);
});