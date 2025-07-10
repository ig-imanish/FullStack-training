// promise

// async function fetchData(){

// }
// let text = "Hello World!";
// console.log(text);
// setTimeout(() => {
//   console.log("I am inside setTimeout() - 2000ms");
// }, 2000);

// setTimeout(() => {
//   console.log("I am inside setTimeout() - 0ms");
// }, 0);

let apiUrl = "https://fakestoreapi.in/api/products";

const myPromise = async () => {
  const response = await fetch(apiUrl);
  const res = await response.json();
  let products = res.products;

  let display = document.getElementById("display");

  let product = products[0];

  let idElem = document.createElement("h2");
  idElem.innerText = `ID: ${product.id}`;

  let titleElem = document.createElement("h3");
  titleElem.innerText = `Title: ${product.title}`;

  let priceElem = document.createElement("p");
  priceElem.innerText = `Price: ₹${product.price}`;

  let descElem = document.createElement("p");
  descElem.innerText = `Description: ${product.description}`;

  let brandElem = document.createElement("p");
  brandElem.innerText = `Brand: ${product.brand}`;

  let modelElem = document.createElement("p");
  modelElem.innerText = `Model: ${product.model}`;

  let colorElem = document.createElement("p");
  colorElem.innerText = `Color: ${product.color}`;

  let categoryElem = document.createElement("p");
  categoryElem.innerText = `Category: ${product.category}`;

  let discountElem = document.createElement("p");
  discountElem.innerText = `Discount: ${product.discount}%`;

  display.append(
    idElem,
    titleElem,
    priceElem,
    descElem,
    brandElem,
    modelElem,
    colorElem,
    categoryElem,
    discountElem
  );
};
console.log("I am at Bottom!");
myPromise();

console.log("I am at Bottom!");
