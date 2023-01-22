const arrayClone = require("../exercises/arrayClone.js");

// Run the test
test("Should return a cloned array", () => {
  // Should return an array
  expect(Array.isArray(arrayClone())).toBe(true);

  // Should return a clone of the array passed
  const testArr = [1, 3, "5", 1, 12];
  expect(arrayClone(testArr)).toEqual(testArr);
});
