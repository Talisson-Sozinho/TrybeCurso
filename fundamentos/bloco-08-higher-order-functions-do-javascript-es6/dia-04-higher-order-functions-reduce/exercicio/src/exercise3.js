function averageAge(books) {
  const sumAge = books.reduce((sumAge, book) => {
    return sumAge + book.releaseYear - book.author.birthYear;
  }, 0);
  return sumAge/books.length;
}

module.exports = averageAge;
