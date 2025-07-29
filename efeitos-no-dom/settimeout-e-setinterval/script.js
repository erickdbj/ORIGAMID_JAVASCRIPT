function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 1000, "Passou 1s");

const body = document.body;
body.style.background = "blue";

setInterval(() => {
  body.style.background = "red";
}, 2000);

if (body.style.background !== "blue") {
  clearInterval(fundoVermelho);  
}
