// Crie uma função para verificar se um valor é Truthy
function valorTrue(verdadeiro) {
  if (verdadeiro) {
    console.log("Valor truthy");
  } else {
    console.log("Valor false");
  }
}

valorTrue(7);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadradoPerimetro(quadrado) {
  return console.log(quadrado * 4);
}

quadradoPerimetro(4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  if (typeof nome !== "string" || typeof sobrenome !== "string") {
    return console.log("Digite seu nome correto...");
  } else {
    return console.log(`${nome} ${sobrenome}`);
  }
}

nomeCompleto("Erick", "Debiazi");

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if(numero % 2 !== 1) {
    console.log('É par');
  } else {
    console.log('É impar');
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return console.log(typeof dado);
}

tipoDeDado('gremio');
tipoDeDado(2);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.'

addEventListener('scroll', () => {
  console.log('Erick Debiazi');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));