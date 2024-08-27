// process.argv

// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// const nameArg = process.argv[2] || "World";
// console.log(`Hello ${nameArg}`);

const nameArg = capitalize(process.argv[2] || "World");
console.log(`Hello ${nameArg}`);

function capitalize(str) {
    return str.trim().toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}