const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const addName = (array, student) => {
  array.push(student);
  return array;
};

const rollcall = (student) => student.name;

module.exports = { sum, subtract, addName, rollcall };
