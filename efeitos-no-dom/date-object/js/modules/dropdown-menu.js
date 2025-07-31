import outsideClick from "./outsideclick.js";

export default function dropDownMenu() {
  const dropownMenus = document.querySelectorAll("[data-dropdown]");

  dropownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((action) => {
      //Dessa maneira, os dois eventos sao adicionados na chamada do evento
      menu.addEventListener(action, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
