

const promessaDeNumero = new Promise((resolve, reject)=>{
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
}, 1000)
promessaDeNumero.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.error(error)
}).finally(()=>{
    console.log('finalizou!!')
})