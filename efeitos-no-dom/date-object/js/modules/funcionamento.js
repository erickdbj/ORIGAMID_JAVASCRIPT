export default function initFuncionamento() {
  
}

const agora = new Date();
console.log(agora.getDay()); //-- 4 (Quinta) 0-6 (domingo-sexta)
console.log(agora.getMonth()); //-- 6 (Julho) 0-11 (meses)

const futuro = new Date('Dec 31 2025 23:59');

console.log(futuro);

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime()); 
const diasFuturo = transformarDias(futuro.getTime()); 

console.log(Math.floor(diasFuturo - diasAgora));