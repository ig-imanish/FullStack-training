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
  const res = await fetch(apiUrl);
  const response = await res.json();
  let data = response.products;

  showData(data);
  //   console.log(data)
};

myPromise();

const showData = async (data) => {
  let parent = document.getElementById("parent");

  data.forEach((ele, index) => {
    let brand = document.createElement("h1");

    brand.innerText = ele.brand;

    let img = document.createElement("img");
    img.src = ele.image;
    img.style.width = "100px";
    img.style.height = "100px";
    let title = document.createElement("p");
    title.innerText = ele.title;
    let price = document.createElement("p");
    price.innerText = ele.price;
    let discount = document.createElement("p");

    if (ele.discount !== undefined) {
      discount.innerText = ele.discount + "%";
    } else {
      discount.innerText = "0%";
    }

    discount.style.padding = "5px";
    discount.style.background = "red";

    let product = document.createElement("div");

    product.style.border = "1px solid";
    product.style.display = "flex";
    product.style.justifyContent = "center";
    product.style.alignItems = "center";
    product.style.margin = "7px";
    product.style.padding = "7px";

    product.append(brand, img, title, price, discount);
    parent.append(product);
  });
  console.log(data);
};
console.log("I am at Bottom!");
