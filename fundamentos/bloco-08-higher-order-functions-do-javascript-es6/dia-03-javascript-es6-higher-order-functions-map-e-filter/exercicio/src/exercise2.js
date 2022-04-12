function nameAndAge(books) {
  const newArray = books.map((book) => {
    const author = book.author.name;
    const age = book.releaseYear - book.author.birthYear;
    return { author, age };
  });
  newArray.sort((a, b) => a.age - b.age);
  return newArray;
}

module.exports = nameAndAge;
