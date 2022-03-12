/*  Função que irá receber a string em algarismos romanos e retornará o valor em decimal.
*   Entrada: ( string com o algarismo romano)
*   Saída: valor em decimal ou 'Erro' caso seja um algarismo inválido
*/
function lerNumerosRomano(stringRomana) {
  // caso a stringRomana tenha apenas 1 algorismo, como é um caso fundamental,
  // irá retornar apenas o valor do algorismo
  if (stringRomana.length === 1) {
    return verificaNumeroRomano(stringRomana);
  }
  // Iniciando o valor que será retornado com 0, pois o algorismo romano será lido da esquerda 
  // para direita somando ou decrementando os valores fundamentais
  let valorDeciamal = 0;
  // Estrutura de repetição para percorrer toda a string
  for (let index = 0; index < stringRomana.length - 1; index += 1) {
    // Caso encontre algum algarismo inválido
    if (verificaNumeroRomano(stringRomana[index]) === null || verificaNumeroRomano(stringRomana[index + 1]) === null) {
      return 'Erro algarismo inválido';
    }
    // Caso o valor em decimal do algarismo atual seja menor que o próximo valor, o valor da total em 
    // decimal sera decrementado pelo valor em decimal do algarismo atual
    if (verificaNumeroRomano(stringRomana[index]) < verificaNumeroRomano(stringRomana[index + 1])) {
      valorDeciamal -= verificaNumeroRomano(stringRomana[index]);
      // Se não o valor é maior ou igual e será acrescentado no valor em decimal total
    } else {
      valorDeciamal += verificaNumeroRomano(stringRomana[index]);
    }
    // Caso o loop esteja no final, que será quando cegar no penúltimo algarismo romano, vamos 
    // somar o valor em decimal do ultimo algarismo
    if (index === stringRomana.length - 2) {
      valorDeciamal += verificaNumeroRomano(stringRomana[index + 1]);
    }
  }
  // Apos todo o processamento, a função retornará o valor em decimal de todo o algarismo romano
  return valorDeciamal;
}
/*  Função para verificar valor de algarismo romanos fundamentais.
*   Entrada: ( string com 1 caractere e que pertence a lista de algarismos fundamentais )
*   Saída: valor em decimal do algarismo fundamental e null para valores inválidos
*/
function verificaNumeroRomano(char) {
  // caso seja um tamanho diferente de 1, não é um algarismo fundamental, retorna null
  if (char.length !== 1) {
    return null;
  }
  // Objeto com os algarismo romanos fundamentais
  const numerosRomano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  // Percorrendo o objeto verificando se o algarismo passado por parâmetro é um algarismo fundamental
  // caso seja, já vai retornar o valor dele em decimal
  for (let algarismo in numerosRomano) {
    if (char === algarismo) {
      return numerosRomano[char];
    }
  }
  // Retornando null para caso não esteja no objeto de algarismo fundamental
  return null;
}

console.log(lerNumerosRomano('XI'));