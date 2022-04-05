const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addPropriety(object, key, value) {
  object[key] = value;
  return object;
};

addPropriety(lesson2, 'turno', 'noite');

function listKeys(object) {
  return Object.keys(object);
};

function lengthObject(object) {
  return Object.keys(object).length;
};

function listValues(object) {
  return Object.values(object);
};

function getTogether(object1, object2, object3) {
  const newObject = {
    lesson1: Object.assign({}, object1),
    lesson2: Object.assign({}, object2),
    lesson3: Object.assign({}, object3),
  }
  return newObject;
};

const allLessons = getTogether(lesson1, lesson2, lesson3);

function quantityStudent(allLessons) {
  const arrayValues = listValues(allLessons);
  let quantity = 0;
  for (let index = 0; index < arrayValues.length; index += 1) {
    quantity += arrayValues[index].numeroEstudantes;
  }
  return quantity;
}

console.log(quantityStudent(allLessons));
