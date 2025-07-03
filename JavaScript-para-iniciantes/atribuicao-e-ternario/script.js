// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if(possuiCarro && possuiCasa) 
  darCredito = true;
else
  darCredito = false;

darCredito = (possuiCarro && possuiCasa); // ? true : false nao é errado, mas nao faz sentido, pois a condição ja nos retorna true ou false, e atribui a variavel.

console.log(darCredito);
