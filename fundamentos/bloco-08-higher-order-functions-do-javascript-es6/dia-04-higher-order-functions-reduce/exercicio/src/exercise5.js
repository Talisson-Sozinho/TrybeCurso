function containsA(names, wordForVerification) {
  return names.reduce((contadorWord, name) => {
    for (let word of name.split('')) {
      if (word.toLowerCase() === wordForVerification.toLowerCase()) {
        contadorWord += 1;
      }
    }
    return contadorWord;
  }, 0);
}


module.exports = containsA;
