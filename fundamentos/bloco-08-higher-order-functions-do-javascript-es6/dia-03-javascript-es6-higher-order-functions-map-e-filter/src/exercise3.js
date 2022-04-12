function fantasyOrScienceFiction(books, arrayOfGenre) {
  const arrayOfGenreLowerCase = arrayOfGenre.map(genre => genre.toLowerCase());

  const newArrayOfBooks = books.filter(book => arrayOfGenreLowerCase.includes(book.genre.toLowerCase()));

  return newArrayOfBooks;
}

module.exports = fantasyOrScienceFiction;
