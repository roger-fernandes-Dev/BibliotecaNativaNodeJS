const http = require('http')//classe http para conexao
const hostname = '127.0.0.1'//endereço ip
const port = 3000//porta para a conexão
const url = `http://${hostname}:${port}/`//template url

//método para criar a conexão com um servidor
const server = http.createServer((req, res)=>{
    res.statusCode = 200//representa conexão estabelecida com exito
    res.setHeader('Content-Type', 'text/html')//formatação do texto
    res.end('<h1>Bem vindo</h1>')//texto apresentado
})
server.listen(port, hostname, ()=>{//inicialização o servidor 
    //mostrando endereço conectado no terminal
    console.log(`Servidor rodando em ${url}`)
})
//descobrindo qual sistema operacional esta sendo utilizado
const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
//criando e executando como processo filho
require('child_process').exec(open + ' ' + url)