// .........................way - 1................................
// document.getElementById("case-Increase").addEventListener("click", function () {
//   handleProductChange(true);
// });

// document.getElementById("case-decrease").addEventListener("click", function () {
//   handleProductChange(false);
// });

// function handleProductChange(Increase) {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   // const caseNewCount = caseCount - 1;
//   let caseNewCount = caseCount;
//   if (Increase == true) {
//     caseNewCount = caseCount + 1;
//   }
//   if (Increase == false && caseCount > 0) {
//     caseNewCount = caseCount - 1;
//   }
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 59;
//   document.getElementById("case-total").innerText = " $ " + caseTotal;
// }

// document
//   .getElementById("phone-increase")
//   .addEventListener("click", function () {
//     handlePhoneChange(true);
//   });

// document
//   .getElementById("phone-decrease")
//   .addEventListener("click", function () {
//     handlePhoneChange(false);
//   });

// function handlePhoneChange(Increase) {
//   const phoneInput = document.getElementById("phone-count");
//   const phoneCount = parseInt(phoneInput.value);
//   // const caseNewCount = caseCount - 1;
//   let phoneNewCount = phoneCount;
//   if (Increase == true) {
//     phoneNewCount = phoneCount + 1;
//   }
//   if (Increase == false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneInput.value = phoneNewCount;
//   const phoneTotal = phoneNewCount * 1219;
//   document.getElementById("phone-total").innerText = " $ " + phoneTotal;
// }

// .........................way - 2...............................

// function handleProductChange(Increase) {
//   const phoneInput = document.getElementById("phone-count");
//   const phoneCount = parseInt(phoneInput.value);
//   // const phoneNewCount = phoneCount - 1;
//   let phoneNewCount = phoneCount;
//   if (Increase == true) {
//     phoneNewCount = phoneCount + 1;
//   }
//   if (Increase == false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneInput.value = phoneNewCount;
//   const phoneTotal = phoneNewCount * 1219;
//   document.getElementById("phone-total").innerText = "$ " + phoneTotal;
//   calculateTotal();
// }

// function handleCaseChange(Increase) {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   // const phoneNewCount = phoneCount - 1;
//   let caseNewCount = caseCount;
//   if (Increase == true) {
//     caseNewCount = caseCount + 1;
//   }
//   if (Increase == false && caseCount > 0) {
//     caseNewCount = caseCount - 1;
//   }
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 59;
//   document.getElementById("case-total").innerText = "$ " + caseTotal;
//   calculateTotal();
// }

// // function calculateTotal() {
// //   const phoneInput = document.getElementById("phone-count").value;
// //   const phoneCount = parseInt(phoneInput.value);

// //   const caseInput = document.getElementById("case-count").value;
// //   const caseCount = parseInt(caseInput.value);

// //   const totalPrice = phoneCount * 1219 + caseCount * 59;
// //   document.getElementById("total-price").innerText = " $" + totalPrice;
// // }

// function calculateTotal() {
//   const phoneInput = document.getElementById("phone-count");
//   const phoneCount = parseInt(phoneInput.value);

//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);

//   // const phoneCount = getInputValue("phone");

//   // const caseCount = getInputValue("case");

//   const totalPrice = phoneCount * 1219 + caseCount * 59;
//   document.getElementById("total-price").innerText = "$" + totalPrice;

//   const tax = Math.round(totalPrice * 0.1);
//   document.getElementById("tex-amount").innerText = "$" + tax;

//   const gandTotal = totalPrice + tax;
//   document.getElementById("grand-total").innerHTML = "$" + gandTotal;
// }
// // function getInputValue(product) {
// //   const productInput = document.getElementById(product + "-count");
// //   const productCount = parseInt(productInput.value);
// //   return productCount;
// // }

// .........................way - 3...............................

function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  // const caseNewCount = caseCount - 1;
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  // const caseTotal = caseNewCount * 59;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }
  if (product == "case") {
    productTotal = productNewCount * 59;
  }

  document.getElementById(product + "-total").innerText = " $ " + productTotal;
  calculateTotal();
}

function calculateTotal() {
  const phoneCount = getInputValue("phone");

  const caseCount = getInputValue("case");

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tex-amount").innerText = "$" + tax;
  const gandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerHTML = "$" + gandTotal;
}
function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
