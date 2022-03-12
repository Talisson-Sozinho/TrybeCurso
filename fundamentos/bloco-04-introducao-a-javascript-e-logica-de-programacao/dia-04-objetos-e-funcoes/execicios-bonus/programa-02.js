function arrayOfNumbers(vector) {
  novoArray = [];
  for (let array of vector) {
    for (let number of array) {
      if (number % 2 == 0) {
        novoArray.push(number);
      }
    }
  }
  return novoArray;
}

function contadorFrutas(frutasBasket) {
  let objetoFrutas = {};
  for (let fruta of frutasBasket) {
    if (objetoFrutas[fruta] > 0) {
      objetoFrutas[fruta] += 1;
    } else {
      objetoFrutas[fruta] = 1;
    }
  }
  return objetoFrutas;
}
