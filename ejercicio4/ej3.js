function sum(numero){
    let num = numero
    let total=0
    while (num>0) {
        total= total + num
        num = num-1
    }
    return total
}


console.log(sum(4))
console.log(sum(10))
console.log(sum(15))