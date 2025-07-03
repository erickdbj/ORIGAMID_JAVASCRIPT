var pessoa = {
  nome: 'Erick',
  idade: 21,
}

var quadrado = {
  lados: 4,
  area(lado) { //Funciona da mesma forma (function)
    return lado * lado;
  },
  perimetro: function(lado) {
    return lado * this.lados;
  }
}

console.log(quadrado.area(quadrado.lados));
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var height = 100;
var menu = {
  width: 800,
  height: 50,
  backGroundColor: '#000',
  metadeHeight() {
    return console.log(this.height / 2); //Divide o de dentro do objeto, pois estamos falando com o de dentro do objeto. Como se fosse: menu.height.
  },
}

menu.color = 'blue';

menu.esconder = () => {
  console.log('ESCONDIDO');
}

menu.metadeHeight();

var bg = menu.backGroundColor;

menu.hasOwnProperty('color'); //Conseguimos acessar propriedades e metodos de Object. (Tem herança)
