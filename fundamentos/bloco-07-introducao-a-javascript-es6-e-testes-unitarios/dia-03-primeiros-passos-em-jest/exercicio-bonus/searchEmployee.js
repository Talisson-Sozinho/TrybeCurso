const professionalBoard = require('./banco-de-dados');

const searchEmployee = (id, detail) => {
  const professional = professionalBoard.find((professional) => professional.id === id);
  if (!professional) throw new Error('ID não identificada');
  if(!professional[detail]) throw new Error('Informação indisponível');

  const info = {};
  info.id = professional.id;
  info[detail] = professional[detail];

  return info;
};

module.exports = searchEmployee;