const path = require('path')
//ele traz somente o nome do arquivo
console.log(path.basename('c:\\temp\\arquivos.html'))

//ele irá arrumar as barras do caminho indicado
console.log(path.normalize('c:\\temp/dir//subdir/dir'))

//responsável por juntar os parâmetros e criar um caminho
console.log(path.join('teste','teste2','teste3','teste4','dir2','..'))


//resolve mostra o caminho absoluto do arquivo desejado
console.log(path.resolve('path.js'))

//usado para pegar a extensão do arquivo
console.log(path.extname('path.js'))