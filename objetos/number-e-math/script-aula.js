console.log(Number.isNaN(true));
console.log(Number.isNaN(NaN));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.5));

console.log(Number.parseFloat('99.47'));
console.log(Number.parseFloat('5000 reais'));
console.log(Number.parseInt('5000.00 reais', 10));

const preco = 10.32323;
console.log(+preco.toFixed());
console.log(preco.toString());
console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

console.log(Math.PI); //Acessando isso é a mesma coisa que eu fazer embaixo (const Matematica)

const Matematica = {
  PI: 3.14,
}

console.log(Matematica.PI);

console.log(Math.abs(3 - 6)); //3
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.round(5.5)); //Matematica padrao de arredondamento (49 pra baixo / 5 pra cima)

console.log(Math.max(2, 5, 7, 17));
console.log(Math.min(2, 5, 7, 17));

const numeroRandom = Math.floor(Math.random() * 101);

console.log(+numeroRandom);