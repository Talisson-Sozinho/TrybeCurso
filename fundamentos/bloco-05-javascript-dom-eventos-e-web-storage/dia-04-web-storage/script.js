/* Pegando Elementos do HTML importantes para os scripts e salvando em constantes para facilitar a utilização*/
const configureFontColor = document.querySelector('.input-font-color');
const configureFontSize = document.querySelector('.input-font-size');
const configureBackgroundColor = document.querySelector('.input-background-color');
const configureFontFamily = document.querySelector('.input-font-family');
const configureReset =  document.getElementsByClassName('.reset-config')[0];

/* Obejetos com a configuração original da pagina */

/* Chamando a função que irá colocar as configurações antigas da pessoa, na página caso tenha */
initialRender();

/* Chamando a função que irá habilitar a modificação de configuração de texto do artigo */
adicionaInteractiveConfigurationOnPage();

// função que irá colocar as configurações antigas da pessoa, na página caso tenha
function initialRender() {
  const oldConfig = localStorage.getItem('articleConfig');
  if (oldConfig !== null){
    const articleConfig = JSON.parse(oldConfig);
    applyOldConfig(articleConfig);
  } else {
    const  articleConfig = {
      fontColor: '#000000',
      fontSize: 16,
      backgroundColor: '#e7e9ea',
      fontFamily: 'Fira code',
    };
    localStorage.setItem('articleConfig', articleConfig);
  }
}

// função para aplicar um obejeto de configuração no artigo
function applyOldConfig(oldConfigObject){
  configureFontColor.value = oldConfigObject.fontColor;
  document.querySelector('.article-container').style.color = oldConfigObject.fontColor;
  configureFontSize.value = oldConfigObject.fontSize;
  document.querySelector('.article-container').style.fontSize = oldConfigObject.fontSize +'px';
  configureBackgroundColor.value = oldConfigObject.backgroundColor;
  document.querySelector('.article-container').style.backgroundColor = oldConfigObject.backgroundColor;
  configureFontFamily.value = oldConfigObject.fontFamily;
  document.querySelector('.article-container').style.fontFamily = oldConfigObject.fontFamily;
}

// função para adicionar os escutadores de eventos nos elementos interativos
function adicionaInteractiveConfigurationOnPage (){
  configureFontColor.addEventListener('input', () => modTextColor(configureFontColor.value));

  configureFontSize.addEventListener('input', ()=> modFontSize(configureFontSize.value));

  configureBackgroundColor.addEventListener('input', ()=> modBackgroundColor(configureBackgroundColor.value));

  configureFontFamily.addEventListener('input', ()=> modFontFamily(configureFontFamily.value));
  
  configureReset.addEventListener('click', reset)
}

// função para adicionar o objeto de configuração no localStorage
function adicionandoNoLocalStorage(chave, newConfig) {
  const objectOfConfig = JSON.parse(localStorage.getItem('articleConfig'))
  objectOfConfig[chave] = newConfig;
  localStorage.setItem('articleConfig', JSON.stringify(objectOfConfig))
}

/* Funções para a modificação no artigo */

// função para modificar cor do texto
function modTextColor (newColor){
  document.querySelector('.article-container').style.color = newColor;
  adicionandoNoLocalStorage('fontColor', newColor);
}

// função para modificar o tamanho da fonte
function modFontSize (newFontSize){
  document.querySelector('.article-container').style.fontSize = newFontSize + 'px';
  adicionandoNoLocalStorage('fontSize', newFontSize);
}

// função para modificar o cor do background
function modBackgroundColor(newBackgroundColor){
  document.querySelector('.article-container').style.backgroundColor = newBackgroundColor;
  adicionandoNoLocalStorage('backgroundColor', newBackgroundColor);
}

// função para modificar a fontfamily
function modFontFamily(newFontFamily){
  document.querySelector('.article-container').style.fontFamily = newFontFamily;
  adicionandoNoLocalStorage('fontFamily', newFontFamily);
}

// função para resetar as configurações para a config inicial
function reset () {
  configureFontColor.value = '#000000';
  document.querySelector('.article-container').style.color = '#000000';
  adicionandoNoLocalStorage( 'fontColor', '#000000');

  configureFontSize.value = 16;
  document.querySelector('.article-container').style.fontSize = 16 +'px';
  adicionandoNoLocalStorage( 'fontSize', 16);

  configureBackgroundColor.value = '#e7e9ea';
  document.querySelector('.article-container').style.backgroundColor = '#e7e9ea';
  adicionandoNoLocalStorage( 'backgroundColor', '#e7e9ea');

  configureFontFamily.value = 'Fira code';
  document.querySelector('.article-container').style.fontFamily = 'Fira code';
  adicionandoNoLocalStorage( 'fontFamily', 'Fira code');

  
}