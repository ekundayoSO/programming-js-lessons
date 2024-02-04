/*
Create a program that outputs all odd, positive 
numbers less than 100, starting from 1, such 
as 1, 3, 5, 7, 9, 11, and so on.
*/
function questionOne() {
  const paraElement = document.getElementById("question-one");
  let oddNums = " ";

  for (let i = 1; i <= 100; i += 2) {
    if (i % 2 !== 0) {
      oddNums += i;

      if (i < 99) {
        oddNums+= ",";
      }
    }
  }
  paraElement.textContent = oddNums;
}

