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
*   Saída: retorna o índex do maior número do array, ou 'Erro' caso a entrada não seja um array
*         de números ou vazia
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
*   Saída: retorna o índex do menor número do array, ou 'Erro' caso a entrada não seja um array
*         de números ou vazia
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

// Quarta função
/*  Função para retornar a maior palavra dado um array
*   Entrada: ([ Um array de strings])
*   Saída: A maior string do array, ou 'Erro' caso a entrada não seja um array
*         de strings ou vazia
*/
function biggestString(array) {
  // caso seja um array vazio e não string, retorna 'Erro'
  if (array.length === 0 || typeof array[0] !== 'string') {
    return 'Erro';
  }
  // Inicializando variável que sera guardada o index da maior palava
  let indexMaiorPalavra = 0;
  //  Estrutura de repetição para percorrer todo o array, menos a primeira posição, pois já será 
  // verificada na primeira passagem do loop, já que o indexMaiorPalavra foi inicializada com 0.
  for (let index = 1; index < array.length; index += 1) {
    // se a palavra atual for maior do que a que já tinha salvo o índex, é feita a troca
    if (array[index].length > array[indexMaiorPalavra].length) {
      indexMaiorPalavra = index;
    }
  }
  // Retornado a maior palavra do array
  return array[indexMaiorPalavra];
}

// Quinta função
/*  Função para retornar o número que mais se repete
*   Entrada: ([ Um array de números])
*   Saída: O número que mais se repete, ou 'Erro' caso a entrada não seja um array
*         de números ou vazia
*/
function findHighestRepetition(array) {
  // caso seja um array vazio e não números, retorna 'Erro'
  if (array.length === 0 || typeof array[0] !== 'number') {
    return 'Erro';
  }
  // criando um objeto que será guardado o número que mais se repetiu e quantas vezes ele repetiu
  let numberMostRepeats = {
    number: null,
    repeats: 0,
  }
  // Estrutura de repetição para percorrer todo o array de números
  for (let index = 0; index < array.length; index += 1) {
    // Verificando se não estou em um número que já está salvo como o que mais se repete
    if (array[index] !== numberMostRepeats.number) {
      // inicializando um contador que ira ser incrementado a cada repetição do número dentro do loop
      let countRepeat = 0;
      // loop que vai percorrer todo o array e incrementado o contador a cada repetição do número atual
      for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
        // verificando se está se repetindo
        if (array[index] === array[secondIndex]) {
          countRepeat += 1;
        }
      }
      // Após o loop, caso o número atual tenha mais repetição do que o que estava salvo antes, será substituído
      if (countRepeat > numberMostRepeats.repeats) {
        numberMostRepeats.number = array[index];
        numberMostRepeats.repeats = countRepeat;
      }
    }
  }
  // Retornado o número de maior repetição
  return numberMostRepeats.number;
}

// Sexta função
/*  Função para somar todo os números inteiros de 1 até um dado número
*   Entrada: (n),onde n é até qual número é pra fazer a soma 
*   Saída: a soma de 1 até n, ou NULL caso a entrada for inválida
*/
function sumNumbersUpTo(number) {
  // Retornando NULL para caso a entrada não for um número ou um numero não natural
  if (typeof number !== 'number' || number < 1) {
    return null;
  }
  // inicializando com 0, a variável que será guardada a soma
  sum = 0;
  // estrutura de repetição para contar de 1 até o número que foi pedido
  for (let index = 1; index <= number; index += 1) {
    // somando o número a cada passagem do loop
    sum += index;
  }
  // retornado a soma total
  return sum;
}

// Sétima função
/*  Função para dado uma string verificar se a segunda é o final da primeira
*   Entrada: ( word, word2 ), onde word é a palavra completa e word2 é a possível finalização da palavra
*   Saída: true para caso a a word2 seja o final da palavra e false para caso a word2 não 
*         seja o final da palavra
*/
function isEnding(word, ending) {
  // Inicializando variável auxiliar que vai receber o valor da string no formato de array e reverso
  // foi transformado em array para poder usar o método ".reverse()" de arrays, par que ficasse mais
  // fácil a verificação do final das duas palavras
  let wordReverse = word.split('').reverse();
  let endingReverse = ending.split('').reverse();
  // index inicializado fora do escopo do "for" para poder ser usado como verificação posteriormente.
  let index;
  //Estrutura de repetição para percorrer as duas palavras até o tamanho da palavra menor
  for (index = 0; index < endingReverse.length; index += 1) {
    // verificando se algum caractere é diferente, se for, irá parar o loop, pois já da pra se dizer
    // que as palavras terminam diferente
    if (endingReverse[index] !== wordReverse[index]) {
      break;
    }
  }
  // se o index chegou no tamanho da palavra é porque o loop foi completado, então retorna true 
  if (index === endingReverse.length) {
    return true;
  }
  // retorna false se o loop parou, pois encontrou uma letra diferente
  return false;
}
