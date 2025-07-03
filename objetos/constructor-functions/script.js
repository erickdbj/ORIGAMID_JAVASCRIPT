const body = document.body;
body.style.backgroundColor = "#000";

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
//Jeito 2 (professor)
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;

  this.addClass = function () {
    this.element.forEach((elements) => {
      elements.classList.add("ativo");
    });
  };

  this.removeClass = function () {
    this.element.forEach((elements) => {
      elements.classList.remove("ativo");
    });
  };
}

//Jeito 1(meu)
// function Dom(seletor) {
//   this.elementos = function () {
//     return document.querySelectorAll(seletor);
//   };

//   this.addClass = function () {
//     this.elementos().forEach((elements) => {
//       elements.classList.add("ativo");
//     });
//   };

//   this.removeClass = function () {
//     this.elementos().forEach((elements) => {
//       elements.classList.remove("ativo");
//     });
//   };
// }

const li = new Dom('li');
li.addClass();
console.log(document.querySelectorAll('li'));