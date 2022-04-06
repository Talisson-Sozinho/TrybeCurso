const {sum} = require('./sum');

describe('Testando a função sum', () => {

  it('Verificando se dado 4 e 5 de parâmetro a função retorna: 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('Verificando se dado 0 e 0 de parâmetro a função retorna: 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('Verificando se dado um dos parâmetro não seja um número, a função lança um erro', () => {
    expect(() => sum(4,'5')).toThrow();
    expect(() => sum('4',5)).toThrow();
  });

  it('Verificando se dado um dos parâmetro não seja um número, a mensagem retornada é "parameters must be numbers" ', () => {
    expect(() => sum(4,'5')).toThrowError( new Error('parameters must be numbers'));
    expect(() => sum('4',5)).toThrowError( new Error('parameters must be numbers'));
  });

});
