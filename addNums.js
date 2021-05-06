const fs = require('fs');
fs.readFile('./numeros.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log('Ocurrió un error al leer el archivo');
        console.log(err);
    } else {
        console.log(text.split('\n').reduce((el,nxt)=>(+el)+(+nxt),[]))
    }
});