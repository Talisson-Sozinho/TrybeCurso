const [anguloA, anguloB, anguloC] = [60, 60, 60];

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0){
  throw new Error("Ângulo inválido");
}

if (anguloA + anguloB + anguloC === 180){
  console.log("Certamente é um triângulo");
}else {
  console.log("claramente não é um triângulo");
}
