const animais = document.getElementById('animais');
// console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const imgAnimais = document.querySelectorAll('.animais img');
console.log(imgAnimais[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML); //Atualiza com o novo elemento(pós chamada)
console.log(gridSectionNode) //Nao atualiza(pós chamada)

gridSectionNode.forEach(function(gridItem, index, array) { //Loop em cada item para interagir com cada item
  console.log(gridItem);
})

const arrayGrid = Array.from(gridSectionHTML); //Conseguimos transformar array-like em array