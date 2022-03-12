let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// função para o requisito 01
function imprimirFrase(moradores) {
  let nome = moradores.blocoDois[moradores.blocoDois.length - 1].nome;
  let sobrenome = moradores.blocoDois[moradores.blocoDois.length - 1].sobrenome;
  let andar = moradores.blocoDois[moradores.blocoDois.length - 1].andar;
  let apartamento = moradores.blocoDois[moradores.blocoDois.length - 1].apartamento;
  console.log(`O morador do bloco dois de nome ${nome} ${sobrenome} mora no ${andar}° andar, apartamento ${apartamento}`);
}

// função para o requisito 02
function imprimeInfoObjeto(moradores) {
  for ( let bloco in moradores ) {
    for ( let morador of moradores[bloco] ){
      console.log(`${morador.nome} ${morador.sobrenome}`);
    }
  }
}

imprimeInfoObjeto(moradores);