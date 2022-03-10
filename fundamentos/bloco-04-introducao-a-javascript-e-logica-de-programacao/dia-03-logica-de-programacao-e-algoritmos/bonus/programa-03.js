let n = 5;

// Tirando a possibilidade de um número inválido
if (n > 1) {
  //primeira estrutura de repetição para definir o números de linhas que será exibido
  for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    //Para cada linha será inicializada uma string vazia
    let desenho = '';
    //Segunda estrutura de repetição para a adicionar espaço ou asterisco
    for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
      /*  Como o comando pede um triangulo retângulo invertida ao execício anterior
      * os asterisco só serão adicionado na coluna onde a soma da sua linha com a coluna
      * for igual ou maior ao número da linhas e colunas maior.
      *   Já que começa a contagem em 0, precisamos subtrair 1 no números de linhas e coluna
      */
      if ( (indexColuna + indexLinha) >= n - 1 ) {
        desenho += '*';

      } else {
        desenho += ' ';

      }
    }
    console.log(desenho);
  }
} else {
  console.log('Número inválido');
}