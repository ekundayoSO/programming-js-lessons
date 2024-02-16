/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here

const library = [
    {
        title: "Cost Accounting",
        author: "Colin Drury",
        yearPublished: 2020
    },
     {
        title: "Understanding Financial Accounting",
        author: "Fraser Lyn",
        yearPublished: 2015
    }
]

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title);
library[1]['yearPublished'] = 2019;
console.log(library);


/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = 12346789907;
console.log(library);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
}

const book3 = new Book("Standford Mathematics", "George Polya", 2009);
library.push(book3);
console.log(library);



/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres) {
   return {
     title: title,
     author: author,
     yearPublished: yearPublished,
     genres: genres
   };
}

const newBook = createBook(
  "Auditing for the Dummies",
  "Maire Loughran",
  2010,
  15376789123
);
console.log(newBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonString = JSON.stringify(library);
console.log(jsonString);

const newObject = JSON.parse(jsonString);
console.log(newObject);