var nome = 'Erick';
var idade = 21;
var time = null; //é objeto(bug)
var simbolo = Symbol();

console.log("String: " + typeof nome);
console.log("Number: " + typeof idade);
console.log("Null: " + typeof time);
console.log("Symbol: " + typeof simbolo);

var sobrenome = 'Debiazi';
console.log(nome + ' ' + sobrenome);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
console.log(typeof frase1, frase1);

var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);