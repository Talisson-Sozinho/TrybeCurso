// Requisito 01
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const result = arr.some( (value) => value.toLowerCase() === name.toLowerCase() );
  return result ? result : 'vish, não tem não amigão';
}

console.log(hasName(names, 'ana'));

// Requisito 02
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every(person => person.age >= minimumAge);
}

console.log(verifyAges(people, 18));