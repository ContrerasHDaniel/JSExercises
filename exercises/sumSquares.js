/**
 * Sum the squares of all elements in a vector(Array)
 * @param {Array} vector The array with the numbers to sum
 * @return {Number}  The total sum of the squares of the elements
 */
function sumSquares(vector = []) {
  let total = 0;
  vector.forEach((el) => (total += Math.pow(el,2)));
  return total;
}

module.exports = sumSquares;