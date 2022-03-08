const [valorCusto, valorVenda] = [50.00, 65.00];

//Erro caso alguns dos valores sejam menores que 0.
if (valorCusto < 0 || valorVenda < 0) {
  throw new Error("Valores inválidos");
}

// adicional de 20% de imposto sobre o valor de custo base.
const lucroPorProduto = valorVenda - valorCusto * 1.2;

//lucro na venda de 1000 produtos.
const lucroTotal = lucroPorProduto * 1000;

console.log(lucroTotal);