//carregando api de file system
const fs = require('fs')
//usando função readFile para ler o arquivo
//usando modo assincrono(não-bloqueante)
fs.readFile('arquivo.txt', (err, data)=>{
    //procurando erros
    if(err) throw err;

    //convertendo o resultado no buffer em string para mostrar na tela
    console.log(data.toString())
})

//usando modo sincrono(bloqueante)
const texto = fs.readFileSync('arquivo.txt')
console.log(texto)