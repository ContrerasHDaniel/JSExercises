/**
 * Insert dashes between two odd numbers on a string
 * @param {Array} arr Array to evaluate
 * @return {string}   String with the dashes between odd numbers
 */
function insertDashesBTOdds(arr = []) {
  let str = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
      str.push("-", arr[i]);
    } else {
      arr[i];
    }
  }

  return str.join("");
}

module.exports = insertDashesBTOdds;
