const submitButton = document.getElementById('button-submit');
const clearButton = document.getElementById('button-limpar');
// Formatando a data
const data = document.getElementById('datepicker');

window.DatePickerX.setDefaults({
  mondayFirst: false,
  format: 'dd-mm-yy'
});
data.DatePickerX.init();

// validação
const validate = new window.JustValidate('#form');

validate.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Name is required',
  },
  {
    rule: 'minLength',
    value: 10,
    errorMessage: 'Full name is required',
  },
  {
    rule: 'maxLength',
    value: 40,
  },
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Email is required',
  },
  {
    rule: 'email',
    errorMessage: 'Email is invalid!',
  },
  {
    rule: 'minLength',
    value: 10,
  },
  {
    rule: 'maxLength',
    value: 50,
  },
])
.addField('#check-2', [
  {
    rule: 'required',
    errorMessage: 'you need accept terms',
  },
]);

validate.onSuccess( () => {
  alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
});

validate.onFail( () => {
  alert('Dados Inválidos');
});