export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsInCity = listOfStudents.filter((students) => students.location === city);
  return studentsInCity.map((student) => {
    const studentGrades = newGrades.filter((grade) => grade.studentId === student.id);
    if (studentGrades.length > 0) {
      return {
        ...student,
        grade: studentGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
