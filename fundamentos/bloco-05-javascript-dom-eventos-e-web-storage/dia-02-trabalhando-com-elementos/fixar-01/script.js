const achei = document.getElementById('elementoOndeVoceEsta');

paiElement = achei.parentElement;
paiElement.style.backgroundColor = 'red';

const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerHTML = 'aqui está o primeiro filho do filho'

const primeiroFilhoApartirDoPai = document.getElementById('pai').firstElementChild;

const primeiroFilhoApartirDoElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

const atention = document.getElementById('elementoOndeVoceEsta').nextSibling.textContent;

const terceiroFilho = achei.nextElementSibling;

const elementoPai = document.getElementById('pai').children;
console.log(elementoPai[2]);
