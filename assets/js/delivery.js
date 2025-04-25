import Toggle from "../js/toggle.js";

//1. Hander option radio yes/no
Toggle.radioToggle();

//2. Hander validator account
const inputs = document.querySelectorAll(".input");
const email = document.querySelector(".email-validate");
const regexEmail = new RegExp("^[\\w.-]+@[\\w.-]+\\.\\w{2,}$");
const nullMessage = document.querySelector(".null-validate");
const invalidMessage = document.querySelector(".invalid-validate");

//2.1. Name
if (inputs) {
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      const errorInput = input.parentElement.querySelector(".account-validate");
      if (input.value.trim().length === 0) {
        errorInput.style.display = "block";
        input.classList.add("invalid");
      } else {
        errorInput.style.display = "none";
        input.classList.remove("invalid");
      }
    });
  });
}

if (inputs) {
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const errorInput = input.parentElement.querySelector(".account-validate");
      if (input.value.trim().length === 0) {
        errorInput.style.display = "block";
        input.classList.add("invalid");
      } else {
        errorInput.style.display = "none";
        input.classList.remove("invalid");
      }
    });
  });
}

//2.2. Email
if (email) {
  email.addEventListener("change", (event) => {
    const value = event.target.value.trim();
    if (value === "") {
      email.classList.add("invalid");
      nullMessage.style.display = "block";
      invalidMessage.style.display = "none";
    } else if (!regexEmail.test(value)) {
      email.classList.add("invalid");
      nullMessage.style.display = "none";
      invalidMessage.style.display = "block";
    } else {
      email.classList.remove("invalid");
      nullMessage.style.display = "none";
      invalidMessage.style.display = "none";
    }
  });
}

//3. Hander modal
Toggle.modalToggle(
  "item-modal",
  ".modal",
  ".modal__close",
  "item-modal-overlay"
);

Toggle.modalToggle(
  "order-modal",
  ".order-modal",
  ".order-modal__close",
  "order-modal-overlay"
);

//4. Hander switch active page
Toggle.pageActice();

//6. Hander Fetch public address api
document.addEventListener("DOMContentLoaded", function () {
  const nextPaymentButton = document.getElementById("next-payment");

  if (nextPaymentButton) {
    nextPaymentButton.addEventListener("click", function () {
      const phone = document.getElementById("phone-number").value;
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const address = document.getElementById("address").value;
      const note = document.getElementById("note").value;

      sessionStorage.setItem(
        "userInfo",
        JSON.stringify({ firstName, lastName, address, phone, note })
      );
      window.location.href = "./payment.html";
    });
  }
});

const userInfo = sessionStorage.getItem("userInfo");

if (userInfo) {
  const { firstName, lastName, address, phone, note } = JSON.parse(userInfo);

  // Hiển thị thông tin trong div
  const showUserInfo = document.getElementById("user-info");
  showUserInfo.innerHTML = `
        <p id="user-name"><strong>${firstName} ${lastName}</strong></p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone number:</strong> ${phone}</p>
        <p><strong>Note:</strong> ${note}</p>
  `;
}
