// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let sum = 0;
let count = 0;

while (true) {
  let numberInput = Number(prompt("Enter number"));

  if (numberInput === 0) {
    console.log("Program terminated.");
    break;
  }

  sum += numberInput;
  count++;
}

if (count > 0) {
  let average = (sum / count).toFixed(2);
  console.log(`Average: ${average}`);
}

