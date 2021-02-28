
document.getElementById("check-button").addEventListener("click", (e) => {
    const postalCode = e.target.parentElement.children[0].value;
    const postalSector = postalCode.substring(0,2);
    const resultContainer = document.getElementById("address-check-result")
    const successContainer = document.getElementById("success-container")
    const step1Container = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    const postalsectors = [42, 43, 44, 45, 46, 47, 48, 49, 50, 81, 51, 52];
    for (let i = 0; i < postalsectors.length; i++) {
        if (postalsectors[i] == postalSector) {
        console.log("success");
        console.log(postalSector);
        console.log(postalsectors[i]);
//        successContainer.classList.remove("hide");
        resultContainer.innerHTML ="";
        resultContainer.classList.remove("failure");
        break;
        }
        else {
            console.log("failure");
            resultContainer.innerHTML = "";
//            successContainer.classList.add("hide");
            const failureMessage =
//            `
//            <div>
//            <p>Sorry, we don't currently deliver to your address :(</p>
//            <p>We're working hard to expand our delivery area. Join our mailing list to get updates on our deliveries.</p>
//                <form class="form-inline row my-2 my-lg-0">
//                <div class="col d-inline px-0">
//                   <input class="border border-light mail-form rounded m-0 p-0" type="text" placeholder="Email">
//                </div>
//                 <div class="col d-inline px-0">
//                   <button class="mail-submit btn btn-light m-0 p-0" type="submit">Submit</button>
//                 </div>
//                </form>
//            </div>
            `;
            resultContainer.classList.add("failure");
            resultContainer.innerHTML += failureMessage;
        }
    }
});