var videoGames = ['PS4', 'XBOX', 'PC', '3DS'];

console.log(videoGames[2]);

// videoGames.push('Nintendo WII'); //Adiciona ao final da array
// console.log(videoGames.pop()); //Remove e retorna o ultimo item da array

var numeros = [];
for (var i = 1; i <= 10; i++) { //Se esquecer do incremento a condiçao nunca se torna falsa, fazendo assim um loop infinito
  numeros.push(i);
}

var i = 0;
while (i < 2) {
  console.log(i);
  i++;
}

var i2 = 0;
while (i2 <= 10) {
  console.log(i2);
  i2 = i2+ 10;
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]); //1, 2, 3 cabou
  if (videoGames[item] === 'PC') {
    break; //Vai mostrar apenas PS4, XBOX E PC
  }
}

videoGames.forEach((item, index, array) => { //Esse parametro vira dinamicamente os valores da minha array (forEach(var item in array))
  console.log(item, index, array);
});