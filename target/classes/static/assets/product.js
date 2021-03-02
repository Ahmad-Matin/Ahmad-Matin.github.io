const cart = document.getElementById("checkout-container");
const cartCheckOut = document.getElementById("cart-checkout");
const emptyCartNotice = document.getElementById("empty-cart");
const navbar = document.getElementById("custom-navigation");


 document.querySelector("#show-cart").addEventListener('click', (e) => {
  let cart = document.getElementById("cart-section");
  let products = document.getElementById("products");
  let menuCategories = document.getElementById("menu-categories");
  let banner = document.getElementById("banner");
  cart.classList.add("cart-margin")
  cart.classList.remove("d-none");
  products.classList.add("d-none");
  banner.classList.add("d-none");
  navbar.classList.add("d-none");
  e.target.parentElement.parentElement.classList.add("d-none");
  })

  document.querySelector("#cart-heading").addEventListener('click', (e)=> {
  if (e.target.classList.contains("close-cart")) {
  console.log("clicked");
    let cart = document.getElementById("cart-section");
    let banner = document.getElementById("banner");
    let products = document.getElementById("products");
    cart.classList.add("d-none", "d-sm-block");
    cart.classList.remove("cart-margin")
    e.target.parentElement.classList.add("d-none");
    products.classList.remove("d-none");
    let showCart = document.querySelector("#show-cart");
    showCart.parentElement.classList.remove("d-none");
    banner.classList.remove("d-none");
    navbar.classList.remove("d-none");


  }
  })

document.querySelector("#custom-navigation").addEventListener('click', (e) => {
    let cart = document.getElementById("cart-section");
     let showCart = document.getElementById("show-cart");
if (e.target.classList.contains("navbar-toggler-icon")) {
if (cart.classList.contains("d-none") && (showCart.classList.contains("d-none")==false)) {
 showCart.parentElement.classList.toggle("d-none");
 }
 }
})

const mediaQuery = window.matchMedia('(min-width: 575px)');

    window.onresize = function() {
    if (mediaQuery.matches) {
      let cart = document.getElementById("cart-section");
      let products = document.getElementById("products");
      let banner = document.getElementById("banner");
      let showCart = document.querySelector("#show-cart");
      showCart.parentElement.classList.remove("d-none");
      products.classList.remove("d-none");
      cart.classList.add("d-none", "d-sm-block")
      banner.classList.remove("d-none");
     }
}


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
               <div class="d-flex col col-sm-6 col-lg-5 col-xl-3 p-0 justify-content-between align-items-center cart-quantity-container">
                           <button class="btn btn-warning px-1 remove-button rounded-0">-</button>
                           <h5 class="checkout card-title text-center quantity m-0">${cartItems[i].quantity}</h5>
                           <button class="btn btn-warning px-1 add-button rounded-0">+</button>
               </div>
               <h5 class="col col-sm-5 col-lg-4 col-xl-2 checkout card-title p-0 text-right item-price">$${(((cartItems[i].price) * (cartItems[i].quantity)).toFixed(2))}</h5>
           </div>
       </div>
       <hr>
    `

        cart.appendChild(cartItemInfo);
    }
}


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
    const mobileCartTotal = document.getElementById("mobile-cart-total");
    const mobileCartQuantity = document.getElementById("mobile-cart-quantity");
    const cartTotalContainer = document.getElementById("cart-total");

    let itemsInCart = cart.children;

    for (let i = 0; i < itemsInCart.length; i++) {
        const itemPriceElement = itemsInCart[i].children[0].children[0].children[1].children[1].innerText.replace('$', '');
        const itemPrice = parseFloat(itemPriceElement);
        const itemQuantityElement = (itemsInCart[i].children[0].children[0].children[2].children[1].innerText);
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
    console.log(cartTotal);
    console.log(mobileCartTotal);
    console.log(mobileCartQuantity);
    cartTotalContainer.innerText = `$${cartTotal}`;
    mobileCartTotal.innerText = `$${cartTotal}`;
    mobileCartQuantity.innerText = cartQuantity;

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
              <img src=${product.img} class="checkout-item-img rounded p-0 col col-sm-5 col-lg-4 col-xl-3 mr-2">
                <div class="col col-sm-6 col-lg-4 col-xl-3 p-0 mb-sm-5 mb-xl-0">
                 <h5 class="checkout card-title text-xs-right text-xs-left text-sm-right text-lg-left">${product.name}</h5>
                 <h5 class="checkout card-title text-xs-right text-xs-left text-sm-right text-lg-left">$${product.price}</h5>
              </div>
                <div class="d-flex col col-sm-6 col-lg-3 col-xl-3 p-0 justify-content-between align-items-center cart-quantity-container">
                <button class="btn btn-warning px-1 remove-button rounded-0">-</button>
                <h5 class="checkout card-title text-center quantity m-0">${product.quantity}</h5>
                <button class="btn btn-warning px-1 add-button rounded-0">+</button>
              </div>
              <h5 class="col col-sm-5 col-lg-4 col-xl-2 checkout card-title p-0 text-right item-price">$${product.price * product.quantity}</h5>
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
                let itemPrice= parseFloat(itemPriceValue);
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





