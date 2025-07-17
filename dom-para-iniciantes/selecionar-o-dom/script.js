// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemWord = document.querySelectorAll('[src^="img/imagem"]'); //Começa com o caminho primeiro depois imagem
console.log(imagemWord);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao');
const h2Aniamais = primeiroH2.querySelector('h2');
console.log(h2Aniamais);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[--lastP.length]);

