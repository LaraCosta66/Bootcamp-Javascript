const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 === 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }else{
    if(menorNumeroImpar === 0){
      menorNumeroImpar = numero;
      
    }else if(numero < menorNumeroImpar){
      menorNumeroImpar = numero;
    }
  }
  
}
print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar: ' + menorNumeroImpar);
       