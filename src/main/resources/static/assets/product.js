//const burgerContainer = document.getElementById("burger");
//const sidesContainer = document.getElementById("sides");
//const dessertsContainer = document.getElementById("dessert");
const cart = document.getElementById("checkout-container");
const cartCheckOut = document.getElementById("cart-checkout");
const emptyCartNotice = document.getElementById("empty-cart");


 document.querySelector("#show-cart").addEventListener('click', (e) => {
  if (e.target.classList.contains("show-cart-button")) {
  let cart = document.getElementById("cart-section");
  let products = document.getElementById("products");
  let menuCategories = document.getElementById("menu-categories");
  cart.classList.remove("d-none");
  products.classList.add("d-none");
  menuCategories.classList.add("d-none");
    }
  })

  document.querySelector("#cart-section").addEventListener('click', (e)=> {
  if (e.target.classList.contains("close-cart")) {
    let products = document.getElementById("products");
    let menuCategories = document.getElementById("menu-categories");
    e.target.parentElement.classList.add("d-none");
    products.classList.remove("d-none");
    menuCategories.classList.remove("d-none");

  }
  })


//
//   document.querySelector("#show-cart").addEventListener('click', (e) => {
//    if (e.target.classList.contains("show-cart-button")) {
//    let cart = document.getElementById("cart-section");
//    let products = document.getElementById("products");
//      if (cart.classList.contains("d-none")) {
//      e.target.innerText = "Close Cart";
//      cart.classList.remove("d-none");
//      products.classList.add("d-none");
//      } else {
//      e.target.innerText = "View Cart";
//      cart.classList.add("d-none");
//      products.classList.remove("d-none");
//      }
//      }
//    })
//


const mediaQuery = window.matchMedia('(min-width: 575px)');

    window.onresize = function() {
    if (mediaQuery.matches) {
      let cart = document.getElementById("cart-section");
      let products = document.getElementById("products");
      let showCartButton = document.querySelector(".show-cart-button");
      showCartButton.innerText = "View Cart";
      products.classList.remove("d-none");
      cart.classList.add("d-none", "d-sm-block")
     }
}


