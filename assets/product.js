const burgerContainer = document.getElementById("burgers");
const sidesContainer = document.getElementById("sides");

function addBurger(item) {
    const itemHTML =
        `<div class="col my-2">
<div class="card border-0 align-items-center">
<div class="card-body">
<img src =${item.image} class="card-img-top">
        <h5 class="card-title">${item.name}</h5>
<p class="card-text">${item.type}</p>
<p class="card-text">${item.description}</p>
<p class="card-text">${item.price}</p>
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
<img src =${item.image} class="card-img-top">
        <h5 class="card-title">${item.name}</h5>
<p class="card-text">${item.type}</p>
<p class="card-text">${item.description}</p>
<p class="card-text">${item.price}</p>
</div>
</div>
</div>
</div>
`;

sidesContainer.innerHTML += itemHTML;
}

function fetchProductList(menuItem) {
    fetch("../assets/product.json")
        .then((response) => response.json())
        .then(response => {
            burgerContainer.innerHTML = '';
            sidesContainer.innerHTML = '';
            for (let i = 0; i < response.length; i++) {
                if (response[i].type == "Burger") {
                    addBurger(response[i]);
                } else if (response[i].type == "sides"){
                    addSides(response[i]);
                }            
            }
            const productsJson = JSON.stringify(response);
            localStorage.setItem('products', productsJson);
        })
}
fetchProductList();