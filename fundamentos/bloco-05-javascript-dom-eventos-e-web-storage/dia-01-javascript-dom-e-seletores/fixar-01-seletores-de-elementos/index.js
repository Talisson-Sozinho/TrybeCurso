const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const titulo = document.getElementById("page-title");
titulo.innerHTML = 'Harry potter';

const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerHTML = 'Estou alterando o segundo parágrafo pelo javascript'

const subTitle = document.getElementById('subtitle');
subTitle.innerHTML = 'TUDO PELO JAVASCRIPT';

const paragraphs = document.getElementsByClassName('paragraphText');
paragraphs[0].style.backgroundColor = 'blue';

document.getElementsByTagName('h4')[0].style.color = 'green';