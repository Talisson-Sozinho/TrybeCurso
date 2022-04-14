const authorBornIn1947 = require('../src/exercise1');

describe('Teste para o exercício 01: ', () => {
  it('Encontra a autora do livro escrito em 1947', () => {
    expect(authorBornIn1947()).toBe('Stephen King');
  });
});
