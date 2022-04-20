const uppercase = require('./exercise5');

describe('teste para o exercício 5', () => {
  it('verifica a chamada da função callback que transforma a string em maiúsculo', (done) => {
    uppercase('caralho', (str) => {
      try {
        expect(str).toBe('CARALHO');
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});