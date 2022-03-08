// lista que será usada nesse execício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

// Estrutura de repetição para percorrer a lista 
for ( let number of numbers ) {
  //imprimindo cada elemento da lista
  console.log('Elemento: ' + number);
  //fazendo uma soma cumulativa de todos os elemento da lista
  somaNumbers += number;
}

console.log('Soma de todos os elemento da lista: ' + somaNumbers);
