const body = document.body;
body.style.background = '#000';

// Liste 5 objetos nativos
console.log(Object);
console.log(Array);
console.log(Date);
console.log(Math);
console.log(Boolean);

// Liste 5 objetos do browser
NodeList
console.log(window);
console.log(document);
console.log(navigator);
console.log(history);
HTMLCollection

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
console.log(typeof window.chrome !== "undefined");
console.log(typeof navigator.deviceMemory !== "undefined");