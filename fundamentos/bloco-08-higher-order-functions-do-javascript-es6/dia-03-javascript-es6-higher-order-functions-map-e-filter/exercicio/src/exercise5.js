const fantasyOrScienceFiction = require('./exercise3');

function fantasyOrScienceFictionAuthors(books, arrayOfGenre) {
  const booksFiltered = fantasyOrScienceFiction(books, arrayOfGenre);
  const arrayOfAuthors = booksFiltered.map((book) => book.author.name);
  arrayOfAuthors.sort();
  return arrayOfAuthors;
}

module.exports = fantasyOrScienceFictionAuthors;
