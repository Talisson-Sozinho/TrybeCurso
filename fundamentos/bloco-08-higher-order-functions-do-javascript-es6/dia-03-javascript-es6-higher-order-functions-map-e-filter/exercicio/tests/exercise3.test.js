const fantasyOrScienceFiction = require('../src/exercise3');
const books = require('../src/template-library');

describe('Teste do exercise3: ', () => {
  it('Verifica se a função retorna um array com com todos os objetos que possuem gênero ficção científica ou fantasia', () => {
    const expectedResult = [
      { 
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
      }
    ];
    expect(fantasyOrScienceFiction(books, ['ficção científica', 'fantasia'])).toEqual(expectedResult);
  })
});
