// nomeie 3 propriedades ou métodos de strings
var nome = 'Erick';
console.log(nome.split('i'));
console.log(nome.toLocaleUpperCase());
console.log(nome.length)
console.log(nome.slice(1, 4));//Primeiro para cortar, segundo para cortar no final

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('clicado');
});
console.log(btn.append());
console.log(btn.innerHTML); //Retorna o conteudo no HMTL (Clique)
console.log(btn.className); //Retorna o nome da classe
console.log(btn.hasAttributes());

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// CLIPBOARD JAVASCRIPT MÉTODO (procurar metodos que preciso para interagir da forma que quero)