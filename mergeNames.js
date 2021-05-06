const fs = require('fs');
fs.readFile('./nombres.txt', 'utf-8', (err, names) => {
    if (err) {
        console.log('No hay nombres');
        console.log(err);
    } else {
        fs.readFile('./apellidos.txt', 'utf-8', (err, lasts) => {
            if (err) {
                console.log('No hay apellidos');
                console.log(err);
            } else {
                namesArray = names.split('\n');
                lastnamesArray = lasts.split('\n');
                if (namesArray.length !== lastnamesArray.length) {
                    console.log('Error: Número de nombres y apellidos debe coincidir')
                } else {
                    namesArray.forEach((name, index) => {
                        console.log(`${name} ${lastnamesArray[index]}`);
                    })
                }
            }
        });
    }
});