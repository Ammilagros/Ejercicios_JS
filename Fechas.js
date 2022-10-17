//La fecha de hoy
const fechaHoy = new Date();

//La fecha de tu nacimiento
const cumpleaños = new Date(1998,04,21, 17, 45, 00)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const hoyEsMasTarde = fechaHoy > cumpleaños;

//Una variable que contenga el día de tu nacimiento
const diaCumpleaños = cumpleaños.getDay();

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesCumpleaños = cumpleaños.getMonth();

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const añoNacimiento = 1998;