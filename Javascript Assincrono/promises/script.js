const promesa = new Promise((resolve, reject) => {
  //Resolve é um nome qualquer
  let condicao = true;

  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "André", idade: 28 });
    }, 100);
  } else {
    reject(Error("Um erro ocorreu na promise"));
  }
});

console.log(promesa);

const retorno = promesa //Isso é a mesma coisa que o comentado abaixo
  .then((resolucao) => {
    console.log(resolucao); //Pega a promisse resolvida acima
    resolucao.profissao = 'Dublador';
    return resolucao; //Retorna a nova
  })
  .then((resolucao) => {
    //O ponto acessa o objeto que tiver atras dele (then)
    console.log(resolucao, "2");
  }, rejeitada => { //Segundo argumento do then, mesma coisa que o catch
    console.log(rejeitada);
  }).finally(() => {
    console.log('Acabou');
  });

  // .catch(rejeitada => {
  //   console.log(rejeitada);
  // })

// const retorno = promesa.then((resolucao) => {
//   return resolucao;
// }).then((resolucao) => {
//   console.log(resolucao, '2');
// });

console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario Logado');
  }, 1000); 
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500); 
});

const carregouTudo = Promise.all([login, dados]);

const carregouTudo2 = Promise.race([login, dados]); //Retorna a primeira promise que for resolvida ou rejeitada

carregouTudo.then(resolucao => {
  console.log(resolucao);
});