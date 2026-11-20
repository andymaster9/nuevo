function saludar() {
let numero1;
let numero2;

numero1 = 15;
numero2 = 30;

numeroFinal = document.getElementById("titulo");
parrafoFinal = document.getElementById("nombre").value;
poderFinal = document.getElementById("poder").value;
resultadoFinal = document.getElementById("resultado");

console.log(numeroFinal);
console.log(parrafoFinal);
console.log(poderFinal);
console.log(resultadoFinal);
}

function login() {
let nombre = "Fernando";
let usuario = "fernando123";
let contrasena = "123";

let inputUsuario = document.getElementById("nombre").value;
let inputContrasena = document.getElementById("poder").value;

if (inputUsuario === usuario && inputContrasena === contrasena) {
console.log("Bienvenido " + nombre);
} else {
console.log("Usuario o contraseña incorrectos");
}
}

