export default class Toggle {
  //Method 1. Check radio yes/no
  static radioToggle() {
    const radios = document.querySelectorAll(".delivery__choice");
    let noRadio = document.querySelectorAll(".delivery__choice--no");
    let yesRadio = document.querySelectorAll(".delivery__choice--yes");
    let message = document.querySelector(".message__choice");

    radios.forEach((radio) => {
      message.classList.add("active");
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          if (event.target.value === "yes") {
            yesRadio.forEach((yes) => {
              yes.classList.add("active");
            });
            noRadio.forEach((no) => {
              no.classList.remove("active");
            });
            message.classList.add("active");
          } else if (event.target.value === "no") {
            noRadio.forEach((no) => {
              no.classList.add("active");
            });
            yesRadio.forEach((yes) => {
              yes.classList.remove("active");
            });
            message.classList.remove("active");
          }
        }
      });
    });
  }
}
