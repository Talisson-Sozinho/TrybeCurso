function greet(name, message = 'hi') {
  return `${message}, ${name}`
}

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));
