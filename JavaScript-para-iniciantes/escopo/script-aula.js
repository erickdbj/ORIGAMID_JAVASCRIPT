'use strict'

var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

console.log(carro);

if (true) {
  const carro2 = 'Lancer'; //var vaza do bloco, const e let respeitam o escopo de bloco.
  console.log(carro2);
}

// console.log(carro2);

var mes; //Mesma coisa

if(false) {
  var mes = 'Janeiro';
  console.log(mes);
}

console.log(mes);

{
  var carro3 = 'Civic';
  const ano = 2023;
}

console.log(carro3);
// console.log(ano);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

console.log(i); //10, pois os valores de i foram substituidos e nao é mais 50.

var i = 50;

// for (let i = 0; i < 10; i++) { //criar com let
//   console.log(i);
// }

console.log(i * 10); //500, pois nao vaza o let i.

const semana = 'Sexta';
semana = 'Quinta'; //Erro, apenas na execução
// const semana = 'Quarta'; //Erro, avisado no codigo

console.log(semana);

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018
}

data.ano = 2019; //Nao me da erro
// data = 'Teste'; //Da erro