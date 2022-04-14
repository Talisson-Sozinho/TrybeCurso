const books = require('./books');
 
function authorBornIn1947() {
  const {author:{name}} = books.find(({author:{birthYear}}) => birthYear === 1947);
  return name;
}

module.exports = authorBornIn1947;
