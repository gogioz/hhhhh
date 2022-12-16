var api = new XMLHttpRequest();
api.open("GET", "https://api.itbook.store/1.0/search/java");
api.send();
api.onreadystatechange = function () {
    if (api.readyState == 4 && api.status == 200) {
        var books = JSON.parse(api.responseText).books;
        console.log(books)
        var booksContainer = document.getElementById("products-container");
        for (var i = 0; i < books.length; i++) {
            var newdiv = document.createElement('div');
            var bookImg = document.createElement('img');
            var bookTitle = document.createElement("h3");
            var isbn = document.createElement('div')
            var bookPrice = document.createElement("p");
            var add = document.createElement('div');
            var cartBtn = document.createElement("button");

            newdiv.classList.add("book")
            bookImg.classList.add("bookImg")
            bookTitle.classList.add("title")
            bookPrice.classList.add("price")
            isbn.classList.add("isbn")
            cartBtn.innerText = "Add to cart";

            bookImg.setAttribute("src", books[i].image)
            bookImg.src = books[i].image;
            bookTitle.innerText = books[i].title;
            bookPrice.innerText = books[i].price;
            isbn.innerText = books[i].isbn13;

            newdiv.appendChild(bookImg);
            newdiv.appendChild(bookTitle);
            newdiv.appendChild(bookPrice);
            newdiv.appendChild(isbn);
            newdiv.setAttribute("class", "card");
            // console.log(newdiv)
            cartBtn.classList.add("buttonDiv")
            cartBtn.addEventListener("click", function () {
                var cart = JSON.parse(localStorage.getItem("cart")) || [];
                console.log("you clicked on", bookTitle)
                //   cart.push(books.isbn13);
                //   localStorage.setItem("cart", JSON.stringify(cart));
                //   alert("Item added to cart!");
            });

            newdiv.appendChild(cartBtn);
            booksContainer.appendChild(newdiv);

        }
    }
}
