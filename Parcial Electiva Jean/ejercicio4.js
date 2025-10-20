const readline = require('readline');
const IVA = 0.19;

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [];
let subtotal = 0;

function validarNumero(valor) {
    const num= parseFloat(valor);
    return !isNaN(num) && num > 0;
}

//funciones
function ingresarProducto() {

        entrada.question("precio del producto: ",(precio) => {
    if (!validarNumero(precio)) {
        console.log("error: El precio debe ser un número positivo");
        return ingresarProducto();
    }

    entrada.question("Cantidad de unidades: ",(cantidad) => {
        if (!validarNumero(cantidad)) {
        console.log("error: La cantidad debe ser un número positivo.");
        return ingresarProducto();
}

        const precioNum=parseFloat(precio);
        const cantidadNum=parseInt(cantidad);
        const totalParcial=precioNum*cantidadNum;

        productos.push({
        precio: precioNum,
        cantidad: cantidadNum,
        total: totalParcial
            });

        subtotal += totalParcial;

        entrada.question("Deseas ingresar otro producto? (s/n): ", (respuesta) => {

        if (respuesta.toLowerCase() === 's') {
            ingresarProducto();

        } else {
            mostrarResumen();
            entrada.close();
                }
            });
        });
    });
}


function mostrarResumen() {
    console.log("\n---Resumen de la venta---");
    productos.forEach((p, i)=> {

    console.table(`${i + 1} Precio: $${p.precio.toFixed(2)} | Cantidad: ${p.cantidad} | Total parcial: $${p.total.toFixed(2)}`);
            });


            const iva = subtotal * IVA;
            const total = subtotal + iva;

        console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
        console.log(`IVA (19%): $${iva.toFixed(2)}`);
        console.log(`Total a pagar: $${total.toFixed(2)}`);
}

//llamamos
console.log("Registro de productos vendidos");
ingresarProducto();
