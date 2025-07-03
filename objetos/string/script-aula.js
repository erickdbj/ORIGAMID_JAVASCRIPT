const body = document.body;
body.style.background = '#000';

const comida = 'Pizza';
const agua = new String('agua');

console.log(comida.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]); //Return a

const linguagem = 'JavaScript';

console.log(linguagem.charAt(linguagem.length - 1));

const frase = 'A melhor linguagem é ';

const fraseFinal = frase.concat(linguagem, '!!', ' Entendeu?');

console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); //Procura pela string EXATA dentro de outra string
console.log(fruta.includes(listaFrutas)); //False pois banana nao possui a string inteira de listaFrutas
console.log(listaFrutas.includes(fruta, 11)); //Estamos passando para procurar a busca a partir do caractere 14 de lista frutas.

console.log(fruta.startsWith('Ba')); //Retorna um valor novo, a variavel fruta segue sendo Banana. (Os metodos nao estao alterando a constante original);
console.log(fruta.endsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); //Pega do caractere 0 até o 3
console.log(transacao1.slice(5)); //Corta os 5 primeiros caracteres e retorna o restante
console.log(transacao1.slice(0, -2)); //Corta os 2 ultimos caracteres e retorna o restante
console.log(transacao1.slice(-5)); //Retorna os 5 ultimos caracteres
console.log(transacao3.slice(0, 3));
console.log(transacao1.slice(12));

const instrumento = 'Guitarra';

console.log(instrumento.indexOf('r'));
console.log(instrumento.lastIndexOf('r'));
console.log(instrumento.indexOf('ta'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10)); //Podemos usar para alinhar todos os produtos por exemplo.
  //Caso eu não passe o segundo argumento, ele me retorna com espaços.
});

console.log(listaPrecos[0].padStart(12, '.')); 
console.log(listaPrecos[0].padEnd(12, '.'));

const repita = 'Ta';

console.log(repita.repeat(5));

let listaItens = 'Camisa Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); //REGEX que pega todos os espaços
console.log(listaItens);

let preco = 'R$ 1200,43';
console.log(preco.replace(',', '.'));

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

console.log(frutasArray.join(''));

const valor = ' R$ 23.00 ';
console.log(valor.trim()); //'R$ 23.00'
console.log(valor.trimStart()); //'R$ 23.00 '
console.log(valor.trimEnd()); //' R$ 23.00'