/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const divElement = document.getElementById("content");

function updateText() { 
    divElement.textContent = "Hello, World!";
    
    // Additional information
    setTimeout(() => {
        divElement.textContent = "Change the text";
    }, 2000);
}

divElement.addEventListener('click', updateText);

// Margit Version

//console.log(divElement.textContent);

const divElement2 = () => (divElement = document.getElementById("content")).textContent = "Hello, World!";

// Vanilla means plain JavaScript codes with any frameworks or library
