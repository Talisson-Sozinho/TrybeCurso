const authorWith3DotsOnName = require('../src/exercise7');

describe('Teste do exercise7: ', () => {
  it('Verifica se a função retorna o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais', () => {
    expect(authorWith3DotsOnName()).toBe('O Senhor dos Anéis');
  });
});