// FOR LOCAL JSON AND LOCAL STORAGE RETRIEVAL
//
//function addBurger(item) {
//
//    const itemHTML =
//    `
//    <div id ="${item.id}" class="col my-2">
//    <div class="img-container d-flex justify-content-center p-4 mb-4">
//        <img src="${item.img}" class="rounded-top menu-img">
//    </div>
//        <div class="card-body align-items-center rounded my-4 p-0 pb-4 shadow">
//            <div class="d-flex justify-content-between px-4 pt-4">
//                    <h5 class="card-title mr-auto">${item.name}</h5>
//                    <h5 class="card-text ml-auto">$${item.price}</h5>
//            </div>
//            <div class="card-body">
//                <div class="d-flex px-4 pt-2 pb-2 justify-content-between flex-wrap">
//                    <!--<input type="number" id="quantity" class="form-control quantity-container mr-2 mb-2" value="1">-->
//                    <a class="btn add align-self-center" href="#cart-section">Add to Cart</a>
//                 </div>
//                <div class="d-flex justify-content-start">
//                  <a class="btn btn-warning edit mx-4 mt-2 hide" href="#update-container">Edit</a>
//                </div>
//            </div>
//        </div>
//    </div>
//
//`;
//
//    burgerContainer.innerHTML += itemHTML;
//}
//
//function addSides(item) {
//
//    const itemHTML =
//    `
//    <div id ="${item.id}" class="col my-2">
//    <div class="img-container d-flex justify-content-center p-4 mb-4">
//        <img src="${item.img}" class="rounded-top menu-img">
//    </div>
//    <div class="card-body align-items-center rounded my-4 p-0 pb-4 shadow">
//    <div class="d-flex justify-content-between px-4 pt-4">
//                    <h5 class="card-title mr-auto">${item.name}</h5>
//                    <h5 class="card-text ml-auto">$${item.price}</h5>
//            </div>
//            <div class="card-body">
//                <div class="d-flex px-4 pt-2 pb-2 justify-content-between flex-wrap">
//                    <!--<input type="number" id="quantity" class="form-control quantity-container mr-2 mb-2" value="1">-->
//                    <a class="btn add align-self-center" href="#cart-section">Add to Cart</a>
//                 </div>
//                <div class="d-flex justify-content-start">
//                  <a class="btn btn-warning edit mx-4 mt-2 hide" href="#update-container">Edit</a>
//                </div>
//            </div>
//        </div>
//    </div>
//
//`;
//    sidesContainer.innerHTML += itemHTML;
//}
//
//function addDesserts(item) {
//
//    const itemHTML =
//    `
//    <div id ="${item.id}" class="col my-2">
//    <div class="img-container d-flex justify-content-center p-4 mb-4">
//        <img src="${item.img}" class="rounded-top menu-img">
//    </div>
//    <div class="card-body align-items-center rounded my-4 p-0 pb-4 shadow">
//    <div class="d-flex justify-content-between px-4 pt-4">
//                    <h5 class="card-title mr-auto">${item.name}</h5>
//                    <h5 class="card-text ml-auto">$${item.price}</h5>
//            </div>
//            <div class="card-body">
//                <div class="d-flex px-4 pt-2 pb-2 justify-content-between flex-wrap">
//                    <!--<input type="number" id="quantity" class="form-control quantity-container mr-2 mb-2" value="1">-->
//                    <a class="btn add align-self-center" href="#cart-section">Add to Cart</a>
//                 </div>
//                <div class="d-flex justify-content-start">
//                  <a class="btn btn-warning edit mx-4 mt-2 hide" href="#update-container">Edit</a>
//                </div>
//            </div>
//        </div>
//    </div>
//
//`;
//    dessertsContainer.innerHTML += itemHTML;
//}
//
//const addToCartButtons = document.getElementsByClassName("add");
//
//
//function fetchProductList() {
//
//    if (localStorage.getItem('products') == null) {
//        fetch("../assets/productsA.json")
//            .then((response) => response.json())
//            .then(response => {
//                let productsJson = JSON.stringify(response);
//                localStorage.setItem('products', productsJson);
//                let products = JSON.parse(productsJson);
//                for (let i = 0; i < products.length; i++) {
//                    switch (products[i].type) {
//                        case ("burger"):
//                            addBurger(products[i]);
//                            break;
//                        case ("sides"):
//                            addSides(products[i]);
//                            break;
//                        case ("dessert"):
//                            addDesserts(products[i]);
//                            break;
//                    }
//                }
//            })
//    } else {
//        let productsJson = localStorage.getItem('products');
//        let products = JSON.parse(productsJson);
//        for (let i = 0; i < products.length; i++) {
//            switch (products[i].type) {
//                case ("burger"):
//                    addBurger(products[i]);
//                    break;
//                case ("sides"):
//                    addSides(products[i]);
//                    break;
//                case ("dessert"):
//                    addDesserts(products[i]);
//                    break;
//            }
//        }
//    }
//}

/*
function loadProductsFromStorage() {
let productsJson = localStorage.getItem('products');
let products = JSON.parse(productsJson);
    for (let i = 0; i < products.length; i++) {
        switch (products[i].type) {
            case ("burger"):
                addBurger(products[i]);
                break;
            case ("sides"):
                addSides(products[i]);
                break;
            case ("dessert"):
                addDesserts(products[i]);
                break;
        }
    }
}
*/

//CHECKOUT

