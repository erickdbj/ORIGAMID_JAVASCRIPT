// window.alert('Olá Mundo!');

const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/index.html') {
  console.log('URL Correto!');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', teste);

var teste = '';

console.log(`teste ${teste}`);