let number = 41;
let isPrime = true;

if ( number === 1 || number === 4){
  isPrime = false;
}else {
  for (let divisor = 2; divisor < number / 2; divisor += 1) {
    if ( number % divisor === 0 ){
      isPrime = false;
      break;
    }
  }
}

if (isPrime){
  console.log("O número é primo!");
}else{
  console.log("O número NÃO é primo!");
}
