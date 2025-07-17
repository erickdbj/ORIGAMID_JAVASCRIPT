// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuDuplicado = menu.cloneNode(true);

copy.appendChild(menuDuplicado, copy);

console.log(menu)

// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('.faq-lista');
const primeiroDt = dt.querySelector('dt');
console.log(primeiroDt)

// console.log(dt.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.nextElementSibling); 
// console.log(dt.children[1]); Funciona, porém é melhor a de cima

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML; //Define ou obtem a sintaxe HTML