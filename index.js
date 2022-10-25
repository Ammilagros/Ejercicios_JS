const logger = require("./logger");

//logger.log("Hola estoy salinedo por pantalla") - no contemplado por winston
logger.info("Esto es un mensaje informativo")
logger.debug("Esto es un mensaje de bugg")
logger.warn("Esta es una advertencia")


//En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
    function ejercicio_error(valor){
        if(typeof valor === "number"){
             return valor * 2;
        }
    }
    throw new Error("El valor debe ser de tipo number");
    const doble = ejercicio_error(valor);

//Registra el error en un archivo a través de un try...catch

try {
    console.log("Esra ejecutandose de manera correcta")
    const doble = ejercico_eror("veintitres")
}catch(e){
    console.log("ERROR!")
}