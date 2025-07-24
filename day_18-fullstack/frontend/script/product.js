const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const brand = document.getElementById("brand").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const rating = document.getElementById("rating").value;
  const category = document.getElementById("category").value;

  const obj = {
    title,
    brand,
    image,
    price,
    description,
    rating,
    category,
  };

  try {
    const response = await fetch("http://localhost:8000/api/product/create", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(obj),
    });

    const res = await response.json();
    Toastify({
      text: res.message,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "green",
    }).showToast();

    console.log(res);
  } catch (error) {
    console.error("Error:", error);
  }
});

async function showData() {
  let token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8000/api/product/get", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  console.log(response);

  window.location.href =
    "http://localhost:5500/day_18-fullstack/frontend/product.html";

  let res = await response.json();
  console.log(res);
  let data = res.products;

  let productsContainer = document.getElementById("productData");
  productsContainer.innerHTML = "";

  if (data.length === 0) {
    productsContainer.innerHTML = "<h2>Product is empty ;)</h2>";
    return;
  }
  data = data.reverse();
  data.forEach((el, index) => {
    let productBox = document.createElement("div");
    productBox.className = "product-box";

    let heading = document.createElement("h3");
    heading.innerText = el.brand;
    let description = document.createElement("h3");
    description.innerText = el.description;
    let category = document.createElement("h3");
    category.innerText = el.category;

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    name.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = `Price: $${el.price}`;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${el.rating}`;
    productBox.append(heading, img, name, price, rating, category, description);
    document.getElementById("productData").append(productBox);
  });
}
showData();
