const { sum, subtract, addName, rollcall } = require("../main");

describe("my maths tests", () => {
  test("adds two decimal numbers together using toBeCloseTo", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test("subtracts one number from another", () => {
    expect(subtract(3, 2)).not.toEqual(10000);
  });
});

describe("students array", () => {
  const studentArray = [{ name: "Ben" }, { name: "George" }];
  const newStudent = { name: "Isak" };
  addName(studentArray, newStudent);
  test("contains the added student", () => {
    expect(studentArray).toContainEqual(newStudent);
  });
  test("is Isak still there?", () => {
    expect(studentArray).toContain(newStudent);
  });
});

describe("students array", () => {
  const studentArray = ["Ben", "George"];
  const newStudent = "Isak";
  addName(studentArray, newStudent);
  test("contains the added student", () => {
    expect(studentArray).toContain(newStudent);
  });
});

describe("testing matchers", () => {
  test("rollcall calls Ben", () => {
    const student = { name: "Ben" };
    const rollcall = jest.fn((student) => student.name);

    rollcall(student);

    expect(rollcall).toHaveReturnedWith("Ben");
  });
});
