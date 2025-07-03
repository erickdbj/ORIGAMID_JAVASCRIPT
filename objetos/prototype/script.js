// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
};

const futuroRico = new Pessoas('Erick', 'Debiazi', 21);
console.log(futuroRico.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(typeof li);
console.log(typeof li.click);
console.log(typeof li.innerText);
console.log(typeof li.value);
console.log(typeof li.hidden);
console.log(typeof li.offsetLeft);
console.log(typeof li.click());

// Qual o construtor do dado abaixo:
console.log(typeof li.hidden.constructor.name); //hidden é boolean, porém constructor.name retorna isso dentro de uma string, logo o typeof é string.
