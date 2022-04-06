const { it } = require('@jest/globals');
const { myRemove } = require('./script');

describe('Teste da função "myRemove": ', () => {

  it('Verificando se a função está removendo o item do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verificando se a função não retorna o valor não esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verificando se a função retorna o valor esperado', () => {
    expect(myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4]);
  });
});
