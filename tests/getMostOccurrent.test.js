const getMostOccurrent = require("../exercises/getMostOccurrent");

test("Should return the element most conccurrent", () => {
  // Should return a string
  expect(typeof getMostOccurrent()).toBe("string");

  const controlArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  const expectedOutput = "Max occurrence: a (5 times)";
  // Should return a message with the most occurrent element and the count number
  expect(getMostOccurrent(controlArray)).toContain(expectedOutput);
});
