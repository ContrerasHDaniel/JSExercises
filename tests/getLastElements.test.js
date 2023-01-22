const getLastElements = require("../exercises/getLastElements");

test("Returns an array with the n elements required", function () {
  // Should return an array
  expect(Array.isArray(getLastElements())).toBe(true);

  const n = 3;
  const controlArr = [2, 3, 4];
  // Should return an array of n length
  expect(getLastElements([1, 2, 3, 4], n).length).toEqual(n);

  // Should return the last items
  expect(getLastElements([1, 2, 3, 4], n)).toEqual(controlArr);
});
