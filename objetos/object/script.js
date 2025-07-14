// const body = document.body;
// body.style.background = '#020';

// const pessoa = new Object({
//   nome: 'André',
// })

// // console.log(pessoa);

// const carro = {
//   // marca: 'Marca',
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   },
// }

// const honda = Object.create(carro); //O objeto que eu passar dentro do create, vai fazer parte do prototype de honda, conseguindo assim acessar as infos desse objeto passado.

// honda.marca = 'Honda';//Agora marca aparece tanto em honda, quanto no prototipo, mas no prototipo ele mantem o valor original.

// // const honda = Object.create(carro).init('Honda');

// console.log(honda.acelerar()); // A função 'acelerar' é herdada do protótipo ('carro'), mas ao ser executada, o 'this' dentro da função se refere ao objeto que a chamou ('honda'). 
// // Por isso, ela acessa 'honda.marca', resultando em 'Honda acelerou'. (honda.marca = this.marca)

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// const carros = {
//   rodas: 4,
//   mala: true,
// }

// // Object.assign serve para adicionar metodos, atributos de um objeto dentro de outro. No exemplo em vez de criar as mesmas funções, apenas criei um objeto separado para isso e atribui nos objetos que precisaria. Caso uma propriedade ja exista, ela vai ser substituida pelo objeto que esta sendo passado.
// Object.assign(moto, funcaoAutomovel);
// Object.assign(carros, funcaoAutomovel);

const moto = {}

Object.defineProperties(moto, {
  rodas: {
    // value: 2,
    configurable: false, // Impede que a propriedade seja redefinida ou removida (Ja começa como sendo falso)
    // writable: true, //Permite a alteração de valor
    enumerable: true,
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  }
});

moto.rodas = 5; //Faz o set, como se fosse set(5);

console.log(moto.rodas); //Faz o get

console.log(Object.getOwnPropertyDescriptors(Array)); //Pegar info de todos os metodos e propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(Array, 'from')); //Pegar de apenas um metodo ou propriedade

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

console.log(Object.getOwnPropertyNames(Array));

const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas)); //É a mesma coisa (Me da o prototipo do construtor de array)
console.log(Object.getPrototypeOf('')); //Me da o prototipo do construtor de string
console.log(Array.prototype); //É a mesma coisa

const frutas1 = ['Banana', 'Pera'];
const frutas2 = ['Banana', 'Pera'];

const novaFruta = frutas1; //Apenas referencia frutas1

novaFruta[0] = 'Uva'; //Altera em frutas1 tbm

console.log(Object.is(frutas1, novaFruta));