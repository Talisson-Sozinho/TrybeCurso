let n = 10;

// Tirando a possibilidade de um número inválido
if (n > 1) {
  //primeira estrutura de repetição para definir o números de linhas que será exibido
  //Usando o Operador ternário para comparar se é ímpar ou par, por conta do topo da pirâmide
  let tamanhoPiramide = (n % 2 === 1 ) ? (n/2) : (n/2 + 1);

  for (let indexLinha = 0; indexLinha < tamanhoPiramide; indexLinha += 1) {
    //Para cada linha será inicializada uma string vazia
    let desenho = '';
    //Segunda estrutura de repetição para a adicionar espaço ou asterisco
    for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
      // colocando espaço envolta da pirâmide
      if( indexColuna < (n-1)/2 - indexLinha || indexColuna > (n-1)/2 + indexLinha ){
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