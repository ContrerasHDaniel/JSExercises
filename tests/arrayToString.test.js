const arrayToString = require("../exercises/arrayToString");

test("Should return a string with array items concatenated", function () {
  // Should return a string
  expect(typeof arrayToString()).toBe("string");

  let symbol = "+";
  let controlArr = ["jamon", "salchicha", 1, "queso"];
  // Should contain the specified symbol
  expect(arrayToString(controlArr, symbol)).toContain(symbol);
});
