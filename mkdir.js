/**
 * const fs = require('fs')

//criando pastas
//{recursive:true} permite criar os subdiretórios automaticamente
fs.mkdir('projetos//assets/image',{recursive: true}, (err, data)=>{
    if(err) throw err;
    console.log('Diretório criado com sucesso')
})
 */
const fs = require('fs')
const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){
    //percorrendo o array assets, e para cada item do array
    //será criado uma subpasta com o mesmo nome do item 
    //encontrado no array
    //além de exibir algum erro usando modo assincrono com callback
    //e mostrando no console as subpastas criadas com sucesso
    dir.forEach((item) => {
            fs.mkdir(`projetos/assets/${item}`,{recursive: true}, (err)=>{
            if(err) throw err;
            console.log('Diretório criado com sucesso : ' + item)
        })
        
    })
}
make(assets)