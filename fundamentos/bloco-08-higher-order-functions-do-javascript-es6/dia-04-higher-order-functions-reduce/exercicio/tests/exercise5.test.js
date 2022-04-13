const containsA = require('../src/exercise5');

describe('Teste para o exercise5: ', () => {
  it('Verifica se dado um array de nomes, a função retorna a quantidade de vezes em que aparecem uma determinada letra', () => {
    const names = [
      'Aanemarie', 'Adervandes', 'Akifusa',
      'Abegildo', 'Adicellia', 'Aladonata',
      'Abeladerco', 'Adieidy', 'Alarucha',
    ];
    const word = 'A';
    expect(containsA(names, word)).toBe(20);
  });
});
