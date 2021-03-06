const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
/* Resposta: É que nele esta adicionado a classe .tech */

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', destacaTech);
secondLi.addEventListener('click', destacaTech);
thirdLi.addEventListener('click', destacaTech);

function destacaTech(event){
  if (event.target.className === 'tech'){
    event.target.className = '';
  }else {
    const elementoIrmao = event.target.parentElement.children;
    for (let index = 0; index < elementoIrmao.length; index += 1){
      elementoIrmao[index].className = '';
    }
    event.target.className = 'tech';
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', inserirTexto);

function inserirTexto(event) {
  const ondeInserir = document.querySelector('.tech');
  ondeInserir.innerHTML = event.target.value;
  console.log(event)
  if (event.keyCode === 13) {
    event.target.value = '';
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', () => window.open("https://github.com/Talisson-Sozinho"));

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', () =>  {
  const corAleatoria = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  myWebpage.style.color = corAleatoria;
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.