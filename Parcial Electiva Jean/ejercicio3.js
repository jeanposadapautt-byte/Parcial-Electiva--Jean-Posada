const estudiantes = [
    {
        cedula : '10987654321',
        apellidos :'Vanegas Bolaño',
        nombres : 'Joseph David',
        Programa : 'Ingeniería de Sistemas',
        materias : ['Algoritmo','calculo','Ingles'],
        promedioNots: 8.75
    },
    {
        cedula : '12345678910',
        apellidos :'Garcia Perez',
        nombres : 'Maria jose',
        Programa : 'Medicina',
        materias : ['Quimiica','Biologia','Ingles'],
        promedioNots: 9.25
    },
    {
        cedula : '11234567890',
        apellidos :'Rodriguez Sanchez',
        nombres : 'Ana Lucia',
        Programa : 'Derecho',
        materias : ['Humanidades','Procesas','Ingles'],
        promedioNots: 9.10
    },
    {
        cedula : '1009876543',
        apellidos :'Torres Zambrano',
        nombres : 'Diego Alejandro',
        Programa : 'Arquitectura',
        materias : ['Diseño','calculo','Ingles'],
        promedioNots: 8.50
    },
    {
        cedula : '0098765432',
        apellidos :'Vera Castillo',
        nombres : 'Sofia Valentina',
        Programa : 'Psicología',
        materias : ['Psicologia','Sociales','Humanidades'],
        promedioNots: 9.75
    }
]

//funciones
function aregarNEstudiantes(cedula, apellidos, nombres, Programa, materias, promedioNots){

estudiantes.push(cedula, apellidos, nombres, Programa, materias, promedioNots);
console.log("estudiante agregado:",estudiantes);
}

function listarEstudiantes(){

    //.sort ordena(array)
    const ordenarApellidos=[estudiantes].sort((a,b)=>a.apellidos.localeCompare(b.apellidos));//locale(ordenaen alfabeto)
    console.log('lista de estudiantes :',estudiantes)
}

function BuscarEstudiantes(cedula){

    for (let i = 0; i<estudiantes.length; i++) {

        if(estudiantes[i].cedula === cedula){
            return estudiantes[i];
        }else{
            console.log("estudinate no Encontradp")
            
        }
    }
}

function actualizarDEstudiantes(cedula,NEstudiantes){

for(let i=0; i<estudiantes.length; i++){

    if(estudiantes[i].cedula===cedula){
    estudiantes[i]=NEstudiantes;
    console.log("estudiuante Actualizado:",estudiantes[i]);
    return;
    }
}
}
function eliminarEstudiantes(){

estudiantes.pop();//elimana el ultimo
    console.log('estudiante eliminado:',estudiantes)

}
//llamamos
aregarNEstudiantes("2000000000","lopez garcia","deiker andres", "ing industrial","calculo","fisica","quimica",8.90);
listarEstudiantes();
console.log(BuscarEstudiantes('12345678910'));
actualizarDEstudiantes("10987654321",{cedula:'01987654321'});
eliminarEstudiantes();
