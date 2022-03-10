// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let soma = 0;

for (let index = 1; index <= 50; index += 1) {
  soma += index;
}

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let count = 0;
for (let index = 1; index <= 250; index += 1) {
  if (index % 3 === 0) {
    contador += 1;
  }
}
if (count === 0) {
  console.log("mensagem secreta");
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "papel";
let player2 = "tesoura";

if (player1 === player2) {
  console.log("Empate");

} else if (player1 === "papel" && player2 === "tesoura") {
  console.log("Player 2 won");

} else if (player1 === "papel" && player2 === "pedra") {
  console.log("Player 1 won");

} else if (player1 === "pedra" && player2 === "tesoura") {
  console.log("Player 1 won");

} else if (player1 === "pedra" || player2 === "papel") {
  console.log("Player 2 won");

} else if (player1 === "tesoura" || player2 === "pedra") {
  console.log("Player 2 won");

} else if (player1 === "tesoura" || player2 === "papel") {
  console.log("Player 1 won");

}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
pessoaIdade = 17;

if ( pessoaIdade > 18 ){
  console.log("A pessoa é maior de idade");

} else {
  console.log("A pessoa é menor de idade");
}

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
let idadeManu = 21;
let idadeAna = 23;
let idadeRonald = 20;

if ( idadeManu < idadeAna && idadeManu < idadeRonald ){
  console.log("manu é a pessoa mais nova");

} else if ( idadeAna < idadeManu && idadeAna < idadeRonald  ){
  console.log("Ana é a pessoa mais nova");

} else {
  console.log("Ronald é a pessoa mais nova");
  
}
