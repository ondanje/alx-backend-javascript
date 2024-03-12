export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  const studentIds = listOfStudents.map((students) => students.id);
  // console.log(studentIds);

  const sum = studentIds.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
}