//display cart items from local storage
//LOCAL STORAGE
function showCartItems() {
    let cartItemsJson = localStorage.getItem('cartItems');
    let cartItems = JSON.parse(cartItemsJson);
    for (let i = 0; i < cartItems.length; i++) {
        const cartItemInfo = document.createElement('li');
        cartItemInfo.classList.add("checkout-item");
        cartItemInfo.innerHTML =

            `
    <div class="d-flex flex-wrap align-items-center justify-content-between">
        <div class="d-flex flex-row flex-wrap p-0 my-2 mx-4 justify-content-between align-items-start w-100">
            <img src=${cartItems[i].img} class="checkout-item-img rounded p-0 col col-sm-5 col-lg-4 col-xl-3 mr-2 order-sm-1">
            <div class="col col-sm-6 col-lg-4 col-xl-3 p-0 order-sm-3 mr-2 order-xl-2">
                <h5 class="checkout card-title">${cartItems[i].name}</h5>
                <h5 class="checkout card-title">$${cartItems[i].price}</h5>
            </div>
            <div class="d-flex col col-sm-6 col-lg-4 col-xl-3 p-0 mb-sm-5 mb-xl-0 justify-content-between align-items-center cart-quantity-container order-sm-2 order-xl-3">
                        <button class="btn btn-warning px-1 remove-button rounded-0">-</button>
                        <h5 class="checkout card-title text-center quantity m-0">${cartItems[i].quantity}</h5>
                        <button class="btn btn-warning px-1 add-button rounded-0">+</button>
            </div>
            <h5 class="col col-sm-5 col-lg-4 col-xl-2 checkout card-title p-0 text-right item-price order-sm-4">$${(((cartItems[i].price) * (cartItems[i].quantity)).toFixed(2))}</h5>
        </div>
    </div>
    <hr>
    `

        cart.appendChild(cartItemInfo);
    }
}
//
////SPRINGBOOT
//function showCartItems() {
//    fetch('http://localhost:8080/cart')
//    .then(response) => response.json())
//    .then(response => {
//    let cartItemsJson = JSON.parse(response);
//        for (let i = 0; i < cartItems.length; i++) {
//            const cartItemInfo = document.createElement('li');
//            cartItemInfo.classList.add("checkout-item");
//            cartItemInfo.innerHTML =
//
//                `
//        <div class="d-flex flex-wrap align-items-center justify-content-center">
//            <img src=${cartItems[i].img} class="checkout-item-img rounded p-0 mx-4 my-2 col-xs-8">
//            <div class="d-flex flex-row row align-items-center p-0 my-2 mx-4 w-100 justify-content-between">
//                <h5 class="card-title col-sm-12 col-md-8 p-0 my-2 text-left">${cartItems[i].name}</h5>
//                <h5 class="card-title col-sm-12 col-md-4 p-0 my-2 text-right item-price">$${cartItems[i].price}</h5>
//            </div>
//            <div class="d-flex col p-0 my-2 mx-4 justify-content-between align-items-center cart-quantity-container">
//                <button class="btn btn-warning px-3 remove-button rounded-0">-</button>
//                <h5 class="card-title text-center quantity w-50 m-0">${cartItems[i].quantity}</h5>
//                <button class="btn btn-warning px-3 add-button rounded-0">+</button>
//            </div>
//        </div>
//        <hr>
//        `
//            cart.appendChild(cartItemInfo);
//        }
//    })
//}


function updateCartTotal() {
    let total = 0;
    let cartTotal = document.getElementById("cart-total");
    let itemsInCart = cart.children;
    for (let i = 0; i < itemsInCart.length; i++) {
        const itemPriceElement = itemsInCart[i].children[0].children[0].children[1].children[1].innerText.replace('$', '');
        console.log(itemPriceElement);
        const itemPrice = parseFloat(itemPriceElement);
        const itemQuantityElement = (itemsInCart[i].children[0].children[0].children[2].children[1].innerText);
        console.log(itemQuantityElement);
        const itemQuantity = parseInt(itemQuantityElement);
        let itemCost = itemPrice * itemQuantity;
        total = parseFloat((total + itemCost).toFixed(2));
    }
    cartTotal.innerText = `$${total}`;
}



function loadCartItemsFromStorage() {
    let cartItemsJson = localStorage.getItem('cartItems');
    let cartItems = JSON.parse(cartItemsJson);
    if ((localStorage.getItem('cartItems') == null) || cartItems.length <= 0) {
        emptyCartNotice.classList.remove('hide');
    } else {
        showCartItems();
        updateCartTotal();
        cartCheckOut.classList.remove('hide');
    }
}

//fetchProductList();
loadCartItemsFromStorage();

const cartTotal = document.getElementById("cart-total");
const itemsInCart = cart.children;
// const editButtons = document.getElementsByClassName('edit')
// const editContainer = document.getElementById("update-container")
// const addToCartButtons = document.getElementsByClassName("add");

