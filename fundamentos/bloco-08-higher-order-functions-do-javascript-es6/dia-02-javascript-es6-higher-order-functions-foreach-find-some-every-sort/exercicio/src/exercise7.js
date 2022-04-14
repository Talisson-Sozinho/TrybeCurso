function authorUnique(books) {
  // escreva seu código aqui
  return books.every(({author:{name, birthYear}}) => !books.some((book) => book.author.birthYear === birthYear && (name !== book.author.name)));
}

module.exports = authorUnique;