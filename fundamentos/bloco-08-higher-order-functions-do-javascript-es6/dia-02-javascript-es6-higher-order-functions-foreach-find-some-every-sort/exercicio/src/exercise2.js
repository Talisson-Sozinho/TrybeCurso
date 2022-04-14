const books = require('./books');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach( ({name})=> {
    nameBook = nameBook || name;
    nameBook = nameBook.length > name.length ? name : nameBook;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

module.exports = smallerName;
