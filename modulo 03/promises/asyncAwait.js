const fs = require('fs')
const path = require('path')


const filePath = path.resolve(__dirname, 'tarefa.csv')



async function buscarArquivo (){
  try{
    const arquivo = await fs.promises.readFile(filePath)
    const textArquivo = arquivo.toString('utf8')
    console.log(textArquivo)
  }catch(error){
    console.log(error)
  }finally{
    console.log('finalizou!!')
  }
   
}
buscarArquivo()