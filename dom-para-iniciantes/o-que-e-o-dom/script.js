// Retorne o url da página atual utilizando o objeto window

//Fui no console e coloquei window.location vi as propriedades e metodos, peguei entao a href que retorna a url completa.

const url = location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classeAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const lingua = navigator.language;
console.log("Lingua do navegador: " + lingua);

// Retorne a largura da janela
console.log(innerWidth);