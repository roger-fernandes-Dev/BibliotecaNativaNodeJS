const { promisify } = require('util')

const writeFile = promisify(require('fs').writeFile)
const conteudo = 'criando um arquivo utilizando promisify, do modulo nativo util'

writeFile('utilArquivo.txt', conteudo).then(()=>{
    console.log('utilArquivo criado com sucesso')
}).catch((err)=>{
    console.log('Deu erro' + err)
})