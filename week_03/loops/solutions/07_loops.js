// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let initialQuestion;
let enterNumbers;
let maxNumber = -Infinity;
let minNumber = Infinity;

initialQuestion = parseInt(prompt("How many numbers do you wish to input?"));

for (let i = 0; i < initialQuestion; i++) {
  enterNumbers = parseFloat(prompt("Enter your numbers"));
  maxNumber = Math.max(maxNumber, enterNumbers);
  minNumber = Math.min(minNumber, enterNumbers);

  if (i === initialQuestion - 1) {
    console.log("Maximum:", maxNumber, "Minimum:", minNumber);
  }
}
