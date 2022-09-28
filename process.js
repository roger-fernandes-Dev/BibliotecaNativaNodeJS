console.log('Nome do arquivo ', __filename)
console.log('Diretório do arquivo ', __dirname)
console.log('Diretório em que foi invocado ', process.cwd())
console.log('Sistema Operacional ', process.env.OS)
switch(process.argv[2]){
    case '-a':
        console.log('Execute rotina principal')
        break;
    case '-i' :
        console.log('Execute instalação')
        break;
    case '-q' :
        console.log('Encerrando aplicação')
        process.exit()
        break;
    default :
    console.log('Parametros inválidos')
    }
console.log('Nome do arquivo ', process.platform)