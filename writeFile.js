const { writeFile } = require('fs')

writeFile('arquivo2.txt', 'criando arquivo de texto com writefile', err =>{
    if(err) throw err
    console.log('arquivo criado com sucesso')
})