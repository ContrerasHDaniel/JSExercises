const insertDashesBTOdds = require("../exercises/insertDashesBTodds");

test("Returns a string with dashes between numbers", () => {
  // Should return a string
  expect(typeof insertDashesBTOdds()).toBe("string");

  const controlStr = "025468";
  // Should contain dashes
  expect(insertDashesBTOdds(controlStr)).toContain("-");
});
