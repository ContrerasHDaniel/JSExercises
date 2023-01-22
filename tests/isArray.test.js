const isArray = require("../exercises/isArray");

//Run the test
test("Should return a boolean to confirm is an array", () => {
  // Should return a boolean
  expect(typeof isArray()).toBe("boolean");

  // Should return true if it is an array
  expect(isArray([2])).toBe(true);
});
