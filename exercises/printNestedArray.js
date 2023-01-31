/**
 * Print nested array with row title
 * @param {Array} inputArrf the array to print
 * @return {string}  The elements of the array printed
 */
function printNested(inputArr = []) {
  var returnString = "";
  for (var i in inputArr) {
    let r = Number.parseInt(i) + 1;
    returnString += "Row: " + r + "\n";
    for (var j in inputArr[i]) {
      returnString += inputArr[i][j] + "\n";
    }
  }
  return returnString;
}

module.exports = printNested;
