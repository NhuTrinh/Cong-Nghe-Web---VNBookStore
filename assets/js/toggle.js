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

  //Method 2. Open/Close modal
  static modalToggle(openId, closeSelector, modalSelector, overlayId) {
    const open = document.getElementById(openId);
    const modal = document.querySelector(closeSelector);
    const close = document.querySelector(modalSelector);
    const overlay = document.getElementById(overlayId);

    //Open modal
    if (open) {
      open.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex";
        overlay.style.display = "flex";
      });
    }

    //Close modal
    if (close) {
      close.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
      });
      window.addEventListener("click", (event) => {
        if (!modal.contains(event.target) && event.target !== open) {
          modal.style.display = "none";
          overlay.style.display = "none";
        }
      });
    }
  }

  //Method 3. Switch acitve page
  static pageActice() {
    const currentPage = window.location.href;
    const links = document.querySelectorAll(".switch-active");
    links.forEach((link) => {
      if (link.href === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}
