const bodyElem = document.querySelector('body');
const btnElem = document.querySelector('.change-color');
const colorElem = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnElem.addEventListener('click', handleClick);

function handleClick() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  colorElem.textContent = newColor;
}
