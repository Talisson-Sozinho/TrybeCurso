// Comando 01
const tagH1 = document.createElement("h1");
const tagBody = document.getElementsByTagName("body")[0];
tagH1.innerText = "Exercício 5.2 - JavaScript DOM";
tagBody.appendChild(tagH1);

// Comando 02
const tagMain = document.createElement("main");
tagMain.className = "main-content";
tagBody.appendChild(tagMain);

// Comando 03
const centerContent = document.createElement("section");
centerContent.className = "center-content";
tagMain.appendChild(centerContent);

// Comando 04
const textCenterContent = document.createElement("p");
textCenterContent.innerText = "Tenho que ir dormir logo";
centerContent.appendChild(textCenterContent);

// Comando 05
const leftContent = document.createElement("section");
leftContent.className = "left-content";
tagMain.appendChild(leftContent);

// Comando 06
const rightContent = document.createElement("section");
rightContent.className = "right-content";
tagMain.appendChild(rightContent);

// Comando 07
const leftSmallImage = document.createElement("img");
leftSmallImage.setAttribute("src", "https://picsum.photos/200");
leftSmallImage.className = "small-image";
leftContent.appendChild(leftSmallImage);

// Comando 08
const listaDeNumeroPorExtenso = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

const listNaoOrdenada = document.createElement("ul");
rightContent.appendChild(listNaoOrdenada);
for ( let numero of listaDeNumeroPorExtenso){
  const listItem = document.createElement("li");
  listItem.innerText = numero;
  listNaoOrdenada.appendChild(listItem);
}
