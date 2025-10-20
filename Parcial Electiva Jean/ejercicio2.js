const readline = require('readline');

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const almacenar = [];

//funciones
function validoT(texto) {
  return texto.trim().length > 0;
}

function validoA(valor) {

  const num = parseInt(valor);
  return !isNaN(num) && num > 0;
}

function agregarLibro() {
  entrada.question("titulo del libro: ",(titulo) => {
    if (!validoT(titulo)) return error(agregarLibro, "titulo no puede estar vacio");

        entrada.question("autor: ",(autor) => {
        if (!ValidoT(autor)) return error(agregarLibro, "autor no puede estar vacio");

        entrada.question("año de publicación: ",(año)=> {
          if (!validoA(año)) return error(agregarLibro, "El año debe ser un numero positivo");

        entrada.question("ISBN: ",(isbn) => {
          if (!validoT(isbn)) return error(agregarLibro, "ISBN no puede estar vacio");

          almacenar.push({
            titulo: titulo.trim(),
            autor: autor.trim(),
            año: parseInt(año),
            isbn: isbn.trim()
          });


          console.log('Libro "${titulo}" agregado correctamente');
          mostrarMenu();
                });
          });
    });
        });
}

function listarLibros() {
  if (biblioteca.length=== 0) {
    console.log("no hay libros registrados");
  } else {
    console.log("\nlista de libros: ");
    biblioteca.forEach((libro, i) => {

      console.log(`${i + 1}. "${libro.titulo}" - ${libro.autor} (${libro.anio}) [ISBN: ${libro.isbn}]`);
    });
  }
  mostrarMenu();
}


function buscarLibros() {
  entrada.question("ingresa titulo o autor a buscar: ", (criterio) => {
    const texto = criterio.trim().toLowerCase();
    const resultados = biblioteca.filter(libro =>
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto)
    );

    if (resultados.length === 0) {
      console.log(`no se encontraron libros que coincidan con "${criterio}".`);
    } else {
      console.log(`resultados para "${criterio}":`);
      resultados.forEach(libro => {
        console.log(`- "${libro.titulo}" por ${libro.autor} (${libro.año})`);
      });
    }
    mostrarMenu();
  });
}

// Función para mostrar el menú
function mostrarMenu() {
  console.log("\n MENU:");
  console.log("1. agregar libro");
  console.log("2. listar libros");
  console.log("3. buscar libro");
  console.log("4. Salir");

  entrada.question("elige una opcion: ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarLibro();
        break;
      case "2":
        listarLibros();
        break;
      case "3":
        buscarLibros();
        break;
      case "4":
        console.log("programa finalizado.");
        rl.close();
        break;
      default:
        console.log("opcion inválida.");
        mostrarMenu();
    }
  });
}

//llamamos
function error(funcion, mensaje) {
  console.log(`${mensaje}`);
  funcion();
}

console.log(" bienvenido al gestor de libros:");
mostrarMenu();
