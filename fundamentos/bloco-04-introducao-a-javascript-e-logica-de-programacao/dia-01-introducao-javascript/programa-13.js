const [num1, num2, num3] = [2, 6, 3];

/* Caso o resto da divisão por 2 for 1, é pq o número é ímpar, e como o numero 1 é um valor "truthy"
* a negação é um valor false, só que queremos o valor "true" então invertemos novamente com o operador
* de negação novamente. 
*/
const hasOdds = !(!(num1 % 2 || num2 % 2 || num3 % 2));

console.log(hasOdds);
