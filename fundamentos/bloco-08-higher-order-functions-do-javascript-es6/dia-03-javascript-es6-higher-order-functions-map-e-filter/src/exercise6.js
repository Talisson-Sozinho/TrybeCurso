const currentYear = 2022;

function oldBooks(books, moreThanYearsAgo) {
  const arrayOfOldsBooks = books.filter((book) => currentYear - book.releaseYear > moreThanYearsAgo);
  return arrayOfOldsBooks.map(book => book.name);
}

module.exports = oldBooks;
