const configureFontColor = document.querySelector('.input-font-color');
const configureFontSize = document.querySelector('.input-font-size');
const configureBackgroundColor = document.querySelector('.input-background-color');
const configureFontFamily = document.querySelector('.input-font-family');

function adicionaConfigurationOnPage (){
  configureFontColor.addEventListener('input', ()=>{
    const newFontColor = configureFontColor.value;
    document.querySelector('.article-container').style.color = newFontColor;
  });

  configureFontSize.addEventListener('input', ()=>{
    const newFontSize = configureFontSize.value;
    document.querySelector('.article-container').style.fontSize = newFontSize + 'px';
  });

  configureBackgroundColor.addEventListener('input', ()=>{
    const newBackgroundColor = configureBackgroundColor.value;
    document.querySelector('.article-container').style.backgroundColor = newBackgroundColor;
  });

  configureFontFamily.addEventListener('input', ()=>{
    const newFontFamily = configureFontFamily.value;
    document.querySelector('.article-container').style.fontFamily = newFontFamily;
  })

}
adicionaConfigurationOnPage();