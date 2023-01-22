const getFirstElements = require("../exercises/getFirstElements");

test("Returns an array with the n elements required", function () {
  // Should return an array
  expect(Array.isArray(getFirstElements())).toBe(true);

  const n = 3;
  const controlArr = [1, 2, 3];
  // Should return an array of n length
  expect(getFirstElements([1, 2, 3, 4], n).length).toEqual(n);

  // Should return the last items
  expect(getFirstElements([1, 2, 3, 4], n)).toEqual(controlArr);
});
