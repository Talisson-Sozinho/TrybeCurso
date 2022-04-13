const studentAverage = require('../src/exercise6');

describe('Teste para o exercise6: ', () => {
  it('Verifica se dado dois array de dados relacionados, a função retorna um objeto com os dados pedido', () => {
    const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
    const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

    const expected = [
      { name: 'Pedro Henrique', average: 7.8 },
      { name: 'Miguel', average: 9.2 },
      { name: 'Maria Clara', average: 8.8 },
    ];
    expect(studentAverage(students, grades)).toEqual(expected);
  });
});
