const fs = require('fs');
const colors = require('colors');


const crearArchivo = ( base  = 5, listado = false, hasta = 10) => {
    
    return new Promise( (resolve, reject) => {

    
        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${ base } x ${i} = ${ base * i}\n`;
            consola += `${ base } ${ 'x'.green } ${i} ${ '='.green} ${ base * i}\n`;
        }
        if(listado){
            console.log('=============='.green);
            console.log(' Tabla del:', colors.blue( base ));
            console.log('=============='.green);
            console.log(consola);
        }        
    
        /*fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
    
            console.log(`tabla-${base}.txt creado `);
        } )*/
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida); //para atrapar un error se couparía un try y catch
        console.log(`tabla-${base}.txt creado`);
    })
}

module.exports = {
    crearArchivo
}