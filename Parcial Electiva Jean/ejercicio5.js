const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventario = [];

//fucciones
function esNumeroPositivo(valor) {
        const num= parseFloat(valor);
        return !isNaN(num) && num >= 0;
}

function codigoExiste(codigo) {
        return inventario.some(p=> p.codigo===codigo);
}


function agregarProducto() {
    entrada.question("codigo del producto: ",(codigo) => {

    if (codigoExiste(codigo)) {
        console.log("error: El código ya existe");
        return agregarProducto();
    }

    entrada.question("nombre del producto: ", (nombre) => {

        entrada.question("precio: ",(precio) => {
        if (!esNumeroPositivo(precio)) {

            console.log("error: El precio debe ser un número positivo.");
            return agregarProducto();
        }

        entrada.question("stock: ",(stock) => {
            if (!esNumeroPositivo(stock)) {
            console.log("error: El stock debe ser un número positivo");
            return agregarProducto();
}
//parseInt (convierte a entero)
    const estado = parseInt(stock) > 0 ? "disponible" : "agotado";
            inventario.push({
            codigo,
            nombre,
            precio: parseFloat(precio),
            stock: parseInt(stock),
            estado
            });

            console.log(`producto  "${nombre}" agregado correctamente`);
            mostrarMenu();
        });
    });
            });
        });
}


function actualizarStock() {
        entrada.question("codigo del producto a actualizar: ", (codigo) => {
            //find (encotrar algo en el array)
    const producto = inventario.find(p => p.codigo === codigo);
    if (!producto) {
        console.log("producto no encontrado.");
        return mostrarMenu();
}

    entrada.question("nuevo stock: ", (nuevoStock) => {
        if (!esNumeroPositivo(nuevoStock)) {
        console.log("error: El stock debe ser un número positivo");
        return actualizarStock();
}

        producto.stock = parseInt(nuevoStock);
        producto.estado = producto.stock > 0  ? "Disponible" : "Agotado";
            console.log(`stock actualizado para "${producto.nombre}"`);
            mostrarMenu();
            });
    });
}


function listarProductos() {
    if (inventario.length === 0) {
    console.log("no hay productos en el inventario");

    } else {
        //...crea una copia
        //.sort ordena(array)
    const ordenados = [...inventario].sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log("\nlista de productos:");
    ordenados.forEach(p => {
//.toFixed poner limite al decimal
    console.log(`${p.nombre} | Codigoo:${p.codigo} | precio:$${p.precio.toFixed(2)} | stock:${p.stock} | estado:${p.estado}`);
    });
    }
    mostrarMenu();
}


function mostrarMenu() {

    console.log("\n ---MENU---- :");
    console.log("1. agregar producto");
    console.log("2. actualizar stock");
    console.log("3. listar productos");
    console.log("4. salir");

    entrada.question("elige una opción: ",(opcion) => {
    switch (opcion) {
        case "1":
        agregarProducto();
        break;
        case "2":
        actualizarStock();
            break;
        case "3":
        listarProductos();
            break;
        case "4":
        console.log("rograma finalizado");
        rl.close();
            break;
            default:
        console.log("opción inválida");
        mostrarMenu();
    }
    });
}
//llamamos
mostrarMenu();