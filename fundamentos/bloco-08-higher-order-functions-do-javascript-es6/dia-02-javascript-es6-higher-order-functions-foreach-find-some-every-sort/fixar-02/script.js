// Requisito 01
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const result = numbers.find( (number) => number % 3 === 0 && number % 5 === 0);
  return result ? result : 'Não encontrado!!!';
}

console.log(findDivisibleBy3And5());

// Requisito 02
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const nameWithFiveLetters = names.find( (name) => name.length === 5 );
  return nameWithFiveLetters ? nameWithFiveLetters : 'Não encontrado!!!';
}

console.log(findNameWithFiveLetters());
