/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const divElement = document.getElementById("content");

function updateText(event) { 
    divElement.textContent = "Hello, World!";
    setTimeout(() => {
        divElement.textContent = "Change the text";
    }, 2000);
}

divElement.addEventListener('click', updateText);
