const inputElem = document.querySelector('#name-input');
const nameElem = document.querySelector('#name-output');

inputElem.addEventListener('input', event => {
  const name = event.target.value.trim();
  nameElem.textContent = name === '' ? 'Anonymous' : name;
});
