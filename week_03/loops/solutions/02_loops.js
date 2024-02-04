// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.
/* let min = 0;
let max = 100 - min 

for (let min = 2; min < 100; min += 2) {
    console.log(`${min} ${max}`);
}
 */


function questionTwo() {
    const paraElement = document.getElementById
    ("question-two");
    for (let i = 2; i < 100; i += 2) {
        let nums = (i, 100 - i);
    
    }
    paraElement.textContent = nums;
  }
  

/* let max = 98;
let min = 2;
let answer  = "";

for (let min = 2; min <= 98; min+=2) {
    answer += `${min} ${min}`;
}

console.log(answer); */



