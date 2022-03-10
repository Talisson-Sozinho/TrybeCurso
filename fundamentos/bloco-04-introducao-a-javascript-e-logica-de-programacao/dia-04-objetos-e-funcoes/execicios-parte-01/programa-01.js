//Objeto Base
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// Novo objeto seguindo o comando 05
let novaInfo = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

// Comando 01
console.log(`Bem-vindo(a) ${info.personagem}`);

// Comando 02
info['recorrente'] = 'Sim';

// Comando 03
for ( let key in info ) {
  console.log(key);
}

// Comando 04
for ( let key in info){
  console.log(info[key]);
}

for ( let key in info ) {
  if ( key === 'recorrente' && info[key] === novaInfo[key]){
    console.log("Ambos recorrente");
  }else {
    console.log(`${info[key]} e ${novaInfo[key]}`)
  }
}
