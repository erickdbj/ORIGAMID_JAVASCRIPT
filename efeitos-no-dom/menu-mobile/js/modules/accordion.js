export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const ativo = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);

    function activeAccordion(event) {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo); //This é a mesma coisa que event.currentTarget
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}