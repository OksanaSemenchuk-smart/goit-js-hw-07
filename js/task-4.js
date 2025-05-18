const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const infoInput = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (
    elements.email.value.trim() === '' ||
    elements.password.value.trim() === ''
  ) {
    return alert('All form fields must be filled in');
  } else {
    console.log(infoInput);
  }

  event.target.reset();
}
