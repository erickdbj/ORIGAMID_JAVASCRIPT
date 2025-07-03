// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Erick',
  sobrenome: 'Debiazi',
  idade: 21,
  sexo: 'M',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
  return console.log(`${this.nome} ${this.sobrenome}`)
}

dadosPessoais.nomeCompleto();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  viuPessoa: true,
  late() {
    if (this.viuPessoa) {
      return console.log('O labrador latiu');
    } else {
      return console.log('O labrador esta quieto');
    }
  }
}
// Outro
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  late1(pessoa) {
    if (pessoa === 'homem') {
      return console.log('O labrador latiu');
    } else {
      return console.log('O labrador esta quieto');
    }
  }
}

cachorro.late1('homem');
