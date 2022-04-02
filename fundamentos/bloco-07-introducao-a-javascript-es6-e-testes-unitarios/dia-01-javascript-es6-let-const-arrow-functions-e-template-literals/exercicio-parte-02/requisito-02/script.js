const longestWord = (string) => {
  let longestWord = '';
  const arrayWords = string.split(' ');
  for (let index = 0; index < arrayWords.length; index += 1) {
    longestWord = arrayWords[index].length > longestWord.length ? arrayWords[index] : longestWord;
  }
  return longestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));