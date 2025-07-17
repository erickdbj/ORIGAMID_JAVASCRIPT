const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
const menuClasse = menu.classList;

console.log(menuClasse)

if(menu.classList.contains('ativo')) {
  console.log('Tem ativo');
} else {
  console.log('Nao tem ativo');
}

menu.className += " 33";

console.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes[0])

const img = document.querySelector('img');

console.log(img.getAttribute('src'));
img.setAttribute('alt', 'Texto Alternativo');
console.log(img.getAttribute('alt'));
console.log(img.hasAttribute('alt'));

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${km}`)
  }
}

const portas = carro.portas;
carro.andar(23);

console.log(portas);