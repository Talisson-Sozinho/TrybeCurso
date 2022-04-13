const { encode, decode } = require('./script');

describe('Teste da função encode', () => {
  it('Verifica se encode é função', ()=> {
    expect(typeof encode).toBe('function');
  });

  it('Verifica se encode retorna "1 2 3 4 5" dado "a e i o u"', ()=> {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });

  it('Verifica se as demais letras/números não são convertidas', ()=> {
    expect(encode('testando essa bagaça')).toBe('t2st1nd4 2ss1 b1g1ç1');
  });

  it('Verifica se a string que é retornada, têm o mesmo número de caracteres que a string passada como parâmetro', ()=> {
    expect(encode('testando essa bagaça').length).toBe(20);
  });
});

describe('Teste da função decode', () => {
  it('Verifica se decode é função', ()=> {
    expect(typeof decode).toBe('function');
  });

  it('Verifica se decode retorna "a e i o u" dado "1 2 3 4 5"', ()=> {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });

  it('Verifica se as demais letras/números não são convertidas', ()=> {
    expect(decode('t2st1nd4 2ss1 b1g1ç1')).toBe('testando essa bagaça');
  });

  it('Verifica se a string que é retornada, têm o mesmo número de caracteres que a string passada como parâmetro', ()=> {
    expect(decode('t2st1nd4 2ss1 b1g1ç1').length).toBe(20);
  });
});