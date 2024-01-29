// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let inputNumbers;
let evenNumCount = 0;

for (let i = 1; i <= 3; i++) {
  inputNumbers = Number(prompt("Enter your numbers here"));

  if (inputNumbers % 2 === 0) {
    evenNumCount++;
  }
}

console.log(`Count of even numbers = ${evenNumCount}`);


