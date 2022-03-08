// lista que será usada nesse execício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;


// Estrutura de repetição para percorrer a lista 
for (let number of numbers) {
  //imprimindo cada elemento da lista
  console.log('Elemento: ' + number);
  //fazendo uma soma cumulativa de todos os elemento da lista
  somaNumbers += number;
}
// Mostrando no console a soma dos elementos da lista
console.log('Soma de todos os elemento da lista: ' + somaNumbers);

// fazendo o cálculo da média aritmética de todos os elemento da lista
const mediaAritmeticaArray = somaNumbers / numbers.length;

// Mostrando no console a média aritmética de todos os elemento da lista
console.log('Média aritmética dos elemento da lista: ' + mediaAritmeticaArray);

if (mediaAritmeticaArray > 20) {
  console.log("valor maior que 20");

} else {
  console.log('valor menor ou igual a 20');
  
}
