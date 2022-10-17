//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos_personales = {
    nombre:  "Milagros",
    apellido: "Andres",
    edad:     24      ,
    altura:   1.60
};

//- Una variable que obtenga tu edad a partir del objeto anterior
let edad = "24";
console.log(datos_personales[edad])

//- Una lista que contenga el objeto con tus datos personales 
//y un nuevo objeto con los datos personales de tus dos mejores amig@s

const persona = {...datos_personales};

const persona1    = persona;
persona1.nombre   = "Federico";
persona1.apellido = "Ludueña";
persona1.edad     =  23;
persona.altura    =  1.80;

const persona2    = persona;
persona2.nombre   = "Emilio";
persona2.apellido = "Grisolia";
persona2.edad     =  28;
persona.altura    = 1.83;


//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const mejoresAmigos = {persona, persona1, persona2};

console.log(mejoresAmigos);

mejoresAmigos.sort((a, b) => a.edad - b.edad);