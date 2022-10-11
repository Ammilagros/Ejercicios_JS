//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras = ["lechuga", "tomate", "palta", "papa", "banana"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
let nuevaLista = compras.push("Aceite de Girasol");

//vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

console.log(compras.pop("Aceite de Girasol"));

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculasFavoritas = [
    {titulo : "Bastardos sin Gloria" , director: "Queentin Tarantino", fecha :"2009"},
    {titulo : "Tiempos Violentos" , director: "Queentin Tarantino", fecha :"1994"},
    {titulo : "Django Django" , director: "Queentin Tarantino", fecha :"2021"}
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let peliculasPost2010 = peliculasFavoritas.filter(fecha > "2010");

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

let listaDirectores = peliculasFavoritas.map(function(element) {
        return `${element.director} `;
})

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

let listaTitulos = peliculasFavoritas.map(function(element) {
    return `${element.titulo} `;
})

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

let listaConcatenada = listaDirectores.concat(listaTitulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directoresYtitulos = listaDirectores.from(listaTitulos);