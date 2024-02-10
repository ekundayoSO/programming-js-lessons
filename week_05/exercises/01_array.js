// Initial array of team members
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:
//teamMembers.forEach((member) => console.log(member));

// Exercise 2: Remove the first member of the array.
// Write your code here:
//    const newMem = teamMembers.slice(1);
//    console.log(newMem);

// Exercise 3: Remove the last member of the array.
// Write your code here:
//const last = teamMembers.length -1
// const removeLast = teamMembers.pop();
// console.log(teamMembers);

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
// const addNewMem = teamMembers.unshift("Alex");
// console.log(teamMembers);

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
// const appendLast = teamMembers.push("Linda");
// console.log(teamMembers);

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
// const newArr = teamMembers.slice(2);
// console.log(newArr);

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
// const indexOfMike = teamMembers.indexOf("Mike");
// console.log(indexOfMike);

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
// const indexOfJake = teamMembers.indexOf("Jake");
// console.log(indexOfJake);

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
// const removeAdd = teamMembers.splice(2, 1, "Carol", "Bruce");
// console.log(teamMembers);

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
const lastNewArr = teamMembers.push("Bob");
console.log(teamMembers);

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
// const copyArr = teamMembers.slice(0);
// console.log(copyArr);

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ["Tina", "Dean"];
// Write your code here:
// const newMem = teamMembers.concat(newMembers);
// console.log(newMem);

// Exercise 13: Finding all occurrences of a John
// Write your code here:
const findName = teamMembers.filter((aName) => aName === "John").length;
console.log(findName);

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:
const tranformToUpperCase = teamMembers.map((item) => item.toUpperCase());
console.log(tranformToUpperCase);
