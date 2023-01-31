const printNestedArray = require("../exercises/printNestedArray.js");

// Run the test
test("Should return a stringified array", () => {
  // Should return a string
  expect(typeof printNestedArray()).toBe("string");

  const testArray = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  // Should contain a string with the elements divided by rows
  expect(printNestedArray(testArray)).toContain(
    "Row: 1\n1\n2\n3\nRow: 2\n4\n5\n6"
  );
});
