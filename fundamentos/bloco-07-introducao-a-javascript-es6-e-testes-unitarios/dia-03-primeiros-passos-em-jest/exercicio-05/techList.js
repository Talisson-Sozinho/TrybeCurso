function techList(arrayTech, name) {
  if (arrayTech.length === 0) return 'Vazio!';
  return arrayTech.sort().map((tech) => ({ tech, name }));
}

module.exports = techList;
