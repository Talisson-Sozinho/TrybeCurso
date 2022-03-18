const configureFontColor = document.querySelector('.input-font-color');
const configureFontSize = document.querySelector('.input-font-size');
const configureBackgroundColor = document.querySelector('.input-background-color');
const configureFontFamily = document.querySelector('.input-font-family');
const configureReset =  document.getElementsByClassName('.reset-config')[0];


let articleConfig = {
  fontColor: '#000000',
  fontSize: 16,
  BackgroundColor: '#e7e9ea',
  fontFamily: 'Fira Code',
};

function initialRender() {
  let oldConfig = localStorage.getItem('articleConfig');
  

  if (oldConfig === null){
    localStorage.setItem('articleConfig', JSON.stringify(articleConfig));
  } else {
    articleConfig = JSON.parse(oldConfig);

    configureFontColor.value = articleConfig.fontColor;
    document.querySelector('.article-container').style.color = articleConfig.fontColor;
    configureFontSize.value = articleConfig.fontSize;
    document.querySelector('.article-container').style.fontSize = articleConfig.fontSize +'px';
    configureBackgroundColor.value = articleConfig.BackgroundColor;
    document.querySelector('.article-container').style.backgroundColor = articleConfig.BackgroundColor;
    configureFontFamily.value = articleConfig.fontFamily;
    document.querySelector('.article-container').style.fontFamily = articleConfig.fontFamily;
  }
}

function adicionaConfigurationOnPage (){
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
adicionaConfigurationOnPage();

function adicionandoNoLocalStorage(newConfig) {
  localStorage.setItem('articleConfig', JSON.stringify(newConfig))
}

window.onload = () => {
  initialRender();
}