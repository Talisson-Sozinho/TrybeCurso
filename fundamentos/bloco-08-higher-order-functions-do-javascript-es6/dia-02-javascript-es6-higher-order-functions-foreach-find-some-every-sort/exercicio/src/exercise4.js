const books = require('./books');

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
}

module.exports = booksOrderedByReleaseYearDesc;