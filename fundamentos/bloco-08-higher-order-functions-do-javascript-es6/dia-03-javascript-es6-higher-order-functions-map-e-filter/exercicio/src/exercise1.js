const formatBook = (book) => `${book.name} - ${book.genre} - ${book.author.name}`;

const formatedBookNames = books => books.map(formatBook);

module.exports = formatedBookNames;
