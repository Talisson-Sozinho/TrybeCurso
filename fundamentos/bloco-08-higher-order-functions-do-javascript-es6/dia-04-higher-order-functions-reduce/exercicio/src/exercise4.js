function longestNamedBook(books) {
  return books.reduce((longestNamedBook, book) => longestNamedBook.name.length > book.name.length ? longestNamedBook : book);
}

module.exports = longestNamedBook;
