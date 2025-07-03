// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const curosArray = Array.from(cursos).map((item) => {
  return {
    titulo: item.querySelector('h1').innerText,
    descricao: item.querySelector('p').innerText, 
    aulas: item.querySelector('.aulas').innerText, 
    horas: item.querySelector('.horas').innerText};
});

console.log(curosArray);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((numeros) => {
  return numeros > 100;
});

console.log(maioresQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixo = instrumentos.some((instrumento) => {
  instrumento = instrumento.toLowerCase();
  return instrumento === 'baixo';
});

console.log(baixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const totalCompras = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  console.log(typeof precoLimpo)

  return acumulador + precoLimpo;
}, 0);

console.log(totalCompras);
