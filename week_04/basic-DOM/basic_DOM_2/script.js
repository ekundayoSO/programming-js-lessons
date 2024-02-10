/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const inputElement = document.querySelector("#fruitInput");
const ul = document.querySelector("#fruitList");
const button = document.querySelector("#addFruitBtn")

function newInputFun() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputElement.value));
    ul.appendChild(li);
    inputElement.value = "";
}

button.addEventListener('click', newInputFun);


// Margit Version
/* const button2 = document.querySelector("#addFruitBtn")

const adddetails = () => {
    const fruitInput = document.querySelector("#fruitInput");
    const fruitList = document.querySelector("#fruitList");

    if (fruitInput) {
    const newLi = document.createElement("li");
    newLi.textContent = fruitInput.value.trim();
    fruitList.appendChild(newLi);
    fruitInput.value = "";
    } else {
        alert("Please enter a fruit name");
    }
};

button2.addEventListener('click', adddetails); */

