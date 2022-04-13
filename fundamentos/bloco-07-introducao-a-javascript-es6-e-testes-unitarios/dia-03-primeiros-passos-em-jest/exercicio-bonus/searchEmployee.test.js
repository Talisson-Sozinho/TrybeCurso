const searchEmployee = require('./searchEmployee');

describe('Teste da função "searchEmployee": ', ()=> {
  it('Verifica se a função foi definida.', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Verifica se a função retorna o funcionário esperado', () => {
    const resultExpect1 = {
      id: '8579-6',
      specialities: ['UX', 'Design'],
    };
    expect(searchEmployee('8579-6', 'specialities')).toEqual(resultExpect1);

    const resultExpect2 = {
      id: '9852-2-2',
      firstName: 'Jeff',
    };
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual(resultExpect2);

    const resultExpect3 = {
      id: '4678-2',
      lastName: 'Dodds',
    };
    expect(searchEmployee('4678-2', 'lastName')).toEqual(resultExpect3);
  });

  it('Verifica se caso não tenha o id não tenha sido encontrado, a função lança um erro', () => {
    expect(() => { searchEmployee('4543-69', 'firstName') }).toThrow();
  });

  it('Verifica a mensagem do erro é a esperada, caso o ID não tenha sido encontrado', () => {
    expect(() => { searchEmployee('4543-69', 'firstName') }).toThrowError( new Error('ID não identificada'));
  });

  it('Verifica se caso a informação que se quer acessar não exista, a função lança um erro', () => {
    expect(() => { searchEmployee('8579-6', 'name') }).toThrow();
  });

  it('Verifica a mensagem do erro é a esperada, caso a informação que se quer acessar não exista', () => {
    expect(() => { searchEmployee('4543-69', 'firstName') }).toThrowError( new Error('Informação indisponível'));
  });
});
