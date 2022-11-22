function max(arreglo){

    let maximo = 0;

    if (arreglo.length === 0) {
        return undefined;
    }

    for (let index = 0; index < arreglo.length; index++) 
    {        
        if ( arreglo[index] > maximo ) 
        {
            maximo = arreglo[index];
        } 
    }
    return maximo;
}

console.log( max( [1,3,2] ) );
console.log( max( [10,9,8,7,6,5,4] ) );
console.log( max( [] ) );