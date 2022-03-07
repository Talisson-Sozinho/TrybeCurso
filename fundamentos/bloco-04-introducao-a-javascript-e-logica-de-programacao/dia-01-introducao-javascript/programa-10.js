const chessPiece = "CAvaLO".toLowerCase();

switch (chessPiece){
  case "cavalo":
    console.log("Se movimenta em L");
    break;
  case "torre":
    console.log("Se movimenta tando na horizontal quanto na vertical");
    break;
  case "bispo":
    console.log("Se movimenta em diagonal");
    break;
  case "rainha":
    console.log("Se movimenta em diagonal, horizontal e vertical");
    break;
  case "rei":
    console.log("Se movimenta para uma casa em qualquer direção");
    break;
  case "peão":
    console.log("Se movimenta uma casa para frente");
    break;
  default:
    console.log("A peça não é de xadrez");
} 