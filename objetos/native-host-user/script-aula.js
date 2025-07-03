const body = document.body;
body.style.background = '#000';

console.log(typeof Array.fromasdas !== "undefined");
console.log(typeof Array.fromasdas) //Typeof retorna uma string, por isso temos que fazer a verificaçao com undefined estando dentro de strings. 

if(typeof Array.from !== "undefined") {
  console.log('existe');
} else {
  console.log('Nao existe');
}