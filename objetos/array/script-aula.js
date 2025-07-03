// const body = document.body;
// body.style.background = '#000';

// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] = 'Corolla'; //Cria no espaço 20, mas os outros espaços ficam vazios e deixa a array lenta

// const li = document.querySelectorAll('ul li');

// const arrayLi = Array.from(li);

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 3
// }

// const objArray = Array.from(obj); //Para um objeto array, eu preciso determinar a propriedade length.

// console.log(objArray);

// console.log(Array.isArray(li));
// console.log(Array.isArray(arrayLi));

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas.length); //3, pois temos 2 itens e outra array dentro da array.

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32,21,33,43,1,12,8];
// idades.sort(); //Vai de caractere em caractere, entao nao funciona para numeros.

// console.log(instrumentos);
// console.log(idades);

// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Kia', 'Ferrari');
// carros.push('BMW', 'Lancer');
// carros.sort();

// console.log(carros);

// console.log(carros.shift()); //Retira o primeiro elemento e retorna
// console.log(carros.pop()); //Retira o ultimo elemento e retorna

// console.log(carros.reverse());

// console.log(carros);
// console.log(carros.splice(2, 1, 'Fusca')); //Determina a partir de onde ele vai adicionar na array, a quantidade de itens a ser removida a partir desse primeiro index e depois os outros valores sao os itens a ser adicionados noa array.

// console.log(carros);

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));
// // ['Item1', 'Item2', 'Item1', 'Item2', 'Item5'] - Aqui estamos mudando a partir da posição 2 da array(item3), a partir dele nós vamos clonar o item 0 até o item 2. Fiacndo como esta no inicio do comentario.

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // ['Item1', 'Item2', 'Item3', 'Item1']

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2));
// ['Banana', 'Banana', 'Item3', 'Item4']

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2, 'Van'); //Nao modifica o array original, cria uma nova array modificada e retorna ela

// console.log(transportes);

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// console.log(linguagens.includes('css'));
// console.log(linguagens.includes('ruby'));
// console.log(linguagens.indexOf('js'));
// console.log(linguagens.lastIndexOf('js'));

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('h1');

// console.log(htmlString);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// console.log(linguagens.slice(1, 4));

const cloneLinguagem = linguagens.slice();

console.log(linguagens.pop());
console.log(cloneLinguagem);