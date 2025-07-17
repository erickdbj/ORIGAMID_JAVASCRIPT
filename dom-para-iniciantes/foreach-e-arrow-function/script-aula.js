const imgs = document.querySelectorAll("img");
console.log(imgs);

let i = 0;
imgs.forEach((img, index, array) => {
  // console.log(img, index, array);
});

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (items) {
  console.log(items);
});

titulosArray.forEach(() => console.log(i++));
