const {spawn} = require('child-process')
//listara os dados que tem
//para o spawn cada parâmtro que tiver deve-se passar como array
const fs = spawn('ls', ['..', '-lh', '/usr'])

//quando estiver lendo os dados, mostre as informações
fs.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
})

//mostre o erro
fs.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

//quando terminar mostre o codigo de finalização
fs.on('closa', (code)=>{
    console.log(`Processo em segundo plano finalizado com o código ${code}`)
})