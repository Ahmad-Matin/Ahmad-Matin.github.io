
document.getElementById("check-button").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    const postalsectors = [42, 43, 44, 45, 46, 47, 48, 49, 50, 81, 51, 52];
    const postalCode = e.target.parentElement.children[0].value;
    const postalSector = postalCode.substring(0,2);
    const resultContainer = document.getElementById("address-check-result")
    console.log(postalSector);
    for (let i = 0; i < postalsectors.length; i++) {
        if (postalsectors[i] == postalSector) {
            resultContainer.innerHTML = "";
            const success = document.createElement("P");
            success.classList.add("success")
            success.innerText = "We deliver to your address!";
            resultContainer.appendChild(success);
        }
        else {
            resultContainer.innerHTML = "";
            const failure = document.createElement("P");
            failure.classList.add("failure");
            failure.innerText = "Sorry, we don't deliver to your address at the moment :(";
            resultContainer.appendChild(failure);
        }
    }
});