const myFizzBuzz = require('./script');

describe('Teste da função myFizzBuzz', () => {
  it('Verifica se retorna "fizzbuzz" para caso o numero seja divisível por 3 e 5 ao mesmo tempo', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(45)).toBe('fizzbuzz');
  });

  it('Verificar se retorna "fizz" para caso o numero seja divisível apenas por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(12)).toBe('fizz');
    expect(myFizzBuzz(18)).toBe('fizz');
  });

  it('Verificar se retorna "buzz" para caso o numero seja divisível apenas por 3', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('Verificar se retorna o próprio numero para caso o numero não seja divisível nem por 3 nem por 5', () => {
    expect(myFizzBuzz(8)).toBe(8);
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz(44)).toBe(44);
  });

  it('Verificar se retorna "false" para caso o parâmetro não seja um número', () => {
    expect(myFizzBuzz('')).toBe(false);
    expect(myFizzBuzz()).toBe(false);
    expect(myFizzBuzz('TESTANDO ESSA PORRA')).toBe(false);
  });
  
});
