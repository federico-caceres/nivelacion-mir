function calcularColor(numero){
    switch (numero) {
        case 1:
            return "El color es negro"
            break;
        case 2:
            return "El color es blanco"
            break;
        case 3:
            return "El color es azul"
            break;
    
        default:
            return "El color es verde"
            break;
    }
}

console.log(calcularColor(1))
console.log(calcularColor(2))
console.log(calcularColor(3))
console.log(calcularColor(4))