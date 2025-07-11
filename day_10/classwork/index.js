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

  try {
    const res = await fetch(apiUrl);
    const response = await res.json();
    let data = response.products;

    // Show data
    getData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

myPromise();
function getData(data){
    return data;
}
let data = getData();
let searchInput = document.getElementById("search");
let sortSelect = document.getElementById("sort");
let filterSelect = document.getElementById("filter");
let productsContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("CartData")) || [];

let debounceTimer;


function renderProducts(arr) {
    productsContainer.innerHTML = "";
    document.querySelector(".loader-container").style.display = "none"

    arr.forEach((el) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating}`;

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
    debounceTimer = setTimeout(() => {
        let searchTerm = searchInput.value.toLowerCase();
        let filteredProducts = data.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        renderProducts(filteredProducts);
    }, 3000);
}

function handleSort() {
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
    let selectedCategory = filterSelect.value;
    let filteredProducts = selectedCategory === "all"
        ? data
        : data.filter(product => product.category === selectedCategory);

    selectedCategory == "all" ? data : data.filter(product => product.category === selectedCategory);


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
    alert(`${product.name} added to cart!`);
    console.log("Cart:", cart);
}

searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);
filterSelect.addEventListener("change", handleFilter);

// Initial render
setTimeout(() => {
    renderProducts(data);
}, 5000)

function cartPage() {
    window.location.href = "cart.html";
}