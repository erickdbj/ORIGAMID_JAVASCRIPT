const body = document.body;
body.style.background = '#000';

const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2 + '  2';
}

console.log(somar(3, 3));
console.log(somar.length)
console.log(somar.name)

function darOi(nome, idade) {
  console.log('Oi para voce ' + nome + ' , idade: '+ idade);
}

darOi.call({}, 'André', 28);

window.marca = 'Kia';
window.ano = '2015';

function descricaoCarro(velocidade) {
  console.log(this);
  console.log(window.marca + " " + this.ano + " " + velocidade);
}

descricaoCarro.call({marca: 'Kia Cerato', ano: 2019}, 200);

