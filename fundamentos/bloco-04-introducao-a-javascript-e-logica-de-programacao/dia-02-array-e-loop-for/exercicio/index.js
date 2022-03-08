// lista que será usada nesse execício
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Variáveis auxiliares para a resolução de alguns comandos
let somaNumbers = 0, elementosImpar = [], arrayContador = [];
// "Infinity" é uma variável global do js que significa o maio número
let menorElemento = Infinity;
// foi inicializada com o valor negativo para servir de menor número possível
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
  //Verificando qual é o menor elemento do array e guardando na variável menorElemento
  if (number < menorElemento){
    menorElemento = number;
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

// Mostrando o menor elemento da lista
console.log('Menor elemento da lista é: ' + menorElemento);

// Mostrando os elementos impares da lista
if (elementosImpar.length > 0 ){
  console.log('Números Impar da lista: ',  elementosImpar);

}else {
  console.log('nenhum valor ímpar encontrado');

}

// Criando um Array com números de 1 a 25 usando a estrutura de repetição for
for (let index = 1; index < 26; index +=1 ){
  arrayContador.push(index);
}

// Mostrando o resultado no console 
console.log('Array de com números de 1 até 25: ', arrayContador);
