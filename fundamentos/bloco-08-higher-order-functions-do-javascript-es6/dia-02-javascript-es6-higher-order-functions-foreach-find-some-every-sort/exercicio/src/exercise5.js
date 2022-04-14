function everyoneWasBornOnSecXX(books) {
  // escreva seu código aqui
  return books.every(({author:{birthYear}}) => birthYear > 1900 && birthYear <= 2000);
}

module.exports = everyoneWasBornOnSecXX;