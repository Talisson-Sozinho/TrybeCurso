const someBookWasReleaseOnThe80s = require("../src/exercise6");

describe("Teste para o exercício 06: ", () => {
  it('Verificar se a função "someBookWasReleaseOnThe80s" retorna true, se algum livro foi lançado na década de 80.', () => {
    const booksForToBeTrue = [
      {
        id: 1,
        name: "As Crônicas de Gelo e Fogo",
        genre: "Fantasia",
        author: {
          name: "George R. R. Martin",
          birthYear: 1948,
        },
        releaseYear: 1991,
      },
      {
        id: 2,
        name: "O Senhor dos Anéis",
        genre: "Fantasia",
        author: {
          name: "J. R. R. Tolkien",
          birthYear: 1892,
        },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: "Fundação",
        genre: "Ficção Científica",
        author: {
          name: "Isaac Asimov",
          birthYear: 1920,
        },
        releaseYear: 1951,
      },
      {
        id: 4,
        name: "Duna",
        genre: "Ficção Científica",
        author: {
          name: "Frank Herbert",
          birthYear: 1920,
        },
        releaseYear: 1965,
      },
      {
        id: 5,
        name: "A Coisa",
        genre: "Terror",
        author: {
          name: "Stephen King",
          birthYear: 1947,
        },
        releaseYear: 1986,
      },
      {
        id: 6,
        name: "O Chamado de Cthulhu",
        genre: "Terror",
        author: {
          name: "H. P. Lovecraft",
          birthYear: 1890,
        },
        releaseYear: 1928,
      },
    ];
    expect(someBookWasReleaseOnThe80s(booksForToBeTrue)).toBe(true);
  });

  it('Verificar se a função "someBookWasReleaseOnThe80s" retorna false, caso não tenha livro da década de 80.', () => {
    const booksForToBeFalse = [
      {
        id: 1,
        name: "As Crônicas de Gelo e Fogo",
        genre: "Fantasia",
        author: {
          name: "George R. R. Martin",
          birthYear: 1948,
        },
        releaseYear: 1891,
      },
      {
        id: 2,
        name: "O Senhor dos Anéis",
        genre: "Fantasia",
        author: {
          name: "J. R. R. Tolkien",
          birthYear: 2092,
        },
        releaseYear: 2054,
      },
      {
        id: 3,
        name: "Fundação",
        genre: "Ficção Científica",
        author: {
          name: "Isaac Asimov",
          birthYear: 1920,
        },
        releaseYear: 2051,
      },
      {
        id: 4,
        name: "Duna",
        genre: "Ficção Científica",
        author: {
          name: "Frank Herbert",
          birthYear: 1920,
        },
        releaseYear: 1865,
      },
      {
        id: 6,
        name: "O Chamado de Cthulhu",
        genre: "Terror",
        author: {
          name: "H. P. Lovecraft",
          birthYear: 1890,
        },
        releaseYear: 1728,
      },
    ];
    expect(someBookWasReleaseOnThe80s(booksForToBeFalse)).toBe(false);
  });
});
