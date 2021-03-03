document.getElementById("add-new-product").addEventListener("click", () => {
let form = document.getElementById("add-product-form");
form.classList.remove("hide");
})

document.getElementById("cancel-add-item").addEventListener("click", () => {
let form = document.getElementById("add-product-form");
form.classList.add("hide");
})