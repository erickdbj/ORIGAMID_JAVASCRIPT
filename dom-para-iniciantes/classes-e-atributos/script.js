// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector('.menu');
const itensMenu = menu.querySelectorAll('ul li');

itensMenu.forEach((items) => {
  items.classList.add('ativo');
});

console.log(itensMenu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((items, index) => {
    if(index > 0) {
      items.classList.remove('ativo');
    }
})

console.log(itensMenu)

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const temAlt = img.hasAttribute('alt');
  console.log(img, temAlt);
});

// Modifique o href do link externo no menu
const menuLink = document.querySelector('[href^="https://www.origamid"]')

console.log(menuLink.setAttribute('href', 'https://www.google.com.br'))

