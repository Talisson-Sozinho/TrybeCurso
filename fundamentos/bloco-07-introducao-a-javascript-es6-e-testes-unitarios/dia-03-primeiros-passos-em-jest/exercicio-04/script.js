function isVogal(char) {
  const vogais = ['a', 'e', 'i', 'o', 'u']; 
  for (let vogal of vogais) {
    if (vogal === char) {
      return true;
    }
  }
  return false;
}

function vogalForNumber(char) {
  const vogaisNumber = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return vogaisNumber[char];
}

function encode(string) {
  let stringEncoded = '';
  for (let char of string) {
    if (isVogal(char)) {
      stringEncoded += vogalForNumber(char);
    } else {
      stringEncoded += char;
    }
  }
  return stringEncoded;
}

function numberForVogal(number) {
  const numbersVogal = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return numbersVogal[number];
}

function decode(string) {
  let stringDecoded = '';
  for (let char of string) {
    if (char > 0 && char < 6) {
      stringDecoded += numberForVogal(char);
    } else {
      stringDecoded += char;
    }
  }
  return stringDecoded;
}

module.exports = {
  encode,
  decode,
}