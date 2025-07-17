// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao')

// // console.log(animaisLista.innerHTML);

// // console.log(h1.innerHTML); //Pega apenas oq estiver dentro do HTML
// // console.log(h1.innerText); //Pega apenas o texto
// // console.log(h1.outerHTML);//Pega todo o HTML

// h1.innerHTML = '<h1>Teste</h1>';

// const lista = document.querySelector('.animais-lista')

// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);

// // console.log(lista.children[lista.children.length - 1]);
// console.log(lista.querySelector('li:last-child'));

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');

// contato.replaceChild(lista, titulo); //Troca dentro de contato titulo por lista
// // contato.removeChild(titulo); //Remove titulo de contato

// // animais.appendChild(titulo); //Insere titulo após animais
// // contato.insertBefore(animais, mapa); //Insere animais antes do mapa

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('Titulo');
// mapa.appendChild(novoh1);
// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneh1 = h1.cloneNode(true);

cloneh1.innerText = 'Teste';
cloneh1.classList.add('geral');

faq.appendChild(cloneh1);

console.log(faq);
