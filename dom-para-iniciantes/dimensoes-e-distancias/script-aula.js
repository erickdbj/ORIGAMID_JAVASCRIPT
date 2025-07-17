const section = document.querySelector('.animais-lista');

const height = section.clientHeight;
const animaisTopo = section.offsetTop;
const raposaH2 = document.querySelector('h2');

console.log(height);
console.log(animaisTopo);
console.log(section.scrollHeight);

const h2Left = raposaH2.offsetLeft;

console.log(h2Left);

const rect = raposaH2.getBoundingClientRect();
console.log(rect.top);

if(rect.top < 0) {
  console.log('Menor doq 0')
}

console.log(window.innerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;

console.log(small);

if(small) {
  console.log('usuario mobile');
} else {
  console.log('usuario desktop');
}