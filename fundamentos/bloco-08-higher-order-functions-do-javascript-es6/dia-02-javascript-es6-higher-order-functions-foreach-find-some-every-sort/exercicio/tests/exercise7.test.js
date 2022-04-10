const authorUnique = require('../src/exercise7');

describe("Teste para o exercício 07: ", () => {
  it('Verificar se a função "authorUnique" retorna true, caso nenhum author tenha nascido no mesmo ano.', () => {
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
      {
        id: 7,
        name: "Talisson no mundo da lua",
        genre: "Fantasia",
        author: {
          name: "Talisson L. Sozinho",
          birthYear: 1890,
        },
        releaseYear: 2020,
      },
    ];
    expect(authorUnique(booksForToBeTrue)).toBe(true);
  });

  it('Verificar se a função "authorUnique" retorna false, caso ao menos dois authors tenham nascido no mesmo ano.', () => {
    const booksForToBeFalse = [
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
    expect(authorUnique(booksForToBeFalse)).toBe(false);
  });
});
