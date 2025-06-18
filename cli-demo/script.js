const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

// Now we can access our arguments by name
const num1 = parseInt(args.num1);
const num2 = parseInt(args.num2);
const operation = args.operation;

if (operation === "add") {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === "subtract") {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === "multiply") {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log("Unknown operation");
}
