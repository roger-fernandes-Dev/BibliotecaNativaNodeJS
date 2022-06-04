const {writeFile} = require('fs')

function criaArquivo(name, content){
    return new Promise((resolve, reject)=>{
        writeFile(name, content, err =>{
            if(err) return reject(err)
            resolve()
        })
    })
}

criaArquivo('promiseArquivo.txt', 'criando um arquivo utilizando promises')
    .then(()=>{console.log('promiseArquivo.txt criado com sucesso')})
    .catch(err=>console.log(err))