export default function getListStudentIds(listOfStudent) {
  if (!Array.isArray(listOfStudent)) {
    return [];
  }
  const stdIds = listOfStudent.map((student) => student.id);

  return stdIds;
}
