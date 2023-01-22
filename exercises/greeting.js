/**
 * Get a greeting
 * @param {String} name The name of the person to greet
 * @return {String}      The Greeting
 */
function sayHi(name = "Daxez") {
    return `Hi ${name}`;
}

module.exports = sayHi;