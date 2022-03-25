# para fixar 02 - prevent default

```html 
  <a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
```
Esse código gera um elemento clicável que redireciona a pessoa usuária para o site da Trybe. O atributo target="_blank" indica que o comportamento do elemento é abrir o link em outra aba do navegador.
```html 
  <input type="text" id="input-text"/>
```
Esse código gera uma caixa de input de texto. O comportamento desse elemento é capturar o(s) caractere(s) digitado(s) pela pessoa usuária e exibi-lo(s) dentro da caixa de texto, alterando o atributo "value" do input de acordo com o que é digitado.
```html 
  <input type="checkbox" id="input-checkbox" />
```
Esse código gera um caixinha de input do tipo checkbox. O comportamento desse elemento é escutar o clique da pessoa usuária e marcar ou desmarcar a caixinha.

## o que fazer

   - Crie um arquivo HTML index.html
   - Crie um arquivo Javascript script.js
   - Em seu arquivo HTML
   - Adicione o `<script src="script.js"></script>` no final do body do HTML
   - Copie os três elementos acima ( a , input type="text" , checkbox ) em sua página
   - Em seu arquivo Javascript
   - Adicione os seletores abaixo no começo do arquivo

  ```js
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
  ```
  [x] -  Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o 
  método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, 
  nada deve acontecer.

  [x] - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do 
  evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou 
  seja, ao clicar na caixinha, nada deve acontecer.

  [x] - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função 
  do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' 
  minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key )
