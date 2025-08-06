const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fonteFamily(value) {
    this.element.style.fonteFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

// handleStyle[name] é a mesma coisa que eu estiver fazendo assim: handleStyle.height() por exemplo. Pois conseguimos acessar objetos dessa maneira também, sem necessitar de usar apenas o ponto.

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  console.log(name, value);
}

controles.addEventListener('change', handleChange);

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

