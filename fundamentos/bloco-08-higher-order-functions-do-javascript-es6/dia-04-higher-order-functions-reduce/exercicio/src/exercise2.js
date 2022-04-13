function reduceNames(books) {
  const stringAuthorsName = books.reduce((stringAuthorsName, book, index) => {
    if (index === 1) return `${stringAuthorsName.author.name}, ${book.author.name}`
    return `${stringAuthorsName}, ${book.author.name}`
  });
  return `${stringAuthorsName}.`;
}

module.exports = reduceNames;
