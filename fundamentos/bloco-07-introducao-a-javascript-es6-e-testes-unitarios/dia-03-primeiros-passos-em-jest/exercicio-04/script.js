function isVogal(char) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  return vogais.find((element)=> element === char)
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
  return string.split('').reduce((stringEncoded, char) => {
    return isVogal(char) ? stringEncoded += vogalForNumber(char) : stringEncoded += char;
  }, '');
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
  return string.split('').reduce((stringDecoded, char) => {
    return (char > 0 && char < 6) ? stringDecoded += numberForVogal(char) : stringDecoded += char;
  }, '');
}

module.exports = {
  encode,
  decode,
}