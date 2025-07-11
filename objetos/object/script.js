const body = document.body;
body.style.background = '#020';

const pessoa = new Object({
  nome: 'André',
})

console.log(pessoa);

const carro = {
  marca: 'Marca',
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
}

const honda = Object.create(carro); //O objeto que eu passar dentro do create, vai fazer parte de todo o prototype de honda.