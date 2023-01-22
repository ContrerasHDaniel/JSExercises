/**
 * Get the first elements of the array, if param 'n' passed,
 * return first n elements of the array
 * @param {Array} arr The array to be filtered
 * @param {Number} n The number of elements to be returned
 * @return {Array}   The array with the elements indicated
 */
function getFirstElements(arr = [], n = 1) {
  return arr.slice(0, n);
}

module.exports = getFirstElements;
