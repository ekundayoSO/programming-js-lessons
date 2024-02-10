// Exerice 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here
function myAlphabetLength(count) {
  count = myAlphabet.length;
  console.log(count);
  if (myAlphabet.length >= 5) {
    console.log("Array length is greater than or equal to 5.");
  }
}

//myAlphabetLength();

// Exerice 2: Iterate over array and log each item with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
/*
Log each planet in the array along with its index.
Expected outcomes:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here
// planets.filter((item, index) =>
//   console.log(`Planet: ${item}, Index: ${index}`)
// );

// Exerice 3: Log array items with their types
const wowDatatypes = [1, "text", false, null, undefined];
/*
Iterate over the array, logging each item, its index, and data type.
Expected outcomes:
"Item: 1, Index: 0, Type: number"
...
"Item: undefined, Index: 4, Type: undefined"
*/
// Write your code here
wowDatatypes.filter((item, index) =>
  console.log(`Item: ${item}, Index: ${index}, type: ${typeof item}) `)
);

// Exerice 4: Log array items without using a loop
let myArr = [1, 2, "One", true];
/*
Log each item in this array without explicitly using a loop.
Expected outcomes: 1, 2, "One", true
*/
// Write your code here
const new_myArr = `${myArr}`;
console.log(new_myArr);

// Exerice 5: Find common courses between two students
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
/*
Identify and log any courses common to both student1Courses and student2Courses.
Expected outcome: "Common course: Programming"
*/
// Write your code here
// let commonItems= [];
// function compareCourses() {

//   for (let i = 1; i <= student1Courses.length; i++) {
//     if (student1Courses.includes(student2Courses[i])) {
//         commonItems.push(student2Courses[i]);
//     }
//   }
// }

// compareCourses();
// console.log(commonItems);

// Exerice 6: Log each letter of array items
let furniture = ["Table", "Chairs", "Couch"];
/*
For each item in the furniture array, log every letter.
Expected outcomes:
"Letters in 'Table': T, a, b, l, e"
...
"Letters in 'Couch': C, o, u, c, h"
*/
// Write your code here
for (let i = 0; i < furniture.length; i++) {
  const item = furniture[i];

  let itemChar = "";

  for (let j = 0; j < item.length; j++) {
    itemChar += item[j];
    if (j < item.length - 1) {
      itemChar += ", ";
    }
  }

  console.log(`Letter in '${item}':` + " " + itemChar);
}

// Exerice 7: Filter positive temperatures
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Write the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Expected outcome: [3, 22, 5, 18]
*/
// Write your code here

let positive = [];

function getPositiveTemperatures() {
  for (let i = 0; i < temperatures.length; i++) {
    let positiveTemp = temperatures[i];

    if (positiveTemp > 0) {
      positive.push(positiveTemp);
    }

    if (positive < positive.length) {
      positiveTemp += ",";
    }
  }
}
getPositiveTemperatures();
console.log(positive);

// Exerice 8: Filter Odd Years
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Write your code here
function getOddYears(years) {
  const oddYears = [];

  for (let i = 0; i < years.length; i++) {
    if (years[i] % 2 !== 0) {
      oddYears.push(years[i]);
    }
  }
  return oddYears;
}

// Sample usage - Uncomment to test your function
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
