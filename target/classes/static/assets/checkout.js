//const burgerContainer = document.getElementById("burger");
//const sidesContainer = document.getElementById("sides");
//const dessertsContainer = document.getElementById("dessert");
const cart = document.getElementById("checkoutpage-container");
const cartCheckOut = document.getElementById("cart-checkout");
const emptyCartNotice = document.getElementById("empty-cart");


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
            <img src=${cartItems[i].img} class="checkout-item-img rounded p-0 col col-sm-5 col-lg-4 col-xl-3 mr-2">
            <div class="col col-sm-6 col-lg-4 col-xl-3 p-0  mb-sm-5 mb-xl-0">
                <h5 class="checkout card-title text-xs-left text-sm-right text-lg-left">${cartItems[i].name}</h5>
                <h5 class="checkout card-title text-xs-left text-sm-right text-lg-left">$${cartItems[i].price}</h5>
            </div>
            <div class="d-flex col col-sm-6 col-lg-5 col-xl-3 p-0 justify-content-center align-items-center p-0">
                        <button class="btn d-none btn-warning px-1 remove-button rounded-0">-</button>
                        <h5 class="checkout card-title text-center quantity m-0">Quantity: ${cartItems[i].quantity}</h5>
                        <button class="btn d-none btn-warning px-1 add-button rounded-0">+</button>
            </div>
            <h5 class="col col-sm-5 col-lg-4 col-xl-2 checkout card-title p-0 text-right item-price">$${(((cartItems[i].price) * (cartItems[i].quantity)).toFixed(2))}</h5>
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

function deliveryCostCheck() {
const postalCodeElement = document.getElementById("postalcode");
const postalCode = postalCodeElement.innerText.replace('Delivery to: ', '')
const postalSector = postalCode.substring(0,2);
const deliveryCostContainer = document.getElementById("delivery");
const postalsectors = [42, 43, 44, 45, 46, 47, 48, 49, 50, 81, 51, 52];
for (let i = 0; i < postalsectors.length; i++) {
  if (postalsectors[i] == postalSector) {
  let deliveryCost = 8;
    deliveryCostContainer.innerText = `$${deliveryCost}` ;
  break;
  } else {
  let deliveryCost = 10;
   deliveryCostContainer.innerText = `$${deliveryCost}` ;
  }
 }
}



function updateCartTotal() {

//get subtotal
    let subTotal = 0;
    let cartQuantity = 0;
    const cartSubTotal = document.getElementById("cart-subtotal");
    const cartTotalContainer = document.getElementById("cart-total");

    let itemsInCart = cart.children;

    for (let i = 0; i < itemsInCart.length; i++) {
        const itemPriceElement = itemsInCart[i].children[0].children[0].children[1].children[1].innerText.replace('$', '');
        const itemPrice = parseFloat(itemPriceElement);
        const itemQuantityElement = (itemsInCart[i].children[0].children[0].children[2].children[1].innerText.replace('Quantity: ', ''));
        const itemQuantity = parseInt(itemQuantityElement);
        cartQuantity = cartQuantity + itemQuantity;
        let itemCost = itemPrice * itemQuantity;
        subTotal = parseFloat((subTotal + itemCost).toFixed(2));
    }
    cartSubTotal.innerText = `$${subTotal}`;

//get delivery fee
    deliveryCostCheck();
    let deliveryFeeContainer = document.getElementById("delivery");
    let deliveryFeeElement = deliveryFeeContainer.innerText.replace('$','');
    let deliveryFee = parseInt(deliveryFeeElement);


//get small order fee
    let smallOrderFee = 20 - subTotal;
    let smallOrderFeeContainer = document.querySelector("#small-order")
    if (smallOrderFee > 0) {
    smallOrderFeeContainer.innerText = `$${smallOrderFee}`;
    } else {
    smallOrderFee = 0;
    smallOrderFeeContainer.innerText = "$0";
    }

//calculate total
    let cartTotal = parseFloat((subTotal + smallOrderFee + deliveryFee).toFixed(2));
    cartTotalContainer.innerText = `$${cartTotal}`;

}

function loadCartItemsFromStorage() {
    let cartItemsJson = localStorage.getItem('cartItems');
    let cartItems = JSON.parse(cartItemsJson);
    if ((localStorage.getItem('cartItems') == null) || cartItems.length <= 0) {
        emptyCartNotice.classList.remove('hide');
    } else {
        showCartItems();
        updateCartTotal();
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





