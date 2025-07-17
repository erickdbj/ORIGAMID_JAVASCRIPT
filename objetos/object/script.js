const body = document.body;
body.style.background = '#000';

// Crie uma função que verifique
// corretamente o tipo de dado
function verifica(dado) {
  return 'Esse é o dado: ' + Object.prototype.toString.call(dado);
}

console.log(verifica('String'));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}

//Maneira 1
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    writable: false, //Ja é false por padrao
    // configurable: true,
  }
});

// delete quadrado.lados;

console.log(quadrado.lados);

//Maneira 2
Object.seal(quadrado); //Torna imutavel, mas nao restringe adição de property.

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));


