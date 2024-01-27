/**
Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
 */

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    } 
}

// Alternative
/*
function evenOrOdd(num) {
    if (num % 2 !== 0) {
        console.log("odd");
    } else {
        console.log("even");
    }
}

*/



// Sample usage - do not modify
console.log(evenOrOdd(25)); // odd
console.log(evenOrOdd(18)); // even
console.log(evenOrOdd(-17)); // odd
