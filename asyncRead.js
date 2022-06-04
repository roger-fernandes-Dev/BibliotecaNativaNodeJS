const fs = require('fs').promises

async function read(){
    const data = await fs.readFile('arquivo.txt', 'binary')
    return new Buffer.from(data)
}

try{
    read().then(data => console.log(data.toString()))
}catch(error){
    console.log(error)
}