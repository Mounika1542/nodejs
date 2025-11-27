// ------------------------------
// 1. Built-in Module Example
// ------------------------------
const os = require("os");

console.log("=== Built-in Module: OS ===");
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("CPU Cores:", os.cpus().length);


// ------------------------------
// 2. Local Module Example
// ------------------------------

// math.js (create this file separately)
/*
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };
*/

// app.js (main file)
const math = require("./math");

console.log("=== Local Module ===");
console.log("Addition:", math.add(10, 20));
console.log("Multiplication:", math.multiply(5, 4));


// ------------------------------
// 3. External Module Example
// ------------------------------
// Install lodash first: npm install lodash
const _ = require("lodash");

console.log("=== External Module: Lodash ===");
const text = "hello node.js modules";
console.log("Uppercase:", _.upperCase(text));
console.log("Capitalized:", _.capitalize(text));


// ------------------------------
// 4. Exporting single function Example
// ------------------------------
// greet.js (create this file separately)
/*
module.exports = function(name){
    console.log("Hello " + name + "!");
};
*/

// app.js
const greet = require("./greet");
greet("Mounika");


// ------------------------------
// 5. Exporting multiple functions Example
// ------------------------------
// utils.js (create this file separately)
/*
module.exports = {
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b
};
*/

// app.js
const utils = require("./utils");
console.log("Subtract:", utils.subtract(10, 4));
console.log("Divide:", utils.divide(20, 5));
