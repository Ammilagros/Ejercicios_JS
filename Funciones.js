
//Ejercicios Funciones

//Una función sin parámetros que devuelva siempre "true"
    function sinParamentros(){
        return true;
    }

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
    const promesa = setTimeout(
        function(){
            console.log("Hola soy una Promesa");
        }, 
        5000);

//Una función generadora de índices pares automáticos
function* indice(){
    let indice_automatico = 0;
    while(true){
        yield indice_automatico++
        return
    } 
};

const generadoraIndices = indice();


//--------------------------------------------------------------------------------------------------

// Carga y sobrecarga de funciones
function saludar(){
    hola()
}

function hola(){
    console.log("Hola!")
}

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()
///Este proceso optimiza la carga de memoria dentro de JavaScript

//Funciones asincronas y promesas

function miAsinc(){
    //hace una llamada a una base de datos externa
    //puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
    //Si esta todo correcto
    if(false){
        resolve()
    } else {
        reject()
    }
})

