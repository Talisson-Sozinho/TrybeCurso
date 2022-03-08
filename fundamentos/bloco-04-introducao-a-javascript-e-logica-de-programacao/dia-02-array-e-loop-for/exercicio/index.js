// lista que será usada nesse execício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0, elementosImpar = [];
/* "Infinity" é uma variável global do js que significa o maio número
* foi inicializada com o valor negativo para servir de menor número possível
*/
let maiorElemento = -Infinity;

// Estrutura de repetição para percorrer a lista 
for (let number of numbers) {
  //imprimindo cada elemento da lista
  console.log('Elemento: ' + number);
  //fazendo uma soma cumulativa de todos os elemento da lista
  somaNumbers += number;
  //Verificando qual é o maior elemento do array e guardando na variável maiorElemento
  if ( number > maiorElemento){
    maiorElemento = number;
  }
  //salvando os elementos Impar do array para mostrar posteriormente no console
  if ( number % 2 === 1 ){
    elementosImpar.push(number);
  }
}
// Mostrando no console a soma dos elementos da lista
console.log('Soma de todos os elemento da lista: ' + somaNumbers);

// fazendo o cálculo da média aritmética de todos os elemento da lista
const mediaAritmeticaArray = somaNumbers / numbers.length;

// Mostrando no console a média aritmética de todos os elemento da lista
console.log('Média aritmética dos elemento da lista: ' + mediaAritmeticaArray);

// Fazendo a verificação se a média é meio ou menor igual a 20
if (mediaAritmeticaArray > 20) {
  console.log("valor maior que 20");

} else {
  console.log('valor menor ou igual a 20');

}

// Mostrando o maior elemento da lista
console.log('Maior elemento da lista é: ' + maiorElemento);

// Mostrando os elementos impares da lista
if (elementosImpar.length > 0 ){
  console.log('Números Impar da lista: ',  elementosImpar);

}else {
  console.log('nenhum valor ímpar encontrado');

}
