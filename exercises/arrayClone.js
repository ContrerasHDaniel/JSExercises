/**
 *
 * @param {Array} arr The array to be cloned
 * @returns {Array}    The cloned array
 */
function arrayClone(arr = []) {
  return arr.slice(0);
}

module.exports = arrayClone;
