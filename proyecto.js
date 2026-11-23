
const TITULO = "Avengers Doomsday";
let salir = false;
let cambios = 0;

console.log(typeof TITULO);
console.log(typeof salir);

let personajes = [
{ nombre: "Doctor Doom", poder: 100, misiones: 12 },
{ nombre: "Reed Richards", poder: 92, misiones: 9 },
{ nombre: "Sam Wilson", poder: 88, misiones: 11 }
];

alert("Bienvenido a " + TITULO);

while (salir === false) {
let opcion = prompt(
"MENU PRINCIPAL - AVENGERS DOOMSDAY\n" +
"1. Registrar personaje\n" +
"2. Consultar personajes\n" +
"3. Calcular promedio de poder\n" +
"4. Modificar o eliminar personaje\n" +
"5. Salir\n" +
"Elige una opción:"
);

if (opcion === "1") {

let nombre = prompt("Escribe el nombre del personaje (ej. Sue Storm, Yelena Belova):");
let poder = Number(prompt("Escribe su nivel de poder (1 al 100):"));
let misiones = Number(prompt("Escribe sus misiones completadas:"));

if (nombre === "" || nombre === null || isNaN(poder) || isNaN(misiones)) {
alert("Advertencia: Datos inválidos, intenta de nuevo.");
} else {
let nuevoPersonaje = {
nombre: nombre,
poder: poder,
misiones: misiones
};
personajes.push(nuevoPersonaje);
cambios = cambios + 1;
alert("Personaje registrado correctamente.");
}

} else if (opcion === "2") {

let lista = "LISTA DE PERSONAJES EN DOOMSDAY:\n";
for (let i = 0; i < personajes.length; i++) {
lista = lista + (i + 1) + ". " + personajes[i].nombre + " - Poder: " + personajes[i].poder + " - Misiones: " + personajes[i].misiones + "\n";
}
alert(lista);

} else if (opcion === "3") {

let sumaPoder = 0;
let totalMisiones = 0;

for (let i = 0; i < personajes.length; i++) {
sumaPoder = sumaPoder + personajes[i].poder;
totalMisiones = totalMisiones + personajes[i].misiones;
}

let promedio = sumaPoder / personajes.length;

if (promedio >= 90 && personajes.length > 0) {
alert("Promedio de poder: " + promedio + " (Listos para enfrentar a Doom)\nTotal de misiones: " + totalMisiones);
} else {
alert("Promedio de poder: " + promedio + " (Se necesitan más aliados)\nTotal de misiones: " + totalMisiones);
}

} else if (opcion === "4") {

let accion = prompt("1. Modificar poder\n2. Eliminar personaje");

if (accion === "1") {
let numero = Number(prompt("Número de personaje a modificar (1 a " + personajes.length + "):")) - 1;

if (numero >= 0 && numero < personajes.length) {
let nuevoPoder = Number(prompt("Escribe el nuevo nivel de poder:"));
if (!isNaN(nuevoPoder)) {
personajes[numero].poder = nuevoPoder;
cambios = cambios + 1;
alert("Poder actualizado.");
} else {
alert("Error: debes escribir un número.");
}
} else {
alert("Número de personaje no válido.");
}

} else if (accion === "2") {
let numero = Number(prompt("Número de personaje a eliminar (1 a " + personajes.length + "):")) - 1;

if (numero >= 0 && numero < personajes.length) {
personajes.splice(numero, 1);
cambios = cambios + 1;
alert("Personaje eliminado.");
} else {
alert("Número de personaje no válido.");
}
} else {
alert("Opción no válida.");
}

} else if (opcion === "5") {

alert("Saliendo del programa. Cambios realizados: " + cambios);
salir = true;

} else {
alert("Opción incorrecta, elige del 1 al 5.");
}
}