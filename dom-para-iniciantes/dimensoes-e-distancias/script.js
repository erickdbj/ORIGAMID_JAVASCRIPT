// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");

const distanciaTopo = primeiraImagem.offsetTop;

console.log(distanciaTopo);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const allImages = document.querySelectorAll("img");

  let soma = 0;
  allImages.forEach((item, index) => {
    const rectImg = item.getBoundingClientRect();

    soma += rectImg.width;
  });
}

console.log(soma);

window.onload = () => {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll(".menu li");

links.forEach((item) => {
  const rectLink = item.getBoundingClientRect();
  const height = rectLink.height;
  const width = rectLink.width;

  if (height === 48 && width === 48) {
    console.log("Os links possuem o minimo recomendado para o mobile");
  } else {
    console.log("Os links não possuem o minimo recomendado para o mobile");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");

if (window.innerWidth < 720) {
  menu.classList.add("menu-mobile");
  console.log("CLASSE ADICIONADA");
}

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  menu.classList.add("menu-mobile");
  console.log("CLASSE ADICIONADA");
}