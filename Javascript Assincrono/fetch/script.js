// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const botaoBuscar = document.querySelector("#buscar");
const inputCep = document.querySelector(".input-cep");
const divEndereco = document.querySelectorAll(".endereco p");
const input = document.querySelector(".input-cep");

botaoBuscar.addEventListener("click", (event) => {
  if (event.type === "click") {
    handleBuscar();
    fetchGeral();
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleBuscar();
    fetchGeral();
  }
});

function handleBuscar() {
  const cepInput = inputCep.value;
  return cepInput;
}

function fetchGeral() {
  const cep = handleBuscar();
  const cepReturn = fetch(`https://viacep.com.br/ws/${cep}/json/`);

  cepReturn
    .then((r) => {
      return r.json();
    })
    .then((body) => {
      const array = [body.bairro, body.logradouro, body.localidade, body.uf];
      let i = 0;
      divEndereco.forEach((endereco) => {
        endereco.innerText = array[i];
        i++;
      });
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const bitcoinText = document.querySelector(".bitcoin-text");

setInterval(() => {
  const bitCoin = fetch("https://blockchain.info/ticker");

  bitCoin
    .then((r) => {
      return r.json();
    })
    .then((body) => {
      bitcoinText.innerText = body.BRL.buy;
    });
}, 1000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
