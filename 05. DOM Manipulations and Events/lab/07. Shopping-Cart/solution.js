function solve() {

  let addButtons = document.querySelectorAll(".add-product");
  let productsBought = [];
  let totalPrice = 0;
  let textArea = document.querySelector("textarea");
  let checkoutBtn = document.querySelector(".checkout");

  for (const addBtn of addButtons) {
    addBtn.addEventListener("click", addProduct);
  }
  checkoutBtn.addEventListener("click", checkOut);

  function addProduct(e) {
    let productInfo = e.target.parentNode.parentNode;
    let productTitle = productInfo.querySelector(".product-title").textContent;
    let productPrice = productInfo.querySelector(
      ".product-line-price"
    ).textContent;

    if (!productsBought.includes(productTitle)) {
      productsBought.push(productTitle);
    }

    totalPrice += Number(productPrice);
    let message = `Added ${productTitle} for ${Number(productPrice).toFixed(
      2
    )} to the cart.\n`;
    textArea.value += message;
  }

  function checkOut(e) {
     
      textArea.value += `You bought ${productsBought.join(
        ", "
      )} for ${totalPrice.toFixed(2)}.`;
      for (const btn of addButtons) {
        console.log(btn);
        btn.disabled = true;
      }
      checkoutBtn.disabled = true;
      console.log(checkoutBtn);
    
  }
}
