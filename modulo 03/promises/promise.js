const fs = require('fs')


const promessaLeituraArquivo = fs.promises.readFile('tarefa.csv')
promessaLeituraArquivo
.then((arquivo)=>{console.log(arquivo.toString('utf8'))})
.then((texto)=> console.log(texto))
.catch((error)=>{ 
    console.log('Deu ruim! ', error)
})