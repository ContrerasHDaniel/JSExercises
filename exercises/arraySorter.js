/**
 * Sort integer array from lesser to greater number
 * @param {Array} arr Array to sort
 * @return {Array}   Sorted array
 */
function arraySorter(arr = []) {
  return arr.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

module.exports = arraySorter;
