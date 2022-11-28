let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

receta.ingredientes.push({nombre: "Pan", cantidad: 2});
receta.ingredientes.push({nombre: "Queso", cantidad: 1});

console.log(receta.ingredientes[0].nombre);

let cantidad = 0;

receta.ingredientes.forEach(e => {
    cantidad += e.cantidad;
});

console.log('Cantidad de ingredientes: ' + cantidad);

