//Bucles for
for (inicializacion; condicion; actualizacion){
    //Esto es el bucle
}

for (let i = 0; i < 10; i = i ++){
    console.log(i)
}

let lista = [1, 4, 6, 3, 6, 9, 13 ];
for (let i = 0; i  < lista.length; i++){
    console.log(lista[i] * 5)
}

//Estructura for...of

for(let valor of lista){
    console.log(valor)
}

//Estructura forEach

lista.forEach(valor => {
    console.log(valor)
});

//Estructura ForIn

let persona ={
    nombre: "Gorka",
    apellido: "Villar",
    edad: 35,
    isDeveloper: true
}

for (let _propiedad in persona){
    console.log(_propiedad)
    console.log(persona[_propiedad])
}

//Bucles while

while (condition) {
    //Aqui se ejecuta el bucle 
}

let i   = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++;
}

//Controlar bucle con break y continue
//Para casos especificos.
//No es una buena practica, porque dificulta la legibilidad del codigo.
let lista = [3, 5, 6, 9];

for (let i = 0; i  < lista.length; i++;){
    console.log(lista[i]);

    if(lista[i] === 3){
        continue;
    }
    if (lista[i]  < 10){
        break;
    }
}