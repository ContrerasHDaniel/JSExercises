/**
 * Count the ocurrences of every item in array
 * @param {Array} arr Array to count items
 * @return {string}  the element and the count
 */
function getMostOccurrent(arr = []) {
  let occurrences = arr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  let maximum = Object.entries(occurrences).reduce(
    (max, next) => (next[1] >= max[1] ? next : max),
    [0, -Infinity]
  );

  return `Max occurrence: ${maximum[0]} (${maximum[1]} times)`;
}

module.exports = getMostOccurrent;