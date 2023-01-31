/**
 * Return the total sum and product of all elements in vector
 * @param {Array} vector The array to be calculated
 * @return {Array}   Two element array with the totals
 */
function sumAndProduct(vector = []) {
  let results = Array(2);
  results[0] = 0; // Sum
  results[1] = 1; // Prod
  vector.forEach((element) => {
    results[0] += element;
    results[1] = results[1] * element;
  });

  return results;
}

module.exports = sumAndProduct;