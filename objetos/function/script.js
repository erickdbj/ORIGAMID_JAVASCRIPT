document.querySelector('body').style.background = '#044';

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

function htmlElements(tag, classe, texto) { //ISSO É PARAMETRO DE FUNÇAO, TAG, CLASSE, TEXTO
  const elemento = document.createElement(tag);
  if(classe) elemento.classList.add(classe);
  if(texto) elemento.innerText = texto;
  return elemento;
}

const novoElemento = htmlElements('h1', 'titulo', 'Novo Titulo');

sectionPrincipal.before(novoElemento);

//Funciona, mas a de cima é a mais ideal a se usar.

const section = document.createElement('section');
sectionPrincipal.after(section);

function newElement(tag, classe, conteudo) {
  return section.innerHTML = `<${tag} class="${classe}">${conteudo}</${tag}>`
}

newElement('p', 'classeTeste', 'Criando uma função que retorne novos elementos html, com os seguintes parametros: tag, classe e conteudo.');


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const createTitulo = htmlElements.bind(null, 'h1', 'titulo');

const meuH1 = createTitulo('Conteúdo dinâmico');
section.before(meuH1);


