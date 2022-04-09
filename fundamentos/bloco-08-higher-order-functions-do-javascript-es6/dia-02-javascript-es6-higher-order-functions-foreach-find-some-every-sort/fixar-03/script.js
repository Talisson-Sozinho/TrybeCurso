// Requisito 01
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const result = arr.some( (value) => value.toLowerCase() === name.toLowerCase() );
  return result ? result : 'vish, não tem não amigão';
}

console.log(hasName(names, 'ana'))