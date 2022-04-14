const smallerName = require('../src/exercise2');

describe('Teste para o exercício 02: ', () => {
  it('Verificar se a função "smallerName" retorna o nome do menor livro.', () => {
    expect(smallerName()).toBe('Duna');
  });
});
