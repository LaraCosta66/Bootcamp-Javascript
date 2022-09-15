const numero = 3;
const numeroPar = (numero % 2) === 0; // o resto da divisao por 2
console.log(numeroPar)
if(numeroPar){
console.log('Par')
}else{
    console.log('Impar')
}

Desafio:

const precoEtanol = 4.12;
const precoGasolina = 5.25;
const consumoPorKm = 15;
const distanciaEmKm = 150;
const tipoCombustivel = 'Gasolina';

let litrosConsumidos = distanciaEmKm / consumoPorKm;

if (tipoCombustivel === 'Etanol') {
  let valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  let valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}




