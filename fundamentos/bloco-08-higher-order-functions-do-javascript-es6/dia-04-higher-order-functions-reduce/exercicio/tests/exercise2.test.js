const reduceNames = require('../src/exercise2');
const books = require('../src/books');

describe('Teste para o exercise2: ', () => {
  it('Verifica se a função retorna uma string com os nomes de todas as pessoas autoras', () => {
    const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
    expect(reduceNames(books)).toBe(expectedResult);
  });
});
