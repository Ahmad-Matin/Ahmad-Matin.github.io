
document.getElementById("check-button").addEventListener("click", (e) => {
    const postalCode = e.target.parentElement.children[0].value;
    const postalSector = postalCode.substring(0,2);
    const resultContainer = document.getElementById("address-check-result")
        const postalsectors = [42, 43, 44, 45, 46, 47, 48, 49, 50, 81, 51, 52];
    for (let i = 0; i < postalsectors.length; i++) {
        if (postalsectors[i] == postalSector) {
        const lowerDeliveryMessage =
  `      <div class="px-4 py-2">
            <h5>Your delivery fee is $8!</h5>
              <br>
            <p>Please note our minimum delivery order of $20.</p>
            <p>Orders below $20 will have a small order fee.</p>
        </div>`
        resultContainer.innerHTML = lowerDeliveryMessage;
        resultContainer.classList.add("delivery-result");
        break;
        }
        else {

            const higherDeliveryMessage =
        `<div class="px-4 py-2">
            <h5>Your delivery fee is $10!</h5>
            <br>
            <p>Please note our minimum delivery order of $20.</p>
            <p>Orders below $20 will have a small order fee.</p>
                    </div>`
            resultContainer.classList.add("delivery-result");
            resultContainer.innerHTML = higherDeliveryMessage;
        }
    }
});