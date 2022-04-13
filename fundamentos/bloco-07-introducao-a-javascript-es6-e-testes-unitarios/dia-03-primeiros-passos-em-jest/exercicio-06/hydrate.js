function hydrate(string) {
  const water = string.split(' ')
    .reduce((water, word) => (word > 0 && word < 10) ? water += Number(word) : water, 0);
  
  return water > 1 ? `${water} copos de água` : `${water} copo de água`;
}

module.exports = hydrate;