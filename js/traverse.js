function getEleId(id) {
  const elementId = document.getElementById(id);
  return elementId;
}
function getEleCls(cls) {
  const elementClasses = document.getElementsByClassName(cls);
  return elementClasses;
}

// I have used same cls for all the buy now button . for getting this I am using for of loop
// Traverse Technique  ,

const getAllButtons = getEleCls("btn-buy");

for (const getAllButton of getAllButtons) {
  getAllButton.addEventListener("click", function () {
    // get total price from the html page
    let totalPrice = Number(getEleId("total-price").innerText);
    let proQuantity = Number(getEleId("quantity").innerText);

    // get product title
    const productTitle =
      getAllButton.parentElement.parentElement.children[1].innerText;
    // get product image
    const productImage =
      getAllButton.parentElement.parentElement.parentElement.children[0]
        .childNodes[1].src;

    //get product price
    const productPrice = Number(
      getAllButton.parentElement.parentElement.children[2].childNodes[1]
        .innerText
    );

    //update product select section
    const selectSection = getEleId("selected-product");
    // create div inside the selectSection
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="bg-[#f4f1f1] flex justify-between items-center p-2 mb-5 rounded-lg"
      >
        <img src="${productImage}" class="h-28 w-24" alt="" />
        <div>
          <p class="text-[20px] font-bold">${productTitle}</p>
          <p class="pt-2 text-[20px] text-[#11111180] font-medium">
            <span>${productPrice}</span> TK
          </p>
        </div>
    </div>
    `;

    selectSection.appendChild(newDiv);

    // update Product Quantity
    proQuantity++;
    getEleId("quantity").innerText = proQuantity;

    // update total Price
    totalPrice += productPrice;
    getEleId("total-price").innerText = totalPrice;

    // add something to the  clear button
    if (proQuantity == 1) {
      getEleId("btn-clear").style.display = "block";
    }
  });
}
