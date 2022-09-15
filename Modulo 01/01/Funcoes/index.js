

function teste(){
    console.log('hello')
}
teste() // executar funcao


function sayMyName(name){
    console.log('your name is ' + name)
}
sayMyName('Lara') // executa passando o parametro nome

function quadrado(valor){
    return valor * valor; 
}
const valorQuadrado = quadrado(20);
console.log(valorQuadrado)


function incrementarJuros(valor, percentalJuros){
const valorDeAcrescimo = ( percentalJuros / 100) * valor;
return valor + valorDeAcrescimo
}
console.log(incrementarJuros(100,10))