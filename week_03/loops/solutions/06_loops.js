// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

let singleNumber;
let inquiryQ;

let sum = 0;
let count = 0;

while (true) {
  singleNumber = parseFloat(prompt("Enter your number:"));
  inquiryQ = prompt("Do you wish to continue giving numbers? (y/n)");

  if (inquiryQ === "n") {
    console.log("The program terminate");
    break;
  }

  sum = sum += singleNumber;
  count++;
}
if (inquiryQ === "n") {
  let averageOfNumbers = (sum / count).toFixed(2);
  console.log(`Average of numbers = ${averageOfNumbers}`);
}
