
let notas = [85, 60, 90];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
console.log(notas[i]);

if (notas[i] > 70) {
console.log("Aprobado");
} else {
console.log("No aprobo");
}

suma = suma + notas[i];
}

let promedio = suma / 3;
console.log("Promedio:", promedio);