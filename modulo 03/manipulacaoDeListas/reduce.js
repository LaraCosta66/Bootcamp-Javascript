const lista = [1,2,3,4,5,6,7,8,9,10];
const somaDeValores = lista.reduce((previous, current) =>{
    
    return previous + current
}, 0);

console.log(somaDeValores)

// Percorre toda a lista e transforma em um unico valor
// reduz a lista a um unico valor
// recebe o valor anterior e atual