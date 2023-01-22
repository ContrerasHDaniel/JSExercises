const arraySorter = require("../exercises/arraySorter");

test("Should return a sorted array", () => {
  // Should return an array
  expect(Array.isArray(arraySorter())).toBe(true);

  ctrlArray = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
  srtdArray = [-4, -3, 1, 2, 3, 5, 6, 7, 8];
  // Should return an array of the same length
  expect(arraySorter(ctrlArray).length).toEqual(ctrlArray.length);

  // Should return the elements sorted
  expect(arraySorter(ctrlArray)).toEqual(srtdArray);
});
