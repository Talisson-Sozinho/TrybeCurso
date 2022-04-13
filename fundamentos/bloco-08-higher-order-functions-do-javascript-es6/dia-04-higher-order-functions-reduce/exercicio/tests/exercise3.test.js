const averageAge = require('../src/exercise3');
const books = require('../src/books');

describe('Teste para o exercise3: ', () => {
  it('Verifica se a função calcula a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados', () => {
    const expectedResult = 43;
    expect(averageAge(books)).toBe(expectedResult);
  });
});
