/* 
Create functionality where an input field's value is continuously displayed and updated in a dedicated area on the page as the user types, using the onchange event.*/

/* 
Instructions:

HTML:
- Make a basic HTML
- Include an <input type="text"> element where the user can enter text.
- Add a <div> element with an ID (e.g., id="displayText"), which will be used to display the input field's value.
- Remember to connect HTML and JS files

JavaScript:

Write JavaScript code that adds an event listener to the input field, specifically listening for the change event. 

The event listener's function should:
- Retrieve the current value from the input field.
- Update the textContent of the displayText <div> to match the input field's value.
- To have the display update more dynamically (as the user types), consider using the input event instead of or in addition to the change event. 
*/

const input = document.querySelector("#inputField");
const div = document.querySelector("#displayText");

function updateDiv(event) {
    div.textContent = event.target.value;
    input.value = "";  
}

function inputEvent() {
   /*  div.textContent = event.target.value;  */
   /* div.textContent = input.value; */
   console.log(input.value);
}

input.addEventListener('change', updateDiv);  
input.addEventListener("input", inputEvent);


// Margit Version

const input2 = document.querySelector("#inputField");
const text = document.querySelector("#displayText");

const changeText = () => {
    //console.log(text);
    //console.log(input.value);
    text.textContent = input.value;
}

input2.addEventListener('input', changeText);  









