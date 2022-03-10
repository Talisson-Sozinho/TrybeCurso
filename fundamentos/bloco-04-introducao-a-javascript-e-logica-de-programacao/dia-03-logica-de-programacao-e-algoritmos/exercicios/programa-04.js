//Variável que guardará o maior número primo até um certo número
let maiorNumPrimo = null;
//Variável que guardará até qual número é para verificar 
const maiorNumPrimoAte = 10;

//Estrutura de repetição para contar de 1 até o numero de verificação
for (let numeroAtual = 1; numeroAtual <= maiorNumPrimoAte; numeroAtual += 1) {
  /*  Estrutura de repetição para verificar se é divisível por um número diferente
  * de 1 ou ele mesmo, já que se ele for divisível por qualquer outro número, ele já
  * será descartado de ser um número primo.
  *   O valor divisor máximo para que o resultado dê um número inteiro é a metade do
  * número, que o resultado seria 2.
  */
  for (let divisor = 1; divisor <= numeroAtual / 2 ; divisor += 1) {
    /*  já que os números primos são divisíveis por 1, tirando essa verificação e
    * caso o numero seja divisível por qualquer outro número, pare o laço de repetição
    * imediatamente, já que já foi descartado e vá para a próxima verificação.
    */
    if ( divisor !== 1 && numeroAtual % divisor === 0) {
      break;
    }
    /* Verificando se já chegou na última passagem do loop, para caso seja a última, é pq o se
    * número é primo, então é substituído o maior número primo anterior já que esse será maior.
    */ 
    if (divisor === numeroAtual / 2  || divisor === numeroAtual / 2 - 0.5) {
      maiorNumPrimo = numeroAtual;
    }
  }
}
// Mostrando o maior número primo, até o limiter definido, na tela
console.log(maiorNumPrimo);