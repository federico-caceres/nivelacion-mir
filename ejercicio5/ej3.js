function maxIndex(arreglo){

    let maximo = 0;

    if (arreglo.length === 0) {
        return -1;
    }

    for (let index = 0; index < arreglo.length; index++) 
    {        
        if ( arreglo[index] > maximo ) 
        {
            maximo = arreglo[index];
        } 
    }
    return arreglo.indexOf(maximo);
}

console.log( maxIndex( [1,3,2] ) );
console.log( maxIndex( [10,9,8,7,6,5,4] ) );
console.log( maxIndex( [] ) );