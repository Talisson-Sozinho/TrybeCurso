const fantasyOrScienceFictionAuthors = require('../src/exercise5');
const books = require('../src/template-library');

describe('Teste do exercise5: ', () => {
  it('Verifica se a função retorna um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia', () => {
    const expectedResult = [
      'Frank Herbert',
      'George R. R. Martin',
      'Isaac Asimov',
      'J. R. R. Tolkien',
    ];
    expect(fantasyOrScienceFictionAuthors(books, ['ficção científica', 'fantasia'])).toEqual(expectedResult);
  });
});
