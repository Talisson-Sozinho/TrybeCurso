// Requisito 01
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Adicione se código aqui
people.sort( (person2, person1) => person2.age - person1.age);
console.log(people);
// Requisito 02
people.sort( (person2, person1) => person1.age - person2.age);
console.log(people);
