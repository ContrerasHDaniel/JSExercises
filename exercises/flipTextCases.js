/**
 * Return a string with the cases of the characters flipped
 * @param {string} str the string to flip
 * @return {string}  the string flipped
 */
function flipTextCases(str = "") {
  const charArray = str.split("");
  const newCharArray = charArray.map((item) => {
    if (item == item.toLowerCase()) {
      return item.toUpperCase();
    } else {
      return item.toLowerCase();
    }
  });
  return newCharArray.join("");
}

module.exports = flipTextCases;
