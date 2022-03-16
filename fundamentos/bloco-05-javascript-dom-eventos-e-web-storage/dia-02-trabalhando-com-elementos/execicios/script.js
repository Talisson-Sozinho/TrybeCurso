// Comando 01
const tagH1 = document.createElement('h1');
const tagBody = document.getElementsByTagName('body')[0];
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
tagBody.appendChild(tagH1);

// Comando 02
const tagMain = document.createElement('main');
tagMain.className = 'main-content';
tagBody.appendChild(tagMain);

// Comando 03
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
tagMain.appendChild(centerContent);
