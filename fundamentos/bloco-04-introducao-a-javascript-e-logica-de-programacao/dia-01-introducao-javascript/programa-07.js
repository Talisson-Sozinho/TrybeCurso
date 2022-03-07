const [a, b, c] = [5, 21, 0];

if (a === b || a === c || b === c) {
  throw new Error("Tem numero iguais");
}

if (a > b) {
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else if (b > c) {
  console.log(b);
} else {
  console.log(c);
}