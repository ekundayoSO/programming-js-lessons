const form = document.querySelector(".form-container");

const priceCalc = () => {
    const typeSelect = document.querySelector("#type");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const priceBanner = document.querySelector("#totalPrice");

    let totalAmount = parseInt(typeSelect.value);

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            totalAmount += parseInt(checkbox.value);
        }

        priceBanner.textContent = `$${totalAmount}`;

    }


    //console.log(checkboxes);
    //console.log(totalAmount);
};


form.addEventListener("change", priceCalc);


// forEach() or for of() ---> 