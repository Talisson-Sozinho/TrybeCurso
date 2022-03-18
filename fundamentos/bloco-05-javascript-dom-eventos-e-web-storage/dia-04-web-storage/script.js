/* Pegando Elementos do HTML importantes para os scripts e salvando em constantes para facilitar a utilização*/
const configureFontColor = document.querySelector('.input-font-color');
const configureFontSize = document.querySelector('.input-font-size');
const configureBackgroundColor = document.querySelector('.input-background-color');
const configureFontFamily = document.querySelector('.input-font-family');
const configureReset =  document.getElementsByClassName('.reset-config')[0];

/* Obejetos com a configuração original da pagina */
let articleConfig = {
  fontColor: '#000000',
  fontSize: 16,
  BackgroundColor: '#e7e9ea',
  fontFamily: 'Fira Code',
};

/* Chamando a função que irá colocar as configurações antigas da pessoa, na página caso tenha */
initialRender();

/* Chamando a função que irá habilitar a modificação de configuração de texto do artigo */
adicionaInteractiveConfigurationOnPage();

// função que irá colocar as configurações antigas da pessoa, na página caso tenha
function initialRender() {
  const oldConfig = localStorage.getItem('articleConfig');
  if (oldConfig !== null){
    articleConfig = JSON.parse(oldConfig);
    applyOldConfig(articleConfig);
  }
}

// função para aplicar um obejeto de configuração no artigo
function applyOldConfig(oldConfigObject){
  configureFontColor.value = oldConfigObject.fontColor;
  document.querySelector('.article-container').style.color = oldConfigObject.fontColor;
  configureFontSize.value = oldConfigObject.fontSize;
  document.querySelector('.article-container').style.fontSize = oldConfigObject.fontSize +'px';
  configureBackgroundColor.value = oldConfigObject.BackgroundColor;
  document.querySelector('.article-container').style.backgroundColor = oldConfigObject.BackgroundColor;
  configureFontFamily.value = oldConfigObject.fontFamily;
  document.querySelector('.article-container').style.fontFamily = oldConfigObject.fontFamily;
}

// função para adicionar os escutadores de eventos nos elementos interativos
function adicionaInteractiveConfigurationOnPage (){
  configureFontColor.addEventListener('input', ()=>{
    const newFontColor = configureFontColor.value;
    document.querySelector('.article-container').style.color = newFontColor;
    articleConfig.fontColor = newFontColor;
    adicionandoNoLocalStorage(articleConfig);
  });

  configureFontSize.addEventListener('input', ()=>{
    const newFontSize = configureFontSize.value;
    document.querySelector('.article-container').style.fontSize = newFontSize + 'px';
    articleConfig.fontSize = newFontSize;
    adicionandoNoLocalStorage(articleConfig);
  });

  configureBackgroundColor.addEventListener('input', ()=>{
    const newBackgroundColor = configureBackgroundColor.value;
    document.querySelector('.article-container').style.backgroundColor = newBackgroundColor;
    articleConfig.BackgroundColor = newBackgroundColor;
    adicionandoNoLocalStorage(articleConfig);
  });

  configureFontFamily.addEventListener('input', ()=>{
    const newFontFamily = configureFontFamily.value;
    document.querySelector('.article-container').style.fontFamily = newFontFamily;
    articleConfig.fontFamily = newFontFamily;
    adicionandoNoLocalStorage(articleConfig);
  })
  
  configureReset.addEventListener('click', ()=>{
    configureFontColor.value = '#000000';
    document.querySelector('.article-container').style.color = '#000000';
    articleConfig.fontColor = '#000000';
    configureFontSize.value = 16;
    document.querySelector('.article-container').style.fontSize = 16 +'px';
    articleConfig.fontSize = 16;
    configureBackgroundColor.value = '#e7e9ea';
    document.querySelector('.article-container').style.backgroundColor = '#e7e9ea';
    articleConfig.BackgroundColor = '#e7e9ea';
    configureFontFamily.value = 'Fira Code';
    document.querySelector('.article-container').style.fontFamily = 'Fira Code';
    articleConfig.fontFamily = 'Fira Code';
    adicionandoNoLocalStorage(articleConfig);
  })
}

// função para adicionar o objeto de configuração no localStorage
function adicionandoNoLocalStorage(newConfig) {
  localStorage.setItem('articleConfig', JSON.stringify(newConfig))
}
