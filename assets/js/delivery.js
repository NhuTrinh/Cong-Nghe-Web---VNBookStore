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

//2.2. Email
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
