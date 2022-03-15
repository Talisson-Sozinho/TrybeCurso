/*  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
 *  - document.getElementById()
 *  - document.getElementsByClassName()
 *  - document.getElementsByTagName()
 */

function modificarDoTexto(novoTexto) {
  const textoPrincipal = document.getElementsByClassName('center-content');
  textoPrincipal[0].firstElementChild.innerHTML = novoTexto;
}

modificarDoTexto('vejo-me trabalhando em uma empresa que combine comigo e meus ideais para o mundo');

function modificaBackground (color) {
  const mainContent = document.getElementsByClassName('main-content');
  mainContent[0].style.backgroundColor = color;
}

modificaBackground('rgb(76,164,109)');