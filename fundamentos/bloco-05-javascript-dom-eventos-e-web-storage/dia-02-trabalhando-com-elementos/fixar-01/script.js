//// Requisitos da primeira parte comentados
/*
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
*/

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.id = 'irmaoelementoOndeVoceEsta';
document.getElementById('pai').appendChild(irmaoOndeVoceEsta);

const filhoDoOndeVoceEsta = document.createElement('div');
filhoDoOndeVoceEsta.id = 'adotado';
document.getElementById('elementoOndeVoceEsta').appendChild(filhoDoOndeVoceEsta);


