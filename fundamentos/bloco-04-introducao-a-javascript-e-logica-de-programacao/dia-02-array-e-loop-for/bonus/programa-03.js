const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

// Estrutura de repetição para percorrer o array "numbers" até o penúltimo elemento
for (index = 0; index < numbers.length - 1; index += 1) {
  //multiplicando o elemento atual com o proximo e colocando no novo array
  numbersMultiplied.push(numbers[index] * numbers[index + 1]);
  //verificação para saber se já chegou no penúltimo elemento da lista
  if ( numbersMultiplied.length === numbers.length -1 ) {
    //caso entre, multiplicando o ultima elemento por 2 e colocando no novo array
    numbersMultiplied.push(numbers[index+1]*2);
  }
}
// exibindo no console 
console.log(numbersMultiplied)
