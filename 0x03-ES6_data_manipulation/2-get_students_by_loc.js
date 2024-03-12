export default function getStudentsByLocation(listOfStudents, city) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }

  const listOfstlocation = listOfStudents.filter((students) => students.location === city);

  return listOfstlocation;
}
