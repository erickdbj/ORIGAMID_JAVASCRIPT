const body = document.body;
body.style.backgroundColor = '#000';

function Carro(marcaAtribuida, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marcaAtribuida;
  this.preco = precoFinal;
  console.log(this);
}

const byd = new Carro('Byd', 1500); //Constroi um novo objeto para honda, baseado no objeto de Carro.
const fiat = new Carro('Fiat', 5000);