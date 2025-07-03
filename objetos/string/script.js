const body = document.body;
body.style.background = '#000';

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaRecebimento = 0;
let somaTaxa = 0;

transacoes.forEach((item) => {
  const valor = item.valor.replace('R$ ', '');

  if(item.descricao.includes('Recebimento')) {
    somaRecebimento += Number(valor);    
  } else {
    somaTaxa += Number(valor);
  }
});

console.log(`Soma dos recebimentos: ${somaRecebimento}`);
console.log(`Soma das taxas: ${somaTaxa}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlSemSpan = html.split('span');
console.log(htmlSemSpan.join('a'));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let somaTaxas = 0;

transacoes2.forEach((item) => {
  const strings = item.toLowerCase().trim();

  console.log(strings)

  if(strings.includes('taxa')) {
    somaTaxas++;
  }
})

console.log(somaTaxas);