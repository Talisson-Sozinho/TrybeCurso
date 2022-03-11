// Primeira função
/*  Função para saber se uma palavra é um palíndromo
*   Entrada: ( 'Qualquer string' );
*   Saída: true para caso a string seja um palíndromo ou false caso não seja
*         um palíndromo, ou 'Erro' caso a entrada não seja uma string
*/
function isPalidrome(word) {
  // Caso a entrada não seja uma string, retorna 'Erro'.
  if (typeof word !== 'string') {
    return 'Erro';
  }
  //inicializando a variável index fora do escopo do loop, pois será usada na verificação fora.
  let index;
  // Estrutura de repetição para percorrer a string comparando cada letra das extremidades até o meio
  for (index = 0; index < word.length / 2; index += 1) {
    //Caso alguma letra na extremidade oposta seja diferente, saia do loop
    if (word[index] !== word[word.length - index - 1]) {
      break;
    }
  }
  // Se o loop chegou no seu fim sem sair, é porque a palavra é um palíndromo, então retorna "true"
  if (index === word.length / 2 || index === word.length / 2 + 0.5) {
    return true;
  }
  // Caso não seja palíndromo retorna "false"
  return false;
}

// Segunda função
/*  Função para retornar o índex do maior número de um array
*   Entrada: ([ Um array de números])
*   Saída: retorna o índex do maior número do array
*/
function higherNumber(array) {
  // caso seja um array vazio e não números, retorna 'Erro'
  if (array.length === 0 || typeof array[0] !== 'number') {
    return 'Erro';
  }
  // Inicializando uma variável com o menor número possível para guardar 
  //o maior número do array posteriormente
  let maiorNumber = -Infinity;
  // Estrutura de repetição para percorrer todo o array
  for (let index = 0; index < array.length; index += 1) {
    // Comparando o valor atual com o ultimo maior número guardado
    if (array[index] > maiorNumber) {
      maiorNumber = array[index];
    }
  }
  //retornando o índex do maior número
  return array.indexOf(maiorNumber);
}

// Terceira função
/*  Função para retornar o índex do menor número de um array
*   Entrada: ([ Um array de números])
*   Saída: retorna o índex do menor número do array
*/
function lowerNumber(array) {
  // caso seja um array vazio e não números, retorna 'Erro'
  if (array.length === 0 || typeof array[0] !== 'number') {
    return 'Erro';
  }
  // Inicializando uma variável com o maior número possível para guardar 
  //o menor número do array posteriormente
  let menorNumber = Infinity;
  // Estrutura de repetição para percorrer todo o array
  for (let index = 0; index < array.length; index += 1) {
    // Comparando o valor atual com o ultimo menor número guardado
    if (array[index] < menorNumber) {
      menorNumber = array[index];
    }
  }
  //retornando o índex do menor número
  return array.indexOf(menorNumber);
}
