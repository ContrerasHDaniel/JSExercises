/**
 * Get the last elements of the array, if param 'n' passed,
 * return last n elements of the array
 * @param {Array} arr The array to be filtered
 * @param {Number} n The number of elements to be returned
 * @return {Array}   The array with the elements indicated
 */
function getLastElements(arr = [], n = 1) {
  return arr.slice(arr.length - n, arr.length);
}

module.exports = getLastElements;
