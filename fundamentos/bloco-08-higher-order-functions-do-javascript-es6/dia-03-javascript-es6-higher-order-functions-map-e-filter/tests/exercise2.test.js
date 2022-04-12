const nameAndAge = require("../src/exercise2");
const books = require("../src/template-library");

describe("Teste do exercise2: ", () => {
  it('verifica se a função retorna um objeto com a idade e o nome do autor em ordem crescente de idade', () => {
    const expectedResult = [
      { age: 31, author: "Isaac Asimov" },
      { age: 38, author: "H. P. Lovecraft" },
      { age: 39, author: "Stephen King" },
      { age: 43, author: "George R. R. Martin" },
      { age: 45, author: "Frank Herbert" },
      { age: 62, author: "J. R. R. Tolkien" },
    ];
    expect(nameAndAge(books)).toEqual(expectedResult);
  });
});
