function fantasyOrScienceFiction(books, arrayOfGenre) {
  const arrayOfGenreLowerCase = arrayOfGenre.map(genre => genre.toLowerCase());

  return books.filter(book => arrayOfGenreLowerCase.includes(book.genre.toLowerCase()));
};

module.exports = fantasyOrScienceFiction;
