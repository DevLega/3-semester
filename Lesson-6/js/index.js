let totalSpent = 0;
let payment = 0;
let discount;

document.getElementById("add").addEventListener("click", function () {
  payment = payment + 100;
});

document.getElementById("pay").addEventListener("click", function () {
  totalSpent = totalSpent + payment;

  document.getElementById("totalSpentText").textContent = totalSpent;
});

if (totalSpent >= 100 && totalSpent <= 1000) {
  discount = "2";
}

console.log(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`);