function join(arreglo){

    let cadena = '';

    for (let index = 0; index < arreglo.length; index++) {
        if (index === 0) {
            cadena = arreglo[index];
        }else{
            cadena = cadena + ' ' + arreglo[index];
        }
    }
    return cadena;
}

console.log( join(['Hola', 'Mundo']) );
console.log( join(['Make', 'it', 'Real']) );
console.log( join([]) );