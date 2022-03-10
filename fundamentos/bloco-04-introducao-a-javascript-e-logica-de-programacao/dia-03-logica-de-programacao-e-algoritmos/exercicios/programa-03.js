let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorWord = array[0];
let maiorWord = array[0];

for ( let word of array ) {
  if ( word.length < menorWord.length ) {
    menorWord = word;
  }
}

for ( let word of array ) {
  if ( word.length > maiorWord.length ) {
    maiorWord = word;
  }
}

console.log("menor palavra: " + menorWord);
console.log("maior palavra: " + maiorWord);