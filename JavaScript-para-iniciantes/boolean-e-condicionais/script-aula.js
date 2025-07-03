var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiDoutorado) {
  console.log('Possui doutorado');
} else if (possuiGraduacao) {
  console.log('Possui graduação')
} else {
  console.log('Não possui doutorado e nem graduação')
}

var x = 10;

console.log(x == 10);
console.log(x == '10'); //Tenta transformar em numero e ver se os conteudos sao iguais
console.log(x === '10'); //Recomendado (3 - ===)
console.log(x != '10');
console.log(x !== '10');

if ((5-5) &&(5+5)) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

var condicional = ((5 - 10) &&(5 + 5)); //Verdadeiro retorna o ultimo valor
if (condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso', condicional)
}

var condicional2 = (5 - 5) || (5 + 5) && (0 / 5); //False || True = True // True && False = False

if (condicional2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

console.log(condicional2);

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul': 
    console.log('Olhe para o céu');
    break
  case 'Amarelo':
    console.log('Olhe para o sol');
    break
  case 'Verde':
    console.log('Olhe para a floresta');
    break
  default:
    console.log('Feche os olhos')
}