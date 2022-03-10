let n = 7;

// Tirando a possibilidade de um número inválido
if (n > 1 && n % 2 === 1) {
  //primeira estrutura de repetição para definir o números de linhas que será exibido
  for (let indexLinha = 0; indexLinha < n / 2; indexLinha += 1) {
    //Para cada linha será inicializada uma string vazia
    let desenho = '';
    //Segunda estrutura de repetição para a adicionar espaço ou asterisco
    for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
      // colocando espaço envolta da pirâmide
      if (indexColuna < (n - 1) / 2 - indexLinha || indexColuna > (n - 1) / 2 + indexLinha) {
        desenho += ' ';

      //colocando espaço dentro da pirâmide e verificando se a linha não é a última
      } else if ((indexColuna > (n - 1) / 2 - indexLinha) && (indexColuna < (n - 1) / 2 + indexLinha) && (indexLinha !== n/2-0.5)) {
        desenho += ' ';

      } else {
        desenho += '*';

      }
    }
    console.log(desenho);
  }
} else {
  console.log('Número inválido');
}