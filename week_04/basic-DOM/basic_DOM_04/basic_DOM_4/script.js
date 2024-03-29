const selection = document.getElementById("type");
let priceElement = document.querySelector(".price-display h3 span");
let imgElement = document.querySelector(".price-banner span");
let checkboxes = document.querySelectorAll(
  '.customization-section input[type="checkbox"]'
);

function priceImgFun(event) {
  priceElement.textContent = `$${event.target.value}`;
  imgElement.textContent = `$${event.target.value}`;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // Get the value from each checkbox
    const checkboxValue = parseInt(checkbox.value);
    let totalPrice = parseInt(priceElement.textContent.replace("$", ""));
    let imgPrice = parseInt(imgElement.textContent.replace("$", ""));

    // Update total price with the checkbox status
    if (checkbox.checked) {
      totalPrice += checkboxValue;
      imgPrice += checkboxValue;
    } else {
      totalPrice -= checkboxValue;
      imgPrice -= checkboxValue;
    }
    priceElement.textContent = `$${totalPrice}`;
    imgElement.textContent = `$${imgPrice}`;
    imgElement.classList.add('enlarge');

        // Remove the class after the animation duration 
        setTimeout(() => {
            imgElement.classList.remove('enlarge');
        }, 400);
  });
});

selection.addEventListener("change", priceImgFun);
