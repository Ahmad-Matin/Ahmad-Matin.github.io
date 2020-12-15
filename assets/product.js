const burgerContainer = document.getElementById("burgers");
const sidesContainer = document.getElementById("sides");


function addBurger(item) {

    const itemHTML =
    `<div class="col my-2">
    <div class="card border-0 align-items-center">
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
    <div class="card border-0 align-items-center">
    <div class="card-body">
    <img src =${item.img} class="card-img-top rounded menu-img">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5> 
    ${item.price.map(function(food) {
        return `
        <li class="list-group-item d-flex justify-content-between">
        <div>${food[0]}</div> 
        <div>$${food[1]}</div> 
        <div><a class="btn btn-primary">Add to Cart</a></div>
        </li>`}).join(" ")} 
    </div>        
    </div>
    </div>
    </div>
    `;

    sidesContainer.innerHTML += itemHTML;
}


function fetchProductList(menuItem) {
    fetch("../assets/productsA.json")
        .then((response) => response.json())
        .then(response => {
            burgerContainer.innerHTML = '';
            sidesContainer.innerHTML = '';
            for (let i = 0; i < response.length; i++) {
                if (response[i].type == "burger") {
                    addBurger(response[i]);
                } else if (response[i].type == "sides") {
                    addSides(response[i]);
                }
            }
            const productsJson = JSON.stringify(response);
            localStorage.setItem('products', productsJson);
        })
}


fetchProductList();