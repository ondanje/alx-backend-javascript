export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // get name
  get name() {
    return this._name;
  }

  // set name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // get length
  get length() {
    return this._length;
  }

  // set length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  // get students
  get students() {
    return this._students;
  }

  // set students
  set students(value) {
    if (!(value instanceof Array) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Student must be an array of strings');
    }
    this._students = value;
  }
}
