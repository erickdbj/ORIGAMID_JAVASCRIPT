var numero = 20;
var numero2 = 10;

numero += numero2; //numero = numero + 10;

console.log(numero);

var idade = 19;
var naoPossuiDiabetes = true;
var condicao = true;

if (condicao) //Nao é necessario chaves quando retorno apenas uma linha de codigo pós if-else
  var podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
else 
  var pdoeBeber = idade >= 18 && naoPossuiDiabetes; //Nao faz sentido retornar true ou false, por padrao a condiçao ja retorna esses valores. Faz sentido apenas retornar numeros, strings e etc...

console.log(podeBeber);
//condição ? true : false

var possuiFaculdade = true;

if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

if(possuiFaculdade) 
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');