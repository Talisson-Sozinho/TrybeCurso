const longestNamedBook = require('../src/exercise4');
const books = require('../src/books');

describe('Teste para o exercise4: ', () => {
  it('Verifica se a função encontra o livro com o maior nome', () => {
    const expectedResult = {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    };
    expect(longestNamedBook(books)).toEqual(expectedResult);
  });
});
