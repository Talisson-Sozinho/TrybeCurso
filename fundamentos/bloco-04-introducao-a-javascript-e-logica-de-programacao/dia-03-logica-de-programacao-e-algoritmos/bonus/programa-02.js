let n = 5;
let desenho = '';

if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    desenho += '*';
    console.log(desenho);
  }
} else {
  console.log('Número inválido');
}
