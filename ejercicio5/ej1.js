function sum(arreglo){
    let contador = 0;
    for (let index = 0; index < arreglo.length; index++) {
        contador = contador + arreglo[index];
    }
    return contador;
}

console.log( sum([1,2,3]) );
console.log( sum([10, 8, 12, 5]) );
console.log( sum([0]) );