const body = document.body;
body.style.backgroundColor = "#000";

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
  this.andar = function() {
    return 'Andou';
  }
}

Pessoa.prototype.andar = function() {
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

// console.log(Pessoa.prototype); //Funciona
// console.log(andre.prototype); //Undefined

// console.log(andre.andar()); //Mesmo eu tendo criado dentro da outra função, essas duas funçoes criadas ainda podem ser acessadas, as mesmas se encontram dentro de proto.

const pais = 'Brasil';
const cidade = new String('Rio');

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'string';
  }
}

console.log(typeof Carro); //Objeto
console.log(typeof Carro.marca); //String
console.log(typeof Carro.preco); //Number
console.log(typeof Carro.andar); //Function
console.log(typeof Carro.andar()); //String (Oq é retornado pela function)