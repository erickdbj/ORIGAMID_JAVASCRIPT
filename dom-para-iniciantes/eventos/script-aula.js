const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget); //Retorna o elemento completo
  console.log(event.target); //Exatamente onde clicamos emcima
  console.log(event.type); //Tipo do evento
  console.log(event)
}

// animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this); //Faz referencia ao elemento(linkExterno)
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) { //event faz referencia a açao(keydown)
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen'); //Estamos adicionando uma classe no body assim que apertamos o botao F.
  }
  console.log(event.key);

}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target.getAttribute('src'));
};

imgs.forEach((item) => {
  img.addEventListener('click', handleImg);
});