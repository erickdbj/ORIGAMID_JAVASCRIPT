// const doc = fetch("https://viacep.com.br/ws/01001000/json/");
const doc = fetch("./sobre.html");

const div = document.createElement('div');

doc
.then(r => {
  return r.text(); //Mas também posso passar o then após o method (sem return)
})
.then(body => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
    console.log(titulo);
    // const conteudo = document.querySelector('.conteudo');
    // const style = document.createElement('style');
    // style.innerHTML = body;
    // conteudo.appendChild(style);
    // console.log(style);
  });