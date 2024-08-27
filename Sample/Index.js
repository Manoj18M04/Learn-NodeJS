const math = require("./Math");

// function add(a,b) {
//     return a + b;
// }

let total = math.add(100, 6);
let difference = math.sub(100, 6);
let product = math.multiply(100, 6);
let divide = math.divide(100, 6);
let remainder = math.remainder(100, 6);

console.log("Total: " + total);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Divide: " + divide);
console.log("Remainder: " + remainder);

total = math.add(200, 6);
difference = math.sub(200, 6);
product = math.multiply(200, 6);
divide = math.divide(200, 6);
remainder = math.remainder(200, 6);

console.log("Total: " + total);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Divide: " + divide);
console.log("Remainder: " + remainder);