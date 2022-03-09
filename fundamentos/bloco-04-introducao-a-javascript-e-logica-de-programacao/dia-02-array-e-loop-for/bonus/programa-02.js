// Ordena valores de um Array em ordem decrescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length - 1; index +=1){
  for (let secondIndex = index + 1; secondIndex < numbers.length; secondIndex+=1){
    if( numbers[index] < numbers[secondIndex] ){
      let aux = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = aux;
    }
  }
}

console.log(numbers);
