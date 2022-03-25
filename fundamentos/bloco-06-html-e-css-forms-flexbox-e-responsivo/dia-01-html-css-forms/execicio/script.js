const submitButton = document.getElementById('button-submit');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputDescription = document.getElementById('input-description');
const inputTermCheck = document.getElementById('check-2');
const clearButton = document.getElementById('button-limpar');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (testConditions()){
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados Inválidos');
  }
})

clearButton.addEventListener('click', () => {
  submitButton.disabled = true;
})

inputTermCheck.addEventListener( 'click', () => {
  submitButton.disabled = !inputTermCheck.checked;
})

function testConditions() {
  const booleanName = inputName.value.length > 10 && inputName.value.length < 40;
  const booleanEmail = inputEmail.value.length > 10 && inputEmail.value.length < 50;
  const booleanDescription = inputDescription.value.length < 500;
  const booleanTermCheck = inputTermCheck.checked;

  if (booleanName && booleanEmail && booleanDescription && booleanTermCheck) {
    return true;
  }
  return false;
}