const prompt = require("prompt-sync")();

const firstName = prompt("First Name: ");
if (firstName == "Shippop") {
  console.log("Best Online Shipping Platform");
} else {
  const lastName = prompt("Last Name: ");
  console.log(`Hello Shippop, My name is ${firstName} ${lastName}`);
}
