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

const moto = {
  rodas: 2,
}

console.log(moto);