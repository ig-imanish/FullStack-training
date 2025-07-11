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

let apiUrl = "https://fakestoreapi.com/products";
let data = [];

const myPromise = async () => {
  try {
    const res = await fetch(apiUrl);
    const response = await res.json();
    data = response;

    document.querySelector(".loader-container").style.display = "none";
    renderProducts(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector(".loader-container").style.display = "none";
  }
};

myPromise();
let searchInput = document.getElementById("search");
let sortSelect = document.getElementById("sort");
let filterSelect = document.getElementById("filter");
let productsContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("CartData")) || [];

let debounceTimer;

function renderProducts(arr) {
  if (!arr || !Array.isArray(arr)) {
    console.log("No data to render");
    return;
  }
  console.log(arr);

  productsContainer.innerHTML = "";

  arr.forEach((el) => {
    let productBox = document.createElement("div");
    productBox.className = "product-box";

    let heading = document.createElement("h3");
    heading.innerText = el.category;

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    name.innerText = el.title;
    // console.log(el.name)

    let price = document.createElement("p");
    price.innerText = `Price: $${el.price}`;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${el.rating.rate} | Count: ${el.rating.count}`;

    let button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.addEventListener("click", () => {
      addToCart(el);
    });

    productBox.append(heading, img, name, price, rating, button);
    productsContainer.append(productBox);
  });
}

function handleSearch() {
  clearTimeout(debounceTimer);
  document.querySelector(".loader-container").style.display = "";
  debounceTimer = setTimeout(() => {
    // Check if data is available
    if (!data || !Array.isArray(data)) {
      console.log("Data not yet loaded");
      return;
    }

    let searchTerm = searchInput.value.toLowerCase();
    let filteredProducts = data.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm);
    });
    renderProducts(filteredProducts);
    document.querySelector(".loader-container").style.display = "none";
  }, 3000);
}

function handleSort() {
  // Check if data is available
  if (!data || !Array.isArray(data)) {
    console.log("Data not yet loaded");
    return;
  }

  let sortedProducts = [...data];
  let sortBy = sortSelect.value;

  if (sortBy === "priceLowHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "ratingHighLow") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "ratingLowHigh") {
    sortedProducts.sort((a, b) => a.rating - b.rating);
  }

  renderProducts(sortedProducts);
}

function handleFilter() {
  // Check if data is available
  if (!data || !Array.isArray(data)) {
    console.log("Data not yet loaded");
    return;
  }

  let selectedCategory = filterSelect.value;
  let filteredProducts =
    selectedCategory === "all"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  selectedCategory == "all"
    ? data
    : data.filter((product) => product.category === selectedCategory);

  renderProducts(filteredProducts);
}

function addToCart(product) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == product.id) {
      return alert(`${cart[i].name} is already added in cart`);
    }
  }
  cart.push(product);
  localStorage.setItem("CartData", JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
  console.log("Cart:", cart);

}

searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);
filterSelect.addEventListener("change", handleFilter);

// Remove the setTimeout as data is now rendered when loaded

function cartPage() {
  window.location.href = "cart.html";
}
