const sayHi = require("../exercises/greeting");

// Run the test
test("Returns a greeting as string", function () {
  // Should return a string
  expect(typeof sayHi()).toBe("string");

  // Should include the provided name
  expect(sayHi("Capi").includes("Capi")).toBe(true);
});
