/* 
Create a Magic 8-Ball program that emulates the 
classic fortune-telling toy. The user will input 
a yes-or-no question, and the program will output 
a random response from the 8-Ball. Implement the 
program using conditional statements to select and 
display one of several predefined responses.
*/

//let response = prompt("Ask your question");

function askQuestion() {
  const questionInput = document.getElementById("questionInput");
  const responseElement = document.getElementById("response");

  const randNum = Math.floor(Math.random() * 8) + 1;

  switch (randNum) {
    case 1:
      responseElement.textContent = "Oh nooo, I crashed my browser again!!!!!!";
      break;
    case 2:
      responseElement.textContent =
        "JavaScript is fun to study, but sometimes you feel like banging your head against the wall.....don't please!!!";
      break;
    case 3:
      responseElement.textContent =
        "Follow excellence, and success will chase you... '3 Idiots' is my favourite movie ever.";
      break;
    case 4:
      responseElement.textContent = "Please wake me up when I'm famous.";
      break;
    case 5:
      responseElement.textContent = "East or West home is the best!";
      break;
    case 6:
      responseElement.textContent =
        "Learning programming is not a child's play. You have to burn the midnight oil to become a master in it.";
      break;
    case 7:
      responseElement.textContent =
        "How far is the Earth to the Moon? I think I need to ask Mr. Google or, better still, Elon Musk.";
      break;
    case 8:
      responseElement.textContent = "Hurray it is Friday!!!!!!!";
      break;
    default:
      responseElement.textContent = "Invalid question.";
  }
      questionInput.value = "";
}

function useEnterKey(event) {
  if (event.key === "Enter") {
      askQuestion();
  }
}