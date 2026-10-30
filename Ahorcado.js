let palabra = "JAVASCRIPT";
let letrasAdivinadas = [];
let intentos = 6;
let gano = false;

alert("¡Bienvenido al juego del ahorcado!");

while (intentos > 0 && gano == false) {

let palabraOculta = "";
let letrasFaltantes = 0;

for (let i = 0; i < palabra.length; i++) {

let letra = palabra[i];

if (letrasAdivinadas.includes(letra)) {
palabraOculta += letra + " ";
} else {
palabraOculta += "_ ";
letrasFaltantes++;
}
}

if (letrasFaltantes == 0) {
gano = true;
break;
}

let respuesta = prompt(
"Palabra: " + palabraOculta +
"\nIntentos restantes: " + intentos +
"\nEscribe una letra:"
);

if (respuesta == null) {
break;
}

let letraUsuario = respuesta.toUpperCase();

if (letraUsuario.length != 1) {
alert("Debes ingresar solamente una letra");
continue;
}

if (letrasAdivinadas.includes(letraUsuario)) {
alert("Ya utilizaste esa letra");
continue;
}

letrasAdivinadas.push(letraUsuario);

let encontrada = false;

for (let i = 0; i < palabra.length; i++) {

if (palabra[i] == letraUsuario) {
encontrada = true;
}
}

if (encontrada == true) {
alert("¡Correcto! La letra está en la palabra");
} else {
intentos--;
alert("Incorrecto. Pierdes un intento");
}
}

if (gano == true) {
alert("¡Felicidades! Adivinaste: " + palabra);
} else if (intentos == 0) {
alert("Perdiste. La palabra era: " + palabra);
} else {
alert("Juego cancelado");
}