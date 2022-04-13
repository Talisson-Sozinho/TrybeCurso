function flatten(matriz) {
  return matriz.reduce((arrayFinal, rows) => {
    return rows.reduce((columns, element) => {
      columns.push(element);
      return arrayFinal;
    }, arrayFinal);
  }, []);
};

module.exports = flatten;
