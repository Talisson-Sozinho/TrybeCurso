const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject(...arrayCar) {
  return arrayCar.map(([model, company, releaseYear]) => ({ model, company, releaseYear }));
}

console.log(toObject(palio, shelbyCobra, chiron));
