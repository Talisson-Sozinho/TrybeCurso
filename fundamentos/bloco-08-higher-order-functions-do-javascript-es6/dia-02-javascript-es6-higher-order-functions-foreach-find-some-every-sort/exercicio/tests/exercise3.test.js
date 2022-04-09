const getNamedBook = require('../src/exercise3');

describe('Teste para o exercício 03: ', () => {
  it('Verificar se a função "getNamedBook" retorna primeiro livro cujo nome possui 26 caracteres.', () => {
    const expectedResult = {
      author: {
        birthYear: 1948,
        name: 'George R. R. Martin',
      },
      genre: 'Fantasia',
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      releaseYear: 1991,
    };
    
    expect(getNamedBook()).toEqual(expectedResult);
  });
});
