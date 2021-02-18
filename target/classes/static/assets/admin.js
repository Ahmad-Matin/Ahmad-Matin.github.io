//LOAD PRODUCT 

const burgerContainer = document.getElementById("burger");
const sidesContainer = document.getElementById("sides");
const dessertsContainer = document.getElementById("dessert");
const editButtons = document.getElementsByClassName('edit')
const editContainer = document.getElementById("update-container")

function addBurger(item) {

    const itemHTML =
        `
    <div id ="${item.id}" class="col my-2">
        <div class="card-body align-items-center border rounded p-0 pb-4 shadow-sm">
            <img src="${item.img}" class="card-img-top rounded-top menu-img">
            <div class="d-flex justify-content-between px-4 pt-4">
                    <h5 class="card-title mr-auto">${item.name}</h5>
                    <h5 class="card-text ml-auto">$${item.price}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-start">
                  <a class="btn btn-warning edit mx-4 mt-2" href="#update-container">Edit</a>
                </div>
            </div>
        </div>
    </div>

`;

    burgerContainer.innerHTML += itemHTML;
}

function addSides(item) {

    const itemHTML =
        ` 
    <div id ="${item.id}" class="col my-2">
        <div class="card-body align-items-center border rounded p-0 pb-4 shadow-sm">
            <img src="${item.img}" class="card-img-top rounded-top menu-img">
            <div class="d-flex justify-content-between px-4 pt-4">
                    <h5 class="card-title mr-auto">${item.name}</h5>
                    <h5 class="card-text ml-auto">$${item.price}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-start">
                  <a class="btn btn-warning edit mx-4 mt-2" href="#update-container">Edit</a>
                </div>
            </div>
        </div>
    </div>
`;
    sidesContainer.innerHTML += itemHTML;
}

function addDesserts(item) {

    const itemHTML =
        `
     <div id ="${item.id}" class="col my-2">
        <div class="card-body align-items-center border rounded p-0 pb-4 shadow-sm">
            <img src="${item.img}" class="card-img-top rounded-top menu-img">
            <div class="d-flex justify-content-between px-4 pt-4">
                    <h5 class="card-title mr-auto">${item.name}</h5>
                    <h5 class="card-text ml-auto">$${item.price}</h5>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-start">
                  <a class="btn btn-warning edit mx-4 mt-2" href="#update-container">Edit</a>
                </div>
            </div>
        </div>
    </div>

`;

    dessertsContainer.innerHTML += itemHTML;
}

const addToCartButtons = document.getElementsByClassName("add");

function fetchProductList() {

    if (localStorage.getItem('products') == null) {
        fetch('http://localhost:8080/products/all')
            .then((response) => response.json())
            .then(response => {
                let productsJson = JSON.stringify(response);
                localStorage.setItem('products', productsJson);
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
            })
    } else {
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
}

// function fetchProductList() {

//     if (localStorage.getItem('products') == null) {
//         fetch("../assets/productsA.json")
//             .then((response) => response.json())
//             .then(response => {
//                 let productsJson = JSON.stringify(response);
//                 localStorage.setItem('products', productsJson);
//                 let products = JSON.parse(productsJson);
//                 for (let i = 0; i < products.length; i++) {
//                     switch (products[i].type) {
//                         case ("burger"):
//                             addBurger(products[i]);
//                             break;
//                         case ("sides"):
//                             addSides(products[i]);
//                             break;
//                         case ("dessert"):
//                             addDesserts(products[i]);
//                             break;
//                     }
//                 }
//             })
//     } else {
//         let productsJson = localStorage.getItem('products');
//         let products = JSON.parse(productsJson);
//         for (let i = 0; i < products.length; i++) {
//             switch (products[i].type) {
//                 case ("burger"):
//                     addBurger(products[i]);
//                     break;
//                 case ("sides"):
//                     addSides(products[i]);
//                     break;
//                 case ("dessert"):
//                     addDesserts(products[i]);
//                     break;
//             }
//         }
//     }
// }

fetchProductList();

//UPDATE PRODUCT
function loadItemDetails(productInfo) {
    const editItemHTML =
        `<div class="col my-2">
        <form method="POST" action = "http://localhost:8080/products/update">
            <div class="form-group card p-3 shadow-sm">
            <div class="d-flex justify-content-end p-0 mb-4">  
            <!--<h5 class="p-0">ID:<span id="product-id">${productInfo.id}</span></h5>-->
            <button class="btn btn-danger add-button px-3 rounded" onclick="closeItemDetails()">x</button>
            </div>  
                    <label for"productId">Id</label>
                    <input type ="number" class="form-control" name="id" id="product-id" value="${productInfo.id}" pattern = "[0-9]+" step="1" required>
                    <label for="productName">Name</label>
                    <input type="text" class="form-control" name="name" id="productName" value="${productInfo.name}" pattern="[a-zA-Z ]+" required >
                    <label for="productType">Type</label>
                    <input type="text" class="form-control" name="type" id="productType" value="${productInfo.type}" pattern="[a-zA-Z]+" required>
                    <label for="productPrice">Price</label>
                    <input type="number" class="form-control" name="price" id="productPrice" value="${productInfo.price}" pattern="[0-9]+" step="0.1" required>
                    <button type=""submit" id="updateButton" class="btn btn-success my-2">Update</button>
                    </div>
                </form>
            </div>
    `;

    //onclick="updateProduct()"

    editContainer.innerHTML += editItemHTML;
}



function closeItemDetails() {
    editContainer.removeChild(editContainer.firstChild);
}

for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
        let productsJson = localStorage.getItem('products');
        let products = JSON.parse(productsJson);
        loadItemDetails(products[i]);
    })
}

