const burgerContainer = document.getElementById("burgers");
const sidesContainer = document.getElementById("sides");
const dessertsContainer = document.getElementById("desserts");


function addBurger(item) {

    const itemHTML =
    `<div class="col my-2">
    <div class="card align-items-center border-0">
    <div class="card-body">
    <img src =${item.img} class="card-img-top rounded menu-img">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5> 
    ${item.price.map(function(food) {
        return `
        <li class="list-group-item d-flex justify-content-between">
        <div>$${food[1]}</div> 
        <div><a class="btn btn-primary">Add to Cart</a></div>
        </li>`}).join(" ")} 
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
    <div class="card-body">
    <img src =${item.img} class="card-img-top rounded menu-img">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5> 
    ${item.price.map(function(food) {
        return `
        <li class="list-group-item d-flex justify-content-around">
        <div>${food[0]}</div> 
        <div>$${food[1]}</div> 
        <div><button class="btn btn-primary">Add to Cart</button></div>
        </li>`}).join(" ")} 
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
    <div class="card-body">
    <img src =${item.img} class="card-img-top rounded menu-img">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5> 
    ${item.price.map(function(food) {
        return `
        <li class="list-group-item d-flex justify-content-between">
        <div>$${food[1]}</div> 
        <div><a class="btn btn-primary">Add to Cart</a></div>
        <div><a class="btn btn-warning edit" href="about-us.html">Edit</a></div>
        </li>`}).join(" ")} 
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





function loadProductsFromStorage() {
    if (localStorage.getItem('products')) {
        const productsJson = localStorage.getItem('products');
        const products = JSON.parse(productsJson);
        // reset html
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
    


fetchProductList();
//loadProductsFromStorage();


const editButtons = document.getElementsByClassName('edit')
console.log(editButtons);
for (let i = 0; i < editButtons.length; i++) {
    console.log('looped')
  
   }