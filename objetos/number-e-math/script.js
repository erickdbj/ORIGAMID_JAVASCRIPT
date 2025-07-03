const body = document.body;
body.style.background = '#000';

// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'

const arrayNumeros = numeros.split(', ');

console.log(Math.max(...arrayNumeros)); //Spread

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = Number(preco.toUpperCase().replace('R$', '').trim().replace(',', '.'));
  preco = Number(preco.toFixed(2));
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco); //Chamando a func e o parametro, ela retorna o preco formatado, por estar dentro de um forEach, isso vai acontecer para todos os precos. Por isso conseguimos somar.
});

console.log(soma);