function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Comando 01
function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.getElementById("days");
  for (let day of dezDaysList) {
    const dayListItem = document.createElement("li");
    dayListItem.innerText = day;
    dayListItem.className = "day";
    if (day === 25 || day === 31 || day === 24) {
      dayListItem.className += " holiday";
    }
    if (day === 4 || day === 11 || day === 18 || day === 25)
      dayListItem.className += " friday";
    daysList.appendChild(dayListItem);
  }
}

createDays();

// Comando 02
function adicionaButtonHoliday(string) {
  const button = document.createElement("button");
  button.innerText = string;
  button.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(button);
}

adicionaButtonHoliday("Feriados");

// Comando 03
function adicionaListenerOnButton() {
  const btnFeriado = document.getElementById("btn-holiday");
  btnFeriado.addEventListener("click", () => {
    const holidayDates = document.getElementsByClassName("holiday");
    for (let holidayDate of holidayDates) {
      if (holidayDate.style.backgroundColor === "green") {
        holidayDate.style.backgroundColor = "rgb(238,238,238)";
        holidayDate.style.color = "#666";
      } else {
        holidayDate.style.backgroundColor = "green";
        holidayDate.style.color = "rgb(238,238,238)";
      }
    }
  });
}

adicionaListenerOnButton();

// Comando 04
function adicionaButtonFriday(string) {
  const button = document.createElement("button");
  button.innerText = string;
  button.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(button);
}

adicionaButtonFriday("Sexta-feira");

// Comando 05
function adicionaListenerOnButtonFriday() {
  const btnfriday = document.getElementById("btn-friday");
  btnfriday.addEventListener("click", () => {
    const fridayDates = document.getElementsByClassName("friday");
    const arrayOfDaysFriday = [4, 11, 18, 25];
    for (let index = 0; index < fridayDates.length; index += 1) {
      if (fridayDates[index].innerHTML === "Sexta feira") {
        fridayDates[index].innerHTML = arrayOfDaysFriday[index];
      } else {
        fridayDates[index].innerHTML = "Sexta feira";
      }
    }
  });
}

adicionaListenerOnButtonFriday();

// Comando 06
function adicionaEffectZoom() {
  const days = document.getElementsByClassName("day");
  for (let day of days) {
    day.addEventListener("mouseover", (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.border = '1px dashed green'
      event.target.style.fontWeight = 'bold';
    });
    day.addEventListener("mouseout", (event) => {
      event.target.style.fontSize = '';
      event.target.style.border = ''
      event.target.style.fontWeight = ''
    });
  }
}
adicionaEffectZoom();

// Comando 07
function adicionandoTarefa(string){
  const textoEmSpan = document.createElement('span');
  textoEmSpan.innerHTML = string;
  const paiElement = document.querySelector('.my-tasks');
  paiElement.appendChild(textoEmSpan);
}

// Comando 08
function adicionaLegendCor(cor){
  const legendCor = document.createElement('div');
  legendCor.className = 'task';
  legendCor.style.backgroundColor = cor;
  const paiElement = document.querySelector('.my-tasks');
  paiElement.appendChild(legendCor);
}
adicionandoTarefa('Projeto');
adicionaLegendCor('green');

// Comando 09
function selecionarTask(){
  const taskColection = document.getElementsByClassName('task');
  for ( let task of taskColection){
    task.addEventListener('click', () => {
      if (task.className === 'task'){
        task.style.border = '3px dashed red'
        task.className += ' selected';
      } else {
        task.className = 'task';
        task.style.border = '';
      }
    });
  }
}
selecionarTask();

// Comando 10
function adicionaCorNoDia() {
  const collectionOfDays = document.getElementsByClassName('day');


  for ( let day of collectionOfDays ){
    day.addEventListener('click', () =>{
      if ( document.querySelector('.selected') !== null ){
        if (day.children.length === 0){
          const marked = document.createElement('span');
          marked.style.display = 'inline-block';
          marked.style.height = '10px';
          marked.style.width = '10px';
          marked.style.position = 'absolute';
          marked.style.top = '10px';
          marked.style.left =  '10px';
          marked.style.zIndex = '99';
          marked.style.borderRadius = '20px';
          const cor = document.querySelector('.selected').style.backgroundColor;
          marked.style.backgroundColor = cor;
          day.appendChild(marked);
        } else { 
          day.children[0].remove();
        }
      } else {
        alert('Não tem nenhuma tarefa selecionada');
      }
    })
  }
}
adicionaCorNoDia();

// Comando Bônus
function adicionaTaskNaTaskList(){
  document.getElementById('task-input').addEventListener('keyup',(event) => {
    if (event.key === 'Enter'){
      adicionaTextoTaskListNaLista(); 
    }
  });
  document.getElementById('btn-add').addEventListener('click',adicionaTextoTaskListNaLista);
}
adicionaTaskNaTaskList();

function adicionaTextoTaskListNaLista(){
  const inputTexto = document.getElementById('task-input');
  if ( inputTexto.value === ''){
    alert('ADICIONAR');
  } else{
    const taskHtmlList = document.querySelector('.task-list');
    const novoItemDaLista = document.createElement('li');
    novoItemDaLista.innerText = inputTexto.value;
    taskHtmlList.appendChild(novoItemDaLista);
    inputTexto.value = '';
  }
}
