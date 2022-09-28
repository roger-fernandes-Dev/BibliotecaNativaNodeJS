const {EventEmitter} = require('events')

const emitter = new EventEmitter()

const validaObjetos = (a)=>{
    if(typeof a != 'object'){
        //emitindo um evento para o erro
        emitter.emit('error', new Error('tipo informado inválido'))
    }else{
        console.log('objeto válido')
    }
    
}
//ouvindo o evento de duas formas
emitter.on('error', (err)=>{
    console.log('Evento: ' + err.message)
})
emitter.addListener('error', (err)=>{
    console.log('Evento: ' + err.message)
})

let dados = {name: 'hcode', course: 'nodejs'}

validaObjetos(dados)