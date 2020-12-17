const burgerContainer = document.getElementById("burgers");
const sidesContainer = document.getElementById("sides");
const dessertsContainer = document.getElementById("desserts");


function addBurger(item) {

    const itemHTML =
    `<div class="col my-2">
    <div class="card align-items-center border-0">
        <div id="${item.id}" class="card-body">
            <img src=${item.img} class="card-img-top rounded menu-img">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <h5 class= "card-text">${item.price}</h5>  
                <a class="btn btn-primary">Add to Cart</a>
                <a class="btn btn-warning edit">Edit</a>
                </li>
            </div>
        </div>
    </div>
</div>
`;


    burgerContainer.innerHTML += itemHTML;
}



function addSides(item) {
   
    const itemHTML =
        `<div class="col my-2">
        <div class="card align-items-center border-0">
            <div id="${item.id}" class="card-body">
                <img src=${item.img} class="card-img-top rounded menu-img">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h5 class= "card-text">${item.price}</h5>  
                    <a class="btn btn-primary">Add to Cart</a>
                    <a class="btn btn-warning edit">Edit</a>
                    </li>
                </div>
            </div>
        </div>
    </div>
    `;

    sidesContainer.innerHTML += itemHTML;
}

function addDesserts(item) {

    const itemHTML =
        `<div class="col my-2">
        <div class="card align-items-center border-0">
            <div id="${item.id}" class="card-body">
                <img src=${item.img} class="card-img-top rounded menu-img">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h5 class= "card-text">${item.price}</h5>  
                    <a class="btn btn-primary">Add to Cart</a>
                    <a class="btn btn-warning edit">Edit</a>
                    </li>
                </div>
            </div>
        </div>
    </div>
    `;



    dessertsContainer.innerHTML += itemHTML;
}


function fetchProductList() {
    fetch("../assets/productsA.json")
        .then((response) => response.json())
        .then(response => {
            const productsJson = JSON.stringify(response);
            localStorage.setItem('products', productsJson);
        })
}



const productsJson = localStorage.getItem('products');
const products = JSON.parse(productsJson);
console.log(products)


function loadProductsFromStorage() {
    /*if (localStorage.getItem('products')) {
        const productsJson = localStorage.getItem('products');
        const products = JSON.parse(productsJson);*/
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



fetchProductList();
loadProductsFromStorage();

const editButtons = document.getElementsByClassName('edit')
console.log(editButtons);

const editContainer = document.getElementById("checkout-container")

function loadItemDetails(productInfo) {
    const editItemHTML =
           ` <div class="col my-2">
                <div class="form-group">
                    <label for="productName">Name</label>
                    <input type="text" class="form-control" id="productName" value="${productInfo.name}">
                    <label for="productType">Type</label>
                    <input type="text" class="form-control" id="productType" value="${productInfo.type}">
                    <label for="productPrice">Price</label>
                    <input type="text" class="form-control" id="productPrice" value="${productInfo.price}">
                    <a id="updateButton" class="btn btn-success my-5" onclick="updateProduct()">Update</a>
                    </div>
            </div>
    `;

    editContainer.innerHTML += editItemHTML;
}

for (let i = 0; i < editButtons.length; i++) {
                editButtons[i].addEventListener('click', () => {
                    loadItemDetails(products[i]);
                })
            }