function storeItem(product) {
    if (localStorage.getItem('cartItems') == null) {
        let newCart = [];
        newCart.push(product);

        // TODO - send data to backend
        // decide the endpoint
        // replace this localStorage code with a fetch/POST code
        localStorage.setItem('cartItems', JSON.stringify(newCart));
    } else {
        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
}



//  ADD ITEM TO CART
function addItemsToCart(product) {
    const newCartItem = document.createElement('li');
    newCartItem.classList.add('checkout-item');
    newCartItem.innerHTML =
        `
    <div class="d-flex flex-wrap align-items-center justify-content-between">
        <div class="d-flex flex-row flex-wrap p-0 my-2 mx-4 justify-content-between align-items-start w-100">
          <img src=${product.img} class="checkout-item-img rounded p-0 col col-sm-5 col-lg-4 col-xl-3 mr-2 order-sm-1">
            <div class="col col-sm-6 col-lg-4 col-xl-3 p-0 order-sm-3 mr-2 order-xl-2">
             <h5 class="checkout card-title">${product.name}</h5>
             <h5 class="checkout card-title">$${product.price}</h5>
          </div>
            <div class="d-flex col col-sm-6 col-lg-4 col-xl-3 p-0 mb-sm-5 mb-xl-0 justify-content-between align-items-center cart-quantity-container order-sm-2 order-xl-3">
            <button class="btn btn-warning px-1 remove-button rounded-0">-</button>
            <h5 class="checkout card-title text-center quantity m-0">${product.quantity}</h5>
            <button class="btn btn-warning px-1 add-button rounded-0">+</button>
          </div>
          <h5 class="col col-sm-5 col-lg-4 col-xl-2 checkout card-title p-0 text-right item-price order-sm-4">$${product.price * product.quantity}</h5>
        </div>
    </div>
    <hr>
    `
    cart.appendChild(newCartItem);
    emptyCartNotice.classList.add('hide');
    cartCheckOut.classList.remove('hide');

}

function createCartItem(productId, productName, productType, productImg, productPrice) {
    return {
        id: productId,
        name: productName,
        type: productType,
        img: productImg,
        price: productPrice,
        description: null
    }
}

document.querySelector("#products").addEventListener('click', (e) => {
if (e.target.classList.contains("add")) {
    let productId = e.target.parentElement.parentElement.parentElement.parentElement.attributes.id.value;
    let productName = e.target.parentElement.parentElement.parentElement.children[0].children[0].innerText;
    let productType = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.attributes.id.value;
    let productImg = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].attributes.src.value;
    let productPrice = e.target.parentElement.parentElement.parentElement.children[0].children[1].innerText.replace('$', '');
    let itemNames = [];
    for (let i = 0; i < itemsInCart.length; i++) {
        let itemName = itemsInCart[i].children[0].children[0].children[1].children[0].innerText;
        console.log(itemName);
        itemNames.push(itemName);
    }

    if (itemNames.includes(productName)) {
        let itemCartIndex = itemNames.indexOf(productName);
        let itemQuantityElement = itemsInCart[itemCartIndex].children[0].children[0].children[2].children[1];
        console.log(itemQuantityElement);
        let itemQuantity = parseInt(itemQuantityElement.innerText);
        console.log(itemQuantity);
        let itemPriceElement = itemsInCart[itemCartIndex].children[0].children[0].children[1].children[1];
        let itemPriceValue = itemPriceElement.innerText.replace('$', '');
        let itemPrice = parseFloat(itemPriceValue);
        console.log(itemPrice);
        itemQuantity = itemQuantity + 1;
        let itemCost = ((itemPrice * itemQuantity).toFixed(2));
        itemQuantityElement.innerText = itemQuantity;
        let updatePriceElement = itemsInCart[itemCartIndex].children[0].children[0].children[3];
        updatePriceElement.innerText = `$${itemCost}`;
        let cartScroll = itemsInCart[itemCartIndex];
        cartScroll.scrollIntoView(false);
        updateCartTotal();

        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        for (let i = 0; i < cartItems.length; i++) {
            if (productName == cartItems[i].name) {
                cartItems[i].quantity++;

                // TODO fetch/POST
                // update endpoint
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
        }

    } else {
        const newCartItem = createCartItem(productId, productName, productType, productImg, productPrice);
        newCartItem.quantity = 1
        storeItem(newCartItem);
        addItemsToCart(newCartItem);
        updateCartTotal();
        let cartScroll = cart.lastChild;
        cartScroll.scrollIntoView(false);
    }


}
});
/*for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', () => {
        let productsJson = localStorage.getItem('products');
        let products = JSON.parse(productsJson);
        let productId = products[i].id;
        let productName = products[i].name;
        let productType = products[i].type;
        let productImg = products[i].img;
        let productPrice = products[i].price;
        let itemNames = [];
        for (let i = 0; i < itemsInCart.length; i++) {
            let itemName = itemsInCart[i].children[0].children[1].children[0].innerText;
            console.log(itemName);
            itemNames.push(itemName);
        }
        if (itemNames.includes(productName)) {
            let itemCartIndex = itemNames.indexOf(productName);
            let itemQuantityElement = itemsInCart[itemCartIndex].children[0].children[2].children[1];
            let itemQuantity = parseInt(itemQuantityElement.innerText);
            itemQuantity = itemQuantity + 1;
            itemQuantityElement.innerText = itemQuantity;
            updateCartTotal();
            let cartItems = JSON.parse(localStorage.getItem('cartItems'));
            for (let i = 0; i < cartItems.length; i++) {
                if (productName == cartItems[i].name) {
                    cartItems[i].quantity++;
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                }
            }
        } else {
            const newCartItem = createCartItem(productId, productName, productType, productImg, productPrice);
            newCartItem.quantity = 1
            storeItem(newCartItem);
            addItemsToCart(newCartItem);
            updateCartTotal();
        }

    })
}
  */
// CHANGE ITEM QUANTITY IN CART

//increase cart item quantity

document.querySelector("#checkout-container").addEventListener('click', (e) => {
    let cartItemsJson = localStorage.getItem('cartItems');
    let cartItems = JSON.parse(cartItemsJson);

    if (e.target.classList.contains("add-button")) {
        for (let i = 0; i < cartItems.length; i++) {
            let productName = e.target.parentElement.parentElement.children[1].children[0].innerText;
            if (productName == cartItems[i].name) {
                cartItems[i].quantity += 1;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                let itemQuantityElement = e.target.parentElement.children[1];
                let itemPriceElement = e.target.parentElement.parentElement.children[1].children[1];
                let itemPriceValue = itemPriceElement.innerText.replace('$', '');
                console.log(itemPriceValue);
                let itemPrice= parseFloat(itemPriceValue);
                console.log(itemPrice);
                let itemQuantity = parseInt(itemQuantityElement.innerText);
                itemQuantity = itemQuantity + 1;
                let itemCost = ((itemPrice * itemQuantity).toFixed(2));
                itemQuantityElement.innerText = itemQuantity;
                let updatePriceElement = e.target.parentElement.parentElement.children[3];
                updatePriceElement.innerText = `$${itemCost}`;
                break;
            }
        }
        updateCartTotal();

    }
});

// decrease cart item quantity and remove item from cart

document.querySelector("#checkout-container").addEventListener('click', (e) => {
    let cartItemsJson = localStorage.getItem('cartItems');
    let cartItems = JSON.parse(cartItemsJson);


    if (e.target.classList.contains("remove-button")) {
            let productName = e.target.parentElement.parentElement.children[1].children[0].innerText;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].quantity > 1) {
                if (productName == cartItems[i].name) {
                    cartItems[i].quantity -= 1;
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));

                let itemQuantityElement = e.target.parentElement.children[1];
                               let itemPriceElement = e.target.parentElement.parentElement.children[1].children[1];
                               let itemPriceValue = itemPriceElement.innerText.replace('$', '');
                               console.log(itemPriceValue);
                               let itemPrice= parseFloat(itemPriceValue);
                               console.log(itemPrice);
                               let itemQuantity = parseInt(itemQuantityElement.innerText);
                               itemQuantity = itemQuantity - 1;
                               let itemCost = ((itemPrice * itemQuantity).toFixed(2));
                               itemQuantityElement.innerText = itemQuantity;
                               let updatePriceElement = e.target.parentElement.parentElement.children[3];
                               updatePriceElement.innerText = `$${itemCost}`;
                    updateCartTotal();
                    break;

                }
            }
            else if (cartItems[i].quantity <= 1) {
                if (productName == cartItems[i].name) {
                    let itemInCart = e.target.parentElement.parentElement.parentElement.parentElement;
                    cartItems.splice(cartItems.indexOf(cartItems[i]), 1)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    itemInCart.remove();
                    updateCartTotal();
                    break;
                }
            }
        }
        recheckCart();

    }

});


// check if cart has items and display/ hide total amount or empty cart notice
function recheckCart() {
    if (itemsInCart.length > 0) {
        emptyCartNotice.classList.add('hide');
        cartCheckOut.classList.remove('hide');
    } else {
        emptyCartNotice.classList.remove('hide');
        cartCheckOut.classList.add('hide');
    }
}





