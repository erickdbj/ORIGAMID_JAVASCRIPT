document.querySelector('body').style.background = '#000';

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('section p');

const somaCaracteres = Array.from(paragrafos).reduce((acc, p) => {
  const caracteres = p.innerText.length;
  return acc + caracteres;
}, 0);

console.log(somaCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
const sectionPrincipal = document.querySelector('section');

function htmlElements() {
  const newSection = document.createElement('section');

  const h1 = document.createElement('h1');
  const tituloh1 = document.createTextNode('Titulo para teste');
  h1.appendChild(tituloh1);

  newSection.appendChild(h1);

  sectionPrincipal.insertAdjacentHTML('afterend', newSection.innerHTML);
}

htmlElements();


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
