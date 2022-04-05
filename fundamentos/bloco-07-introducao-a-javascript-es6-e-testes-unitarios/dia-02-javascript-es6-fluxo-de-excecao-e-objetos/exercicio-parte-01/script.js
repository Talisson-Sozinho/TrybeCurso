function sum(number1, number2) {

  if (number1 === '' || number2 === '') {
    throw new Error('Algum campo vazio!');
  }

  if (isNaN(number1) || isNaN(number2)) {
    throw new Error('Algum campo diferente de número!');
  }

  return parseInt(number1) + parseInt(number2);
}

function getInputValue() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  try {
    const result = sum(value1,value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (e) {
    document.getElementById('result').innerHTML = e.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', getInputValue);
}
