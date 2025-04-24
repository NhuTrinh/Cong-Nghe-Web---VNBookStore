function updateOrderSummary(changeItemCount = 0, changePrice = 0) {
  const itemCount = document.getElementById("item-count");
  const subtotal = document.getElementById("subtotal");
  const total = document.getElementById("total");

  let count = parseInt(itemCount.innerText) || 0;
  count += changeItemCount;
  itemCount.innerText = `${count} ${count > 1 ? "Items" : "Item"}`;

  let subtotalVal = parseFloat(subtotal.innerText.replace(/[^\d.]/g, ""));
  subtotalVal += changePrice;
  subtotal.innerText = `Subtotal (inc VAT): £${subtotalVal.toFixed(2)}`;
  total.innerText = `Total to pay: £${subtotalVal.toFixed(2)}`;
}

function handleQuantityChange(e) {
  const item = e.target.closest(".cart-item");
  const quantity = parseInt(e.target.value);

  const priceText = item.querySelector(".book-price .price").innerText;
  const unitPrice = parseFloat(priceText.replace(/[^\d.]/g, ""));

  const oldTotalText = item.querySelector(".book-total").innerText;
  const oldTotal = parseFloat(oldTotalText.replace(/[^\d.]/g, ""));

  const newTotal = unitPrice * quantity;
  item.querySelector(".book-total").innerText = `£${newTotal.toFixed(2)}`;

  const diff = newTotal - oldTotal;
  updateOrderSummary(0, diff);
}

function handleRemove(e) {
  e.preventDefault();
  const item = e.target.closest(".cart-item");
  const itemTotal = parseFloat(item.querySelector(".book-total").innerText.replace(/[^\d.]/g, ""));
  item.remove();
  updateOrderSummary(-1, -itemTotal);
}

// Gắn sự kiện sau khi DOM đã sẵn sàng
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quantity-select select").forEach(select => {
    select.addEventListener("change", handleQuantityChange);
  });

  document.querySelectorAll(".remove-link").forEach(link => {
    link.addEventListener("click", handleRemove);
  });
});

// Gắn sự kiện sau khi DOM đã sẵn sàng
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quantity-select select").forEach(select => {
    select.addEventListener("change", handleQuantityChange);
  });

  document.querySelectorAll(".remove-link").forEach(link => {
    link.addEventListener("click", handleRemove);
  });
});
function addToBasket() {
  const cartLeft = document.querySelector(".cart-left");
  const recommendBox = document.querySelector(".recommend-box");

  const newItem = document.createElement("div");
  newItem.classList.add("cart-item");
  newItem.innerHTML = `
    <img src="https://cdn.waterstones.com/override/v2/large/2928/3773/2928377330453.jpg" alt="The Impossible Fortune" class="book-cover" />
    <div class="cart-details">
      <p class="book-title">The Impossible Fortune</p>
      <p class="book-author">Richard Osman</p>
      <p class="book-price"><span class="price">£22.00</span></p>
      <p class="book-type">Paperback</p>
      <p class="book-stock">Usually dispatched within 1-2 days</p>
      <a href="#" class="remove-link">Remove</a>
    </div>
    <div class="quantity-select">
      <select>
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div class="book-total">£22.00</div>
  `;

  cartLeft.insertBefore(newItem, recommendBox);

  updateOrderSummary(1, 22.00);

  // Gắn sự kiện cho các phần tử mới
  newItem.querySelector(".remove-link").addEventListener("click", handleRemove);
  newItem.querySelector(".quantity-select select").addEventListener("change", handleQuantityChange);
}
function goToDelivery() {
  window.location.href = "delivery.html";
}