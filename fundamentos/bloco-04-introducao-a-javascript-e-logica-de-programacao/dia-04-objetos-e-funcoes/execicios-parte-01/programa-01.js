let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// Comando 01
console.log(`Bem-vindo(a) ${info.personagem}`);

// Comando 02
info['recorrente'] = 'Sim';

// Comando 03
for ( let key in info ) {
  console.log(key);
}
