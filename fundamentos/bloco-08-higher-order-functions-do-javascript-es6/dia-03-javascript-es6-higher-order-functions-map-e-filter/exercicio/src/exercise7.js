const books = require('./template-library');

function authorWith3DotsOnName() {
  const book = books.find((book) => {
    const authorName = book.author.name.split(' ');
    return authorName.filter((word) => word.length === 2 && word.endsWith('.')).length === 3;
  });

  return book.name; 
}

module.exports = authorWith3DotsOnName;
