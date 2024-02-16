/* 
1. Listens for changes on the pancake type select box and all checkbox inputs.
2. Calculates the total price based on selections:
   - Pancake type has a base price.
   - Each topping adds $1 to the base price.
   - Extras have their specific prices.
3. Displays the dynamically updated total price in the #totalPrice span.

Use the `addEventListener` method for listening to changes and the `forEach` method for iterating through checkbox inputs to calculate the total price. Remember to parse checkbox values as integers before adding them to the total.

# Optional Enhancements

- Integrate a font from Google Fonts to apply to all elements on the page. Select a font that aligns with the modern and appealing aesthetic of the project.
- Adjust the pancake image to cover 50% of the page and extend to full viewport height, creating a visually striking layout.
- Implement a captivating animation for the price display to draw attention to price changes.
- Ensure your application looks great on both desktop and mobile devices by employing responsive design techniques. */

const form = document.querySelector(".form-container");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");
const button = document.querySelector("button");

let total;
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  const totalPriceElement = document.querySelector("#totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value);
  totalPriceElement.textContent = `$${total}`;
  checkToppings();


  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

const addItem = (itemName, category) => {
  if (category === "toppings") {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};

// const removeItem = () => {};

const checkToppings = () => {
  toppings = [];
  extras = [];

  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;

    if (item.checked) {
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  }
  //console.log("toppings array", toppings);
  //console.log("extras array", extras);
};

const displayOrder = () => {
  const customerName = document.querySelector("#customerName").value;
  const orderType = document.querySelector("#order_type");
  const orderToppings = document.querySelector("#order_toppings");
  const orderExtras = document.querySelector("#order_extras");
  const orderName = document.querySelector("#order_name");
  const orderPrice = document.querySelector("#order_price")

  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings.join(", ");
  orderExtras.textContent = extras.join(", ");
  orderName.textContent = customerName;
  orderPrice.textContent = total;
};

form.addEventListener("change", pancakePriceCalc);
button.addEventListener("click", displayOrder);

//const typeSelect = document.querySelector("#type");
//This is not querySelectorAll because Select is only picking just one option by default.


