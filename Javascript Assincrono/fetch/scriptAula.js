// // const doc = fetch("https://viacep.com.br/ws/01001000/json/");
// const doc = fetch("./sobre.html");

// const div = document.createElement('div');

// doc
// .then(r => {
//   return r.text(); //Mas também posso passar o then após o method (sem return)
// })
// .then(body => {
//     div.innerHTML = body;
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
//     console.log(titulo);
//     // const conteudo = document.querySelector('.conteudo');
//     // const style = document.createElement('style');
//     // style.innerHTML = body;
//     // conteudo.appendChild(style);
//     // console.log(style);
//   });

const imagem = fetch("./special.jpg");

imagem
.then(r => {
  return r.blob();
})
.then(body => {
  const blobUrl = URL.createObjectURL(body);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobUrl;
  });

  const cep = fetch("https://viacep.com.br/ws/01001000/json/");

cep
.then(r => {
  const r2 = r.clone(); //Usamos para transformar dois corpos em respostas diferentes

  r.text().then((text) => {
    console.log(text);
  });

  r2.json().then((json) => {
    console.log(json);
  });
})
.then(body => {
  console.log(body)
  });

cep
.then(response => {
  // console.log(response);
  console.log(response.status);
  console.log(response.url);
  console.log(response.type); //Basic dentro do proprio servidor // Cors fora e permitida
  response.headers.forEach(console.log);
})

const array = ['Item1', 'Item2'];

array.forEach(console.log);