export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = this.getAttribute("href"); //This é a mesma coisa que event.currentTarget
    const section = document.querySelector(href); //Estamos pegando href que retorna o id, logo estamos dando querySelector em um id.

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // window.scrollTo(0, section.offsetTop);
    //Outra maneira de scroll suave (window)
    // scrollTo({
    //   top: section.offsetTop,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}