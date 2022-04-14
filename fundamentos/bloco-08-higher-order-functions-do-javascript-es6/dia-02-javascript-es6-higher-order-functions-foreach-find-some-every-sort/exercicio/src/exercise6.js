function someBookWasReleaseOnThe80s(books) {
  // escreva seu código aqui
  return books.some(({releaseYear}) => releaseYear > 1900 && releaseYear <= 2000);
}

module.exports = someBookWasReleaseOnThe80s;