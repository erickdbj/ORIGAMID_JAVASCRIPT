var idade = 21;
var exp = 2e-2;

var total1 = 10 + 5 + 10;
var divisao = 100 / 5;
var modulo = 3872983892 % 3;

console.log(modulo);

var soma = '10' + 10;

console.log(soma);

var teste = '120' / 2;
console.log(teste);

var testeNaN = 'Isso é 120' / 2;
console.log(isNaN(testeNaN));

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; // ordem: parenteses() * / + - 
console.log(soma1);

let incremento = 5;
//incremento = incremento + 1
console.log(incremento++); //se fosse uma const daria erro
console.log(incremento);

let decremento = 5;
console.log(decremento--);
console.log(decremento);

var frase = 'Isso é um teste';
console.log(+frase); //NaN
console.log(+isNaN(frase)); //Vira 1, pois true é representado pelo valor 1
console.log(+isNaN(!frase)); //Vira 0, pois false é representado pelo valor 0

var idade = +'28';
var somaIdade = 5;
console.log(idade + -somaIdade); //- na frente me da um numero negativo