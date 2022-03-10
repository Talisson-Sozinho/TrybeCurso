// Primeira função
/*  Entrada: ( 'Qualquer string' );
*   Saída: true para caso a string seja um palíndromo ou false caso não seja
*         um palíndromo, ou 'Erro' caso a entrada não seja uma string
*/
function isPalidrome(word) {
  // Caso a entrada não seja uma string, retorna 'Erro'.
  if (typeof word !== 'string') {
    return 'Erro'
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
 