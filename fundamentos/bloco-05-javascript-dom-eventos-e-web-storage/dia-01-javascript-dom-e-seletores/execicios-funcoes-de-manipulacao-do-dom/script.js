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

function modificaBackgroundCenterContent (color) {
  const centerContent = document.getElementsByClassName('center-content');
  centerContent[0].style.backgroundColor = color;
}

modificaBackgroundCenterContent('white');

function modificaTituloPrincipal (novoTitulo) {
  const titulo = document.getElementsByClassName('title');
  titulo[0].innerHTML = novoTitulo;
}

modificaTituloPrincipal('To amando isso nmrl');

function transformToUpperCase (tag) {
  const texto = document.getElementsByTagName(tag);
  for (let index = 0; index < texto.length; index += 1){
    texto[index].style.textTransform = 'uppercase';
  }
}

transformToUpperCase('p');

function exibirTextos () {
  const textos = document.getElementsByTagName('p');
  for (let texto of textos){
    console.log(texto.innerText);
  }
}
exibirTextos();