const sumAndProduct = require("../exercises/sumAndProduct.js");

test("Should return an array of results with the sum and product of a vector", () => {
  // Should return an array with initial values [0, 1]
  expect(sumAndProduct()).toEqual([0, 1]);

  const controlArray = [2, 2, 2, 2];
  const expectedArray = [8, 16];
  // Should return an array with the totals [sum, prod]
  expect(sumAndProduct(controlArray)).toEqual(expectedArray);
});
