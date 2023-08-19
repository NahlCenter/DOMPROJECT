var items = [
    {
      name: "Produit 1",
      price: 10,
      quantity: 1,
      image: "./images/10UNITES.jpg",
    },
    {
      name: "Produit 2",
      price: 30,
      quantity: 1,
      image: "./images/PHOTO1.jpg",
    },
    {
      name: "Produit 3",
      price: 10,
      quantity: 1,
      image: "./images/PHOTO2.jpg",
    },
    {
      name: "Produit 4",
      price: 10,
      quantity: 1,
      image: "./images/PHOTO3.jpg",
    },
  ];
  
  var cartElement = document.getElementById("cart");
  
  items.forEach(function (item) {
    var itemElement = document.createElement("div");
    itemElement.setAttribute("class", 'itemElement')
    itemElement.classList.add("item");

      
    var productImage = document.createElement("img");
    productImage.setAttribute("src", item.image);
    productImage.setAttribute("class", "productImage");
    itemElement.appendChild(productImage);
  
  
    var nameElement = document.createElement("span");
    nameElement.textContent = item.name;
    itemElement.appendChild(nameElement);
  
    var quantityElement = document.createElement("span");
    quantityElement.textContent = "quantité " + item.quantity;
    itemElement.appendChild(quantityElement);
  
    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", function () {
      item.quantity++;
      quantityElement.textContent = "quantité " + item.quantity;
      updateTotalPrice();
    });
    itemElement.appendChild(increaseButton);
  
    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", function () {
      if (item.quantity > 0) {
        item.quantity--;
        quantityElement.textContent = "quantité " + item.quantity;
        updateTotalPrice();
      }
    });
    itemElement.appendChild(decreaseButton);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", function () {
      cartElement.removeChild(itemElement);
      items = items.filter(function (i) {
        return i !== item;
      });
      updateTotalPrice();
    });
    itemElement.appendChild(deleteButton);
  
    var likeButton = document.createElement("button");
    likeButton.textContent = "like";
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("liked");
      if (likeButton.classList.contains("liked")) {
        item.isLiked = true;
        likeButton.style.color = "red";
      } else {
        item.isLiked = false;
        likeButton.style.color = "black";
      }
    });


    var PriceElement = document.createElement("span");
    PriceElement.textContent = item.price;
    itemElement.appendChild(PriceElement);


    itemElement.appendChild(likeButton);  
    cartElement.appendChild(itemElement);
  
    var separator = document.createElement("hr");
    cartElement.appendChild(separator);
  });
  
  function updateTotalPrice() {
    var totalPrice = items.reduce(function (total, item) {
      return total + item.price * item.quantity;
    }, 0);
  
    var totalPriceElement = document.getElementById("total-price");
  
    totalPriceElement.textContent = "Total Price en DH " + totalPrice;
  }
  
  updateTotalPrice();