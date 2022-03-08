const [num1, num2, num3] = [8, 3, 9];

/* caso o resto da divisão por 2 for 0, o número é par, como o 0 é um valor "falsy", ao colocar
*   o operador de negação, ira trocar para "true", então a operação boleana vai retornar "true"
*   já que o operador é "or".
*/
const hasEvens = !(num1 % 2) || !(num2 % 2) || !(num3 % 2);

console.log(hasEvens);
