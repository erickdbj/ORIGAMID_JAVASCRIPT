const body = document.body;
body.style.background = '#000';

// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2) {
//   return n1 + n2 + '  2';
// }

// console.log(somar(3, 3));
// console.log(somar.length)
// console.log(somar.name)

// function darOi(nome, idade) {
//   console.log('Oi para voce ' + nome + ' , idade: '+ idade);
// }

// darOi.call({}, 'André', 28);

// window.marca = 'Kia';
// window.ano = '2015';

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(window.marca + " " + this.ano + " " + velocidade);
// }

// descricaoCarro.call({marca: 'Kia Cerato', ano: 2019}, 200);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banan', 'Uva', 'Pera'];

// frutas.forEach.call(carros, (carro) => {
//   console.log(carro);
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
//   console.log(this.element);
// }

// Dom.prototype.ativo = function(classe) { //estou atribuindo essa funçao a esse metodo novo(ativo) que estou criando dentro da propriedade prototype
//   this.element.classList.add(classe); //Estou dando acesso para todos os new Dom.
// }

// const ul = new Dom('ul');
// ul.ativo('ativar'); //Consigo fazer isso, pois consigo acessar todos os metodos e etc que estiverem dentro do prototype.

// const li = {
//   element: document.querySelector('li'),
// }

// ul.ativo.call(li, 'ativo'); //O objeto que eu passar aqui como sendo o novo para o ativo, deve ser parecido com o objeto original do metodo.

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
//   console.log(this.element);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe); 
// }

// const li = {
//   element: document.querySelector('li'),
// }

// Dom.prototype.ativo.call(li, 'ativar');

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop();

const li = document.querySelectorAll('li');
const arrayFiltro = Array.from(li);

const teste = arrayFiltro.filter((item) => {
  return item.classList.contains('ativo');
});

console.log(teste); //Preciso colocar dentro de um const, pois ele tem que armezanar esses valores em algum lugar

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
})


