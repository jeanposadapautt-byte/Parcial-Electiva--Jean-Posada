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
function BuscarEstudiante(cedula){
    //length devuelve la cantidad de caracteres de un arreglo
    for (let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i].cedula === cedula){
            return estudiantes[i];
        }
    }
    return 'estudnte no encotrado';
}
console.table(BuscarEstudiante('12345678910'));
console.table(BuscarEstudiante('!!0000000000!!'));
