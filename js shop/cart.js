
window.addEventListener("load", function () {
    var totalPrice = 0;
    var cart = JSON.parse(this.localStorage.getItem("cart"));
    console.log(cart);

    for (var i = 0; i < cart.length; i++) {
        var item = document.createElement("div");
        var itemDetails = document.createElement("div");
        var title = document.createElement("h2");
        var price = document.createElement("p");
        var img = document.createElement("img");

        title.innerText = cart[i].title;
        price.innerText = "$" + cart[i].price;
        img.src = cart[i].thumbnail;

        itemDetails.appendChild(title);
        itemDetails.appendChild(price);
        item.appendChild(itemDetails);
        item.appendChild(img);

        item.setAttribute("class", "cart-item");

        document.body.appendChild(item);

        totalPrice += cart[i].price;
    }

    var totalPriceText = document.createElement("h3");
    totalPriceText.innerText = "Total of: $" + totalPrice;
    document.body.appendChild(totalPriceText);
});

function showCart() {}
