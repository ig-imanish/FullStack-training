let CartData = JSON.parse(localStorage.getItem("CartData"));


console.log(CartData)

function showData(data) {
    let productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    if (data.length === 0) {
        productsContainer.innerHTML = "<h2>Cart is empty</h2>";
        return;
    }
    data.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let rating = document.createElement("p");
        rating.innerText = el.rating;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
            deleteFun(el, index);
        })
        productBox.append(heading, img, name, price, rating, button);
        document.getElementById("products").append(productBox);
    });
}
showData(CartData)
function deleteFun(el, index) {
    deletedCartData=CartData.splice(index, 1);
    console.log(deletedCartData)
    localStorage.setItem("CartData", JSON.stringify(CartData));
    showData(CartData);
}