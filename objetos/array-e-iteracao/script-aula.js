const body = document.body;
body.style.background = '#000';

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   // array[index] = 'Teste'; //É uma referencia, estamos falando como se fosse: carros[index]
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item, index, array) => {
//   return item.toUpperCase();
// })

// console.log(carros); //Parecem a mesma array, mas sao arrays diferentes.
// console.log(newCarros);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const temposAulas = aulas.map(aula => aula.min);

// function nomeAulas(aula) {
//   return aula.nome;
// }

// const arrayNomeAulas = aulas.map(nomeAulas);

// const nomeAulas1 = aula => aula.nome;

// const nomeAulas2 = ((aula) => {
//   return aula.nome;
// });

// console.log(temposAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);

//   return acumulador + item;
// }, 0);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, proximo) => {
//   return anterior < proximo ? proximo : anterior;
// });

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const listaAulas = aulas.reduce((acc, item, index) => {
//   acc[index] = item.nome;
//   return acc;
// }, {});

// // console.log(listaAulas);

// const frutas = ['', 'Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => { //Procura por pelo menos um verdadeiro
//   if(item === 'Uva') {
//     return console.log('tem uva');
//   }
// });

// console.log(temUva);

// const naoTem = frutas.every((fruta) => { //Procura por pelo menos um falso
//   return fruta;
// });

// console.log(naoTem);

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every((n => n > 3)); //Se tiver um item menor que 3, ja retorna false.

// console.log(maiorQue3);

// const indexUva = frutas.findIndex((item) => {
//   return item === 'Uva'; 
// }) //2, vai retornar quando achar o primeiro true. Se eu passar um return true, ele ja volta a posição 0.

// console.log(indexUva);

// const findTrue = frutas.find((item) => {
//   return item; 
// }) //2, vai retornar quando achar o primeiro true. Se eu passar um return true, ele ja volta a posição 0.

// console.log(findTrue);

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayLimpa = frutas.filter((item) => {
  return item; //Posso dar o return de items direto, pois ele ja retorna tudo que for true dentro da variavel arrayLimpa.
});

console.log(arrayLimpa);

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]
console.log(buscaMaior45);


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((item) => {
    return item.min > 15;
});

console.log(maiores15.map(item => item.min)); //Dessa maneira retorno apenas o min, se nao eu estaria retornando o objeto completo. (Filter retorna uma array, por isso consigo usar o .map)