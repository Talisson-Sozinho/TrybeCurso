const formatedBookNames = require('../src/exercise1');
const books = require('../src/template-library');

describe('Teste do exercise1: ', () => {
  it('Verifica se a função "formatedBookNames" cria um novo array com o conteúdo formatado', () => {
    const expectedResult = [
      'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
      'Fundação - Ficção Científica - Isaac Asimov',
      'Duna - Ficção Científica - Frank Herbert',
      'A Coisa - Terror - Stephen King',
      'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
    ];
    expect(formatedBookNames(books)).toEqual(expectedResult);
  });
});
