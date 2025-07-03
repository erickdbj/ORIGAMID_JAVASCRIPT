console.log("Hello World");

function areaQuadrado(lado) {
  console.log("Função ativa");
  return lado * lado;
}

console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}

var total = 5 * pi(); //pi() é a mesma coisa que chamar 3.14 direto.

console.log(total);

function imc(peso, altura) {
  //Ja fica disponivel, pois criei ela aqui e ela vai para a memória
  const imc = peso / altura ** 2;
  return console.log(imc);
}

imc(80, 1.8); //é como se imc(80, 1.8) fosse = 24.69

function corFavorita(cor) {
  if (cor === "Azul") {
    return console.log("Voce gosta do céu");
  } else if (typeof cor === "number") { // Se o tipo do parâmetro 'cor' for 'number', entra neste bloco. // Exemplo: typeof 2 === "number" //typeof 2 retorna a string 'number'
    return console.log("Voce gosta da natureza");
  } else {
    return console.log("Voce nao gosta de nenhuma cor...");
  }
}

corFavorita(); // undefined é passado como argumento; cai no 'else'
corFavorita(2); // tipo 'number', entra no 'else if'

var botao = document.querySelector('.teste');

function mostraConsole() {
  console.log('oi');
}

botao.addEventListener('click', mostraConsole); //Nao precisa executar, pois ele ja sabe que é uma func e ja executa ela.

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retorna o imc pois ao executar a funçao ela chama um console.log
console.log(imc(80, 1.80)); // retorna o imc e undefined, pois nao estamos retornando nada mas estamos chamando o console. entao o resultado/retorno de imc(80, 1.80) é como se fosse = undefined.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return console.log('Informe a sua idade!'); //Return quando chamado cancela todo o restante do codigo abaixo. Entao se return for chamado, o codigo abaixo sera ignorado(dentro da funçao).
  } else if (idade >= 60) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

terceiraIdade(60);

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;

  return console.log(`Falta visitar ${totalPaises - paisesVisitados} paises`)
}

faltaVisitar(5);