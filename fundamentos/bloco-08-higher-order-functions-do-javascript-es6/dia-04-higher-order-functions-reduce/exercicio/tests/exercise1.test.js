const flatten = require('../src/exercise1');

describe('Teste para o exercise1: ', () => {
  it('Verifica se a função retorna apenas um array do uma matriz: ', () => {
    const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
    const expectedResult = ['1', '2', '3', true, 4, 5, 6];
    
    expect(flatten(arrays)).toEqual(expectedResult);
  });
});
