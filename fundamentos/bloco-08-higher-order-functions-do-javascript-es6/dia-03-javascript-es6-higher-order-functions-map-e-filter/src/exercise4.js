const currentYear = 2022;

function oldBooksOrdered(books, moreThanYearsAgo) {
  const booksFiltered = books.filter((book) => currentYear - book.releaseYear > moreThanYearsAgo);
  return booksFiltered.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}

module.exports = oldBooksOrdered;
