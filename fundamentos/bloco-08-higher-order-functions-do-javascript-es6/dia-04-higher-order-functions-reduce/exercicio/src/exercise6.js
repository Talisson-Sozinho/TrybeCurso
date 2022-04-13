function studentAverage(students, grades) {
  return students.map((student, index) => {
    const newStudentFormat = {
      name: student,
      average: grades[index].reduce((acc, curr) => acc + curr)/grades[index].length,
    }
    return newStudentFormat;
  });
}

module.exports = studentAverage;
