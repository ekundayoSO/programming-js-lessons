"use strict";

class Car {
  constructor(licensePlate, maker, model, currentOwner, price, color) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.currentOwner = currentOwner;
    this.price = price;
    this.color = color;
  }
}

let allNewCar = [];

const input = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit");
const carTableContainer = document.getElementById("carTableContainer");

function collectCarDetails() {
  const carNumber = document.querySelector("#car-number").value;
  const carMaker = document.querySelector("#car-maker").value;
  const carModel = document.querySelector("#car-model").value;
  const carOwner = document.querySelector("#car-owner").value;
  const carPrice = document.querySelector("#car-price").value;
  const carColor = document.querySelector("#car-color").value;

  const newCarObj = new Car(
    carNumber,
    carMaker,
    carModel,
    carOwner,
    `$${carPrice}`,
    carColor
  );
  // Adding newcars to the empty array
  allNewCar.push(newCarObj);
  // console.log(allNewCar);
}

function displayCars() {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const headers = [
    "License Plate",
    "Maker",
    "Model",
    "Owner",
    "Price",
    "Color",
  ];
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  allNewCar.forEach((car) => {
    const row = table.insertRow();
    const values = [
      car.licensePlate,
      car.maker,
      car.model,
      car.currentOwner,
      car.price,
      car.color,
    ];
    values.forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });

  carTableContainer.appendChild(table);
}

const clickBtn = document.querySelector(".search-field button");
function searchFun() {
  const searchbox = document.querySelector("#search");
  const licensePlate = searchbox.value.trim();

  if (!licensePlate) {
    searchPage.textContent = "Please enter a license plate.";
    return;
  }

  // Find the car with the given license number
  const foundCar = allNewCar.find((car) => car.licensePlate === licensePlate);

  if (foundCar) {
    // Display car details if found
    carTableContainer.textContent = `Maker: ${foundCar.maker}, Model: ${foundCar.model}, Current Owner: ${foundCar.currentOwner}, Price: ${foundCar.price}, Color: ${foundCar.color}`;
    searchbox.value = "";

  } else {
    const errorPara = document.createElement("p");
    errorPara.textContent = `This license plate ${searchbox.value} not found.`;
    carTableContainer.appendChild(errorPara);
    searchbox.value = "";
  }
}

submitBtn.addEventListener("click", collectCarDetails);
submitBtn.addEventListener("click", displayCars);
clickBtn.addEventListener("click", searchFun);
