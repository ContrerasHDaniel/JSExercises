const sumSquares = require("../exercises/sumSquares.js");

test("Should return a sum of squares in a vector", () => {
  // Should return a number
  expect(typeof sumSquares()).toBe("number");

  const testArray = [2, 2, 2, 2];
  const expectedResult = 16;
  // Should return the sum of squares
  expect(sumSquares(testArray)).toBe(expectedResult);
});