function updateProduct() {
    let productsJson = localStorage.getItem('products');
    let products = JSON.parse(productsJson);
    let productId = document.getElementById("product-id").innerText;
    let updatedName = document.getElementById("productName").value;
    let updatedType = document.getElementById("productType").value;
    let updatedPrice = document.getElementById("productPrice").value;
    let textPattern = /^\w+( \w+)*$/;


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
    fetchProductList();
    window.location.reload();

}

const addButton = document.getElementById("add-new-item");
//console.log(addButton);
addButton.addEventListener('click', () => {
    addProductContainer();
})


function addProductContainer() {
    let productsJson = localStorage.getItem('products');
    let products = JSON.parse(productsJson);
    const addItemHTML =
        `<div class="col my-2">
        <form method="POST" action = "http://localhost:8080/products/add">
        <div class="form-group card p-3 shadow-sm">
        <div class="d-flex justify-content-between p-0">  
        <h5 class="p-0">ID:<span id="product-id">${products.length}</span></h5>
        <button class="btn btn-danger add-button px-3 rounded">x</button>
        </div>
        <label for="productName">Name</label>
        <input type="text" class="form-control" name="name" id="productName" required>
        <label for="productType">Type</label>
        <input type="text" class="form-control" name="type" id="productType" required>
        <label for="productPrice">Price</label>
        <input type="text" class="form-control" name="price" id="productPrice" required>
        <label for="productImage">Image Link</label>
        <input type="text" class="form-control" name="imageUrl" id="imageUrl" required>
        <button id="addButton" type="submit" class="btn btn-success my-2">Add Item</button>
        </div>
    </form>
</div>
`;
    //onclick="addNewProduct()"

    editContainer.innerHTML += addItemHTML;
}

//ADD NEW PRODUCT

function addNewProduct() {
    let productsJson = localStorage.getItem('products');
    let products = JSON.parse(productsJson);
    let newId = document.getElementById("product-id").innerText;
    let newName = document.getElementById("productName").value;
    let newType = document.getElementById("productType").value;
    let newImg = document.getElementById("productImage").value;
    let newPrice = document.getElementById("productPrice").value;

    const newProduct = createProduct(newId, newName, newType, newImg, newPrice);
    products.push(newProduct);
    console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    fetchProductList();
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
// const adminButtons = document.getElementById('show-admin-buttons');
// adminButtons.addEventListener('click', () => {
//     for (let i = 0; i < editButtons.length; i++) {
//         editButtons[i].classList.remove("hide");
//     }
//     addButton.classList.remove("hide");
// })