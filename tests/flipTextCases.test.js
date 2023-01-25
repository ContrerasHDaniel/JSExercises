const flipTextCases = require("../exercises/flipTextCases");

test("should return a string with upper and lower case flipped", () => {
    // Should return a string
    expect(typeof flipTextCases()).toBe("string");
    
    const controlString = "The Quick Brown Fox";
    const expectedOutput = "tHE qUICK bROWN fOX";
    // Should return the expected output as receives the control string
    expect(flipTextCases(controlString)).toMatch(expectedOutput);
});
