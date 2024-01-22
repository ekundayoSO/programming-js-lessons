/**
Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
 */

function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("even");
    } else if (number % 2 !== 0) {
        console.log("Odd");
    } else {
        console.log("Does not exit!");
    }
}

// Sample usage - do not modify
console.log(evenOrOdd(25)); // true
console.log(evenOrOdd(18)); // true
console.log(evenOrOdd(-17)); // false
