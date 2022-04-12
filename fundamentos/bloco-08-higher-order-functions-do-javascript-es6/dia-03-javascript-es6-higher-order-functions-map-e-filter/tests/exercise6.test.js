const oldBooks = require('../src/exercise6');
const books = require('../src/template-library');

describe('Teste do exercise6: ', () => {
  it('Verifica se a função retorna um array com o nome de todos os livros com mais de 60 anos de publicação', () => {
    const expectedResult = [
      'O Senhor dos Anéis',
      'Fundação',
      'O Chamado de Cthulhu',
    ];
    expect(oldBooks(books, 60)).toEqual(expectedResult);
  });
});
