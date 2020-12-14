const itemsContainer = document.getElementById("burgers");
function addItem(item) {
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

    itemsContainer.innerHTML += itemHTML;
}
function fetchProductList() {
    fetch("../assets/product.json")
        .then((response) => response.json())
        .then(response => {
            itemsContainer.innerHTML = '';
            for (let i = 0; i < response.length; i++) {
                addItem(response[i]);
            }
            const productsJson = JSON.stringify(response);
            localStorage.setItem('products', productsJson);
        })
}
fetchProductList();