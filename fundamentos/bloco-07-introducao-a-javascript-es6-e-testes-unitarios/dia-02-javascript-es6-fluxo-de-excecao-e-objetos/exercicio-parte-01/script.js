function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1 === '' || value2 === '') {
    throw new Error('Algum campo vazio!');
  }
  const result = parseInt(value1) + parseInt(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    try {
      sum();
    } catch (e) {
      document.getElementById('result').innerHTML = e.message;
    }
  });
}
