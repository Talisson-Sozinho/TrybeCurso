// Requisito 01
function formatInfoPerson(namePerson) {
  const email = `${namePerson.replace(' ', '_').toLowerCase()}@trybe.com`;
  return {
    fullName: namePerson,
    email: email,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Requisito 02
const verifyBet = (numberDrawn, betNumber) => numberDrawn === betNumber;

function generateRaffle(betNumber, verifyBetFunction) {
  const numberDrawn = Math.floor(Math.random() * 6);
  return verifyBetFunction(numberDrawn, betNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}

// Requisito 03
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function calculateScore(rightAnswers, studentAnswers) {
  let score = 0;
  for ( let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      score += 1;
    } else if(studentAnswers[index] === 'N.A') {
      score -= 0.5;
    }
  }
  return score;
}

function getTestScore(gabarito, studentTest, getScoreFunction) {
  const text = `A pontuação final do teste foi: ${getScoreFunction(gabarito, studentTest)}`;
  return text;
}
