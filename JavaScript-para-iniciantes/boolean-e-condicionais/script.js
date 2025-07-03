// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var myAge = 21;
var parentAge = 70;

if (myAge < parentAge) {
  console.log('Idade do parente é maior.');
} else if (myAge > parentAge) {
  console.log('Idade do parente é menor');
} else {
  console.log('Idade do parente é igual');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 === true, 5 === true, 3 === true (' ' - é convertido para 0) 
console.log(5 - ' ');
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta); //Mostra o boolean real.

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (china > brasil) {
  let diff = china - brasil;
  console.log(`Brasil tem a população menor que a da china, diferença de ${diff} habitantes`);
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { //Falso && Verdadeiro
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { //Falso || Verdadeiro
  console.log('Gato' && 'Cão'); //Cao, pois no && é sempre o ultimo valor.
} else {
  console.log('Falso');
}