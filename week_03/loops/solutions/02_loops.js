// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

/*
for (let i = 2; i < 100; i += 2) {
    console.log(i, 100 - i);
}
*/

let max = 98;
let answer  = "";

for (let min = 2; min <= 98; min+=2) {
    answer += `${min} ${min}`;
}

console.log(answer);



/*
for (let even = 0; even < 100; even+=2) {
    console.log(even);
}
*/