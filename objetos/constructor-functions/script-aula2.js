const body = document.body;
body.style.backgroundColor = "#000";

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

function Dom(seletor) {
  this.element = function () {
    return document.querySelectorAll(seletor);
  };
  this.ativo = function () {
    this.element().forEach((seletor) => {
      seletor.classList.add('ativo');
    });
  };
  console.log(this);
}

const li = new Dom('li');
li.ativo();

const ul = new Dom('ul');
ul.ativo();

const lastLi = new Dom('li:last-child');
lastLi.ativo();
