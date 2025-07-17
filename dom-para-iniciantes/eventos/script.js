// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('[href^="#"]')

function handleLink(event) {
  event.preventDefault();
  
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })

  event.currentTarget.classList.add('ativo');
  
  linksInternos.forEach((link) => {
    console.log(link);
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.body;

todosElementos.addEventListener('click', (event) => {
  console.log(event.target);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const allElements = document.body;

function handleBody(event) {
  // console.log(event.target.remove());
}

allElements.addEventListener('click', handleBody);


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const textosSite = document.body;

function handleText(event) {
  console.log(event);
  if(event.key === 't') {
    textosSite.classList.toggle('geral');
  }
}

textosSite.addEventListener('keydown', handleText);

