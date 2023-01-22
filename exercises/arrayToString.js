/**
 * Transform an array to a string concatenated with the symbol required,
 * @param {Array} arr The array to be concatenated
 * @param {string} symbol The symbol to concatenate
 * @return {string}   The string concatenated with the symbol
 */
function arrayToString(arr = [], symbol = ",") {
  return arr.join(symbol);
}

module.exports = arrayToString;
