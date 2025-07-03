var nomeObjeto = {
  nome: 'Erick',
  sobrenome: 'Debiasi'.replace('si', 'zi'),
  nomeCompleto() {
    return console.log(`${this.nome} ${this.sobrenome}`)
  }
}

nomeObjeto.nomeCompleto();

var nome = 'Erick';

const maiusuclo = nome.toUpperCase();

var btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  btn.classList.add('teste');
});