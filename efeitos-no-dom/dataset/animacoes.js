function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });

      const dataShow = tabContent[index].dataset.anime;

      tabContent[index].classList.add('ativo', dataShow);

    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index); //para cada item do menu ao clique, passar o indice na func
      });
    });
  }
}

initTabNav();

function initAccordion() {
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

initAccordion();

function scrollSuave() {
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

scrollSuave();

function animaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = innerHeight * 0.6; //Pegando do window (innerHeight);

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    addEventListener("scroll", animaScroll);
  }
}

animaScroll();
