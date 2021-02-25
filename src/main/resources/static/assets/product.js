//const burgerContainer = document.getElementById("burger");
//const sidesContainer = document.getElementById("sides");
//const dessertsContainer = document.getElementById("dessert");
const cart = document.getElementById("checkout-container");
const cartCheckOut = document.getElementById("cart-checkout");
const emptyCartNotice = document.getElementById("empty-cart");
//
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
    <div class="d-flex flex-wrap align-items-center justify-content-center">
        <img src=${cartItems[i].img} class="checkout-item-img rounded p-0 mx-4 my-2 col-xs-8">
        <div class="d-flex flex-row row align-items-center p-0 my-2 mx-4 w-100 justify-content-between">
            <h5 class="card-title col-sm-12 col-md-8 p-0 my-2 text-left">${cartItems[i].name}</h5>
            <h5 class="card-title col-sm-12 col-md-4 p-0 my-2 text-right item-price">$${cartItems[i].price}</h5>
        </div>
        <div class="d-flex col p-0 my-2 mx-4 justify-content-between align-items-center cart-quantity-container">
            <button class="btn btn-warning px-3 remove-button rounded-0">-</button>
            <h5 class="card-title text-center quantity w-50 m-0">${cartItems[i].quantity}</h5>
            <button class="btn btn-warning px-3 add-button rounded-0">+</button>
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
        const itemPriceElement = itemsInCart[i].children[0].children[1].children[1].innerText.replace('$', '');
        const itemPrice = parseFloat(itemPriceElement);
        const itemQuantityElement = (itemsInCart[i].children[0].children[2].children[1].innerText);
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
        <div class="checkout-img-container d-flex justify-content-center align-items-center px-4">
        <img src=${product.img} class="checkout-item-img rounded p-0 mx-4 my-2 col-xs-8">
        </div>
        <div class="d-flex flex-row row align-items-center p-0 my-2 mx-4 w-100 justify-content-between">
           <h5 class="card-title col-sm-12 col-md-4 p-0 my-2 text-left">${product.name}</h5>
           <h5 class="card-title col-sm-12 col-md-4 p-0 my-2 text-right item-price">$${product.price}</h5>
        </div>
        <div class="d-flex col p-0 my-2 mx-4 justify-content-between align-items-center cart-quantity-container">
            <button class="btn btn-warning px-3 remove-button rounded-0">-</button>
            <h5 class="card-title text-center quantity w-50 m-0">${product.quantity}</h5>
            <button class="btn btn-warning px-3 add-button rounded-0">+</button>
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
        let itemName = itemsInCart[i].children[0].children[1].children[0].innerText;
//        console.log(itemName);
        itemNames.push(itemName);
    }

    if (itemNames.includes(productName)) {
        let itemCartIndex = itemNames.indexOf(productName);
        let itemQuantityElement = itemsInCart[itemCartIndex].children[0].children[2].children[1];
        let itemQuantity = parseInt(itemQuantityElement.innerText);
        itemQuantity = itemQuantity + 1;
        itemQuantityElement.innerText = itemQuantity;
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
                let itemQuantity = parseInt(itemQuantityElement.innerText);
                itemQuantity = itemQuantity + 1;
                itemQuantityElement.innerText = itemQuantity;
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
                    let itemQuantity = parseInt(itemQuantityElement.innerText);
                    itemQuantity = itemQuantity - 1;
                    itemQuantityElement.innerText = itemQuantity;
                    updateCartTotal();
                    break;

                }
            }
            else if (cartItems[i].quantity <= 1) {
                if (productName == cartItems[i].name) {
                    let itemInCart = e.target.parentElement.parentElement.parentElement;
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

//////MOVED TO ADMIN.JS////////
// //UPDATE PRODUCT
// function loadItemDetails(productInfo) {
//     const editItemHTML =
//         `<div class="col my-2">
//             <form>
//             <div class="form-group card p-3 shadow-sm">
//             <div class="d-flex justify-content-between p-0">
//             <h5 class="p-0">ID:<span id="product-id">${productInfo.id}</span></h5>
//             <button class="btn btn-danger add-button px-3 rounded">x</button>
//             </div>
//                     <label for="productName">Name</label>
//                     <input type="text" class="form-control" id="productName" value="${productInfo.name}" pattern="[a-zA-Z]+" required >
//                     <label for="productType">Type</label>
//                     <input type="text" class="form-control" id="productType" value="${productInfo.type}" pattern="[a-zA-Z]+" required>
//                     <label for="productPrice">Price</label>
//                     <input type="number" class="form-control" id="productPrice" value="${productInfo.price}" pattern="[0-9]+" step="0.1" required>
//                     <button id="updateButton" class="btn btn-success my-2" onclick="updateProduct()">Update</button>
//                     </div>
//                 </form>
//             </div>
//     `;

//     editContainer.innerHTML += editItemHTML;
// }

// for (let i = 0; i < editButtons.length; i++) {
//     editButtons[i].addEventListener('click', () => {
//         let productsJson = localStorage.getItem('products');
//         let products = JSON.parse(productsJson);
//         loadItemDetails(products[i]);
//     })
// }

// function updateProduct() {
//     let productsJson = localStorage.getItem('products');
//     let products = JSON.parse(productsJson);
//     let productId = document.getElementById("product-id").innerText;
//     let updatedName = document.getElementById("productName").value;
//     let updatedType = document.getElementById("productType").value;
//     let updatedPrice = document.getElementById("productPrice").value;
//     let textPattern = /^\w+( \w+)*$/;


//     if (updatedName == "") {
//         alert("Please enter product name");
//         return false;
//     } if (updatedType == "") {
//         alert("Please enter product type");
//         return false;
//     } if (updatedPrice == "") {
//         alert("Please enter product price");
//         return false;
//     } if (textPattern.test(updatedName) === false || textPattern.test(updatedType) === false) {
//         alert("Please enter only alphabet characters");
//         return false;
//     }


//     for (let i = 0; i < products.length; i++) {

//         if (productId == products[i].id) {
//             products[i].name = updatedName;
//             products[i].type = updatedType;
//             products[i].price = updatedPrice;
//         }
//     }

//     localStorage.setItem('products', JSON.stringify(products));
//     fetchProductList();
//     window.location.reload();

// }

// const addButton = document.getElementById("add-new-item");
// //console.log(addButton);
// addButton.addEventListener('click', () => {
//     addProductContainer();
// })


// function addProductContainer() {
//     let productsJson = localStorage.getItem('products');
//     let products = JSON.parse(productsJson);
//     const addItemHTML =
//         `<div class="col my-2">
// <form>
//     <div class="form-group card p-3 shadow-sm">
//         <div class="d-flex justify-content-between p-0">
//         <h5 class="p-0">ID:<span id="product-id">${products.length}</span></h5>
//         <button class="btn btn-danger add-button px-3 rounded">x</button>
//         </div>
//           <label for="productName">Name</label>
//         <input type="text" class="form-control" id="productName" required>
//         <label for="productType">Type</label>
//         <input type="text" class="form-control" id="productType" required>
//         <label for="productPrice">Price</label>
//         <input type="text" class="form-control" id="productPrice" required>
//         <label for="productImage">Image Link</label>
//         <input type="text" class="form-control" id="productImage" required>
//         <button id="addButton" class="btn btn-success my-2" onclick="addNewProduct()">Add Item</button>
//         </div>
//     </form>
// </div>
// `;

//     editContainer.innerHTML += addItemHTML;
// }

// //ADD NEW PRODUCT

// function addNewProduct() {
//     let productsJson = localStorage.getItem('products');
//     let products = JSON.parse(productsJson);
//     let newId = document.getElementById("product-id").innerText;
//     let newName = document.getElementById("productName").value;
//     let newType = document.getElementById("productType").value;
//     let newImg = document.getElementById("productImage").value;
//     let newPrice = document.getElementById("productPrice").value;

//     const newProduct = createProduct(newId, newName, newType, newImg, newPrice);
//     products.push(newProduct);
//     console.log(products);
//     localStorage.setItem('products', JSON.stringify(products));
//     fetchProductList();
//     window.location.reload();

// }

// function createProduct(productId, productName, productType, productImg, productPrice) {
//     return {
//         id: productId,
//         name: productName,
//         type: productType,
//         img: productImg,
//         price: productPrice,
//         description: null
//     }
// }
// const adminButtons = document.getElementById('show-admin-buttons');
// adminButtons.addEventListener('click', () => {
//     for (let i = 0; i < editButtons.length; i++) {
//         editButtons[i].classList.remove("hide");
//     }
//     addButton.classList.remove("hide");
// })