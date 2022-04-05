const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite',
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },
};

function peopleWatched(allLessons, matter) {
  const arrayLessons = Object.values(allLessons);
  let people = 0;
  for (let lesson of arrayLessons) {
    if (lesson.materia === matter) {
      people += lesson.numeroEstudantes;
    }
  }
  return people;
};

console.log(peopleWatched(allLessons, 'Matemática'));
