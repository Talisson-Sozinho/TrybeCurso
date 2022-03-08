const salarioBruto = 3000;
let salarioBase, salarioMenosIR;

// erro para caso o salário bruto colocado for menor que 0.
if (salarioBruto < 0) {
  throw new Error("Salário inválido");
}

//calculo para o descontar o INSS
if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - salarioBruto * 0.08;

} else if (salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - salarioBruto * 0.09;

} else if (salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - salarioBruto * 0.11;

} else {
  salarioBase = salarioBruto - 570.88;

}

//calculo para descontar o IR
if (salarioBase < 1903.98) {
  salarioMenosIR = salarioBase;

} else if (salarioBase < 2826.65) {
  salarioMenosIR = salarioBase - (salarioBase * 0.075 - 142.80);

} else if (salarioBase < 3751.05) {
  salarioMenosIR = salarioBase - (salarioBase * 0.15 - 354.80);

} else if (salarioBase < 4664.68) {
  salarioMenosIR = salarioBase - (salarioBase * 0.225 - 636.13);

}else {
  salarioMenosIR = salarioBase - (salarioBase * 0.275 - 869.36);
}

const salarioLiquido = salarioMenosIR;

//mostrar o resultado no console 
console.log(salarioLiquido);