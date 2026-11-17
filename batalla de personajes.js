

let jugador1 = {
nombre: "Thor",
vida: 100,
ataque: 25
};

let jugador2 = {
nombre: "Doctor Doom",
vida: 100,
ataque: 20
};

console.log("=== AVENGERS DOOMSDAY: BATALLA ===");
console.log(jugador1.nombre, "VS", jugador2.nombre);

while (jugador1.vida > 0 && jugador2.vida > 0) {

jugador2.vida = jugador2.vida - jugador1.ataque;

if (jugador2.vida < 0) {
jugador2.vida = 0;
}

console.log(jugador1.nombre + " ataca. Vida de " + jugador2.nombre + ": " + jugador2.vida);

if (jugador2.vida == 0) {
break;
}

jugador1.vida = jugador1.vida - jugador2.ataque;

if (jugador1.vida < 0) {
jugador1.vida = 0;
}

console.log(jugador2.nombre + " ataca. Vida de " + jugador1.nombre + ": " + jugador1.vida);
}

if (jugador1.vida > 0) {
console.log("El ganador es: " + jugador1.nombre);
} else {
console.log("El ganador es: " + jugador2.nombre);
}
