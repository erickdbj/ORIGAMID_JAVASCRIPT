// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var testeNaN = 'Isso é 200';
console.log(isNaN(testeNaN));

var testeNaN2 = 'Teste' + 30;
console.log(isNaN(testeNaN2))

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(incremento++);
console.log(incremento);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var pesoPorDois = numero / 2; // NaN (Not a Number)
var peso = pesoPorDois + unidade; // '80kg'
console.log(peso);

// Como dividir o peso por 2?
var numero1 = +'80' / 2;
var unidade1 = 'kg';
var peso1 = numero1 + unidade1; // '80kg'
console.log(peso1);