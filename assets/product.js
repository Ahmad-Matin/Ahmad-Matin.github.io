const burgerContainer = document.getElementById("burgers");
const sidesContainer = document.getElementById("sides");
const dessertsContainer = document.getElementById("desserts");
const cart = document.getElementById("checkout-container");
const cartCheckOut = document.getElementById("cart-checkout");
const emptyCartNotice = document.getElementById("empty-cart");


function addBurger(item) {

    const itemHTML =
        ` <div class="col my-2">
    <div class="card-body align-items-center border rounded p-0 shadow-sm">
            <img src="${item.img}" class="card-img-top rounded-top menu-img">
            <div class="d-flex justify-content-between px-4 pt-4">
                    <h5 class="card-title mr-auto">${item.name}</h5>
                    <h5 class="card-text ml-auto">$${item.price}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex px-4 pt-2 pb-4 justify-content-between flex-wrap">
                <!--<input type="number" id="quantity" class="form-control quantity-container mr-2 mb-2" value="1">-->
                    <a class="btn btn-primary add align-self-center">Add to Cart</a>
                </div>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-warning edit mx-4 my-2 hide" href="#update-container">Edit</a>
                </div>

            </div>
    </div>
</div>

`;

    burgerContainer.innerHTML += itemHTML;
}

function addSides(item) {

    const itemHTML =
        ` <div class="col my-2">
    <div class="card-body align-items-center border rounded p-0 shadow-sm">
            <img src="${item.img}" class="card-img-top rounded-top menu-img">
            <div class="d-flex justify-content-between px-4 pt-4">
                    <h5 class="card-title mr-auto">${item.name}</h5>
                    <h5 class="card-text ml-auto">$${item.price}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex px-4 pt-2 pb-4 justify-content-between flex-wrap">
                <!--<input type="number" id="quantity" class="form-control quantity-container mr-2 mb-2" value="1">-->
                <a class="btn btn-primary add">Add to Cart</a>
                </div>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-warning edit mx-4 my-2 hide" href="#update-container">Edit</a>
                </div>

            </div>
    </div>
</div>

`;
    sidesContainer.innerHTML += itemHTML;
}

function addDesserts(item) {

    const itemHTML =
        ` <div class="col my-2">
    <div class="card-body align-items-center border rounded p-0 shadow-sm">
            <img src="${item.img}" class="card-img-top rounded-top menu-img">
            <div class="d-flex justify-content-between px-4 pt-4">
                    <h5 class="card-title mr-auto">${item.name}</h5>
                    <h5 class="card-text ml-auto">$${item.price}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex px-4 pt-2 pb-4 justify-content-between flex-wrap">
                <!--<input type="number" id="quantity" class="form-control quantity-container mr-2 mb-2" value="1">-->
                <a class="btn btn-primary add">Add to Cart</a>
                </div>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-warning edit mx-4 my-2 hide" href="#update-container">Edit</a>
                </div>

            </div>
    </div>
</div>

`;

    dessertsContainer.innerHTML += itemHTML;
}


function fetchProductList() {

    if (localStorage.getItem('products') == null) {
        fetch("../assets/productsA.json")
            .then((response) => response.json())
            .then(response => {
                const productsJson = JSON.stringify(response);
                localStorage.setItem('products', productsJson);
            })
    }
}



const productsJson = localStorage.getItem('products');
const products = JSON.parse(productsJson);


function loadProductsFromStorage() {
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



//CHECKOUT

//display cart items from local storage
function showCartItems() {
    let cartItemsJson = localStorage.getItem('cartItems');
    let cartItems = JSON.parse(cartItemsJson);
    for (let i = 0; i < cartItems.length; i++) {
        const cartItemInfo = document.createElement('li');
        cartItemInfo.classList.add("checkout-item");
        cartItemInfo.innerHTML =

            `
    <div class="d-flex flex-wrap align-items-center justify-content-between">
        <img src=${cartItems[i].img} class="img-fluid checkout-item-img rounded p-0 mx-4 my-2 col-xs-8">
        <div class="d-flex flex-row align-items-center p-0 my-2 mx-4 w-100 justify-content-between">
            <h5 class="card-title p-0 my-0 text-center">${cartItems[i].name}</h5>
            <h5 class="card-title p-0 my-0 text-right item-price">$${cartItems[i].price}</h5>
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

const cartTotal = document.getElementById("cart-total");
const itemsInCart = cart.children;



function updateCartTotal() {
    let total = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
        const itemPriceElement = itemsInCart[i].children[0].children[1].children[1].innerText.replace('$', '');
        const itemPrice = parseFloat(itemPriceElement);
        const itemQuantityElement = (itemsInCart[i].children[0].children[2].children[1].innerText);
        const itemQuantity = parseInt(itemQuantityElement);
        const itemCost = ((itemPrice * 100) * (itemQuantity * 10) / 1000);
        total = total + itemCost;
    }
    cartTotal.innerText = `$${total}`;
}
fetchProductList();
loadProductsFromStorage();
loadCartItemsFromStorage();

const editButtons = document.getElementsByClassName('edit')

const editContainer = document.getElementById("update-container")


const addToCartButtons = document.getElementsByClassName("add");

function storeItem(product) {
    if (localStorage.getItem('cartItems') == null) {
        let newCart = [];
        newCart.push(product);
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
        <img src=${product.img} class="img-fluid checkout-item-img rounded p-0 mx-4 my-2 col-xs-8">
        <div class="d-flex flex-row align-items-center p-0 my-2 mx-4 w-100 justify-content-between">
            <h5 class="card-title p-0 my-0 text-center">${product.name}</h5>
            <h5 class="card-title p-0 my-0 text-right item-price">$${product.price}</h5>
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


for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', () => {
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
// change item quantity in cart 

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


//UPDATE PRODUCT
function loadItemDetails(productInfo) {
    const editItemHTML =
        `<div class="col my-2">
            <form>
                <div class="form-group">
                    <h5>ID:<span id="product-id">${productInfo.id}</span></h5>
                    <label for="productName">Name</label>
                    <input type="text" class="form-control" id="productName" value="${productInfo.name}" pattern="[a-zA-Z]+" required >
                    <label for="productType">Type</label>
                    <input type="text" class="form-control" id="productType" value="${productInfo.type}" pattern="[a-zA-Z]+" required>
                    <label for="productPrice">Price</label>
                    <input type="number" class="form-control" id="productPrice" value="${productInfo.price}" pattern="[0-9]+" step="0.1" required>
                    <button id="updateButton" class="btn btn-success my-2" onclick="updateProduct()">Update</button>
                    </div>
                </form>
            </div>
    `;

    editContainer.innerHTML += editItemHTML;
}

for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
        loadItemDetails(products[i]);
    })
}

function updateProduct() {
    let productId = document.getElementById("product-id").innerText;
    let updatedName = document.getElementById("productName").value;
    let updatedType = document.getElementById("productType").value;
    let updatedPrice = document.getElementById("productPrice").value;
    let textPattern = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;


    if (updatedName == "") {
        alert("Please enter product name");
        return false;
    } if (updatedType == "") {
        alert("Please enter product type");
        return false;
    } if (updatedPrice == "") {
        alert("Please enter product price");
        return false;
    } if (textPattern.test(updatedName) === false || textPattern.test(updatedType) === false) {
        alert("Please enter only alphabet characters");
        return false;
    }


    for (let i = 0; i < products.length; i++) {
        if (productId == products[i].id) {
            products[i].name = updatedName;
            products[i].type = updatedType;
            products[i].price = updatedPrice;
        }
    }

    localStorage.setItem('products', JSON.stringify(products));
    loadProductsFromStorage();
    window.location.reload();

}

const addButton = document.getElementById("add-new-item");
//console.log(addButton);
addButton.addEventListener('click', () => {
    addProductContainer();
})


function addProductContainer() {
    const addItemHTML =
        `<div class="col my-2">
<form>
    <div class="form-group">
          <h5>ID:<span id="product-id">${products.length}</span></h5>
        <label for="productName">Name</label>
        <input type="text" class="form-control" id="productName" required>
        <label for="productType">Type</label>
        <input type="text" class="form-control" id="productType" required>
        <label for="productPrice">Price</label>
        <input type="text" class="form-control" id="productPrice" required>
        <label for="productImage">Image Link</label>
        <input type="text" class="form-control" id="productImage" required>
        <button id="addButton" class="btn btn-success my-2" onclick="addNewProduct()">Add Item</button>
        </div>
    </form>
</div>
`;

    editContainer.innerHTML += addItemHTML;
}

//ADD NEW PRODUCT

function addNewProduct() {
    let newId = document.getElementById("product-id").innerText;
    let newName = document.getElementById("productName").value;
    let newType = document.getElementById("productType").value;
    let newImg = document.getElementById("productImage").value;
    let newPrice = document.getElementById("productPrice").value;

    const newProduct = createProduct(newId, newName, newType, newImg, newPrice);
    products.push(newProduct);
    console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    loadProductsFromStorage();
    window.location.reload();

}

function createProduct(productId, productName, productType, productImg, productPrice) {
    return {
        id: productId,
        name: productName,
        type: productType,
        img: productImg,
        price: productPrice,
        description: null
    }
}
const adminButtons = document.getElementById('show-admin-buttons');
adminButtons.addEventListener('click', () => {
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].classList.remove("hide");
    }
    addButton.classList.remove("hide");
})
