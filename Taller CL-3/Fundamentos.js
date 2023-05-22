'use strict';

/* ----- VARIABLES ------- */

const nickname = "Jhowellz";
var HP = 500;
let SH = 200;
let CLASS = "Druid";

console.log("\nINFORMACION DEL JUGADOR")
console.log("-------------------")
console.log(`Jugador: ${nickname}`);
console.log(`Salud: ${HP}`);
console.log(`Mana: ${SH}`);
console.log(`Clase: ${CLASS}`);
console.log("--------------------\n")

/* ------ Strings -------- */

let nCuenta = "1234567890";
let cedula = "1752630249";
let tarjeta = "00057915498";
let duenio = "Franklin Patinio";

console.log("INFORMACION DE CUENTA")
console.log("---------------------------")
console.log(`Cedula: ${cedula.length == 10 ? `${cedula}` : `Cedula no encontrada`}`)
//console.log(`${duenio}`.split(" "));
console.log("Imagen: " + `${duenio}`.slice(0,1) + `${duenio}`.slice(9,10))
console.log(`Nombre: ${duenio}`.replace("ni", "ñ"));
console.log("Cuenta: *****" + `${nCuenta}`.substring(6,10))
console.log("Tarjeta: XXXX" + `${tarjeta}`.substring(7,`${tarjeta}`.length))
console.log("---------------------------\n")

/* --------- Numeros ---------- */

let sueldo = "450.25";
let comision = "100";
const IVA = 0.12;

let sueldoCH = Number.parseFloat(sueldo);
let comisionCH = Number.parseInt(comision);

console.log("--------------")
console.log("Sueldo: " + ((sueldoCH + comisionCH) - ((sueldoCH + comisionCH) * IVA)))
console.log("--------------\n\n")

/* ------- Condicionales y Bucles ------------ */

let notas = [];
let contador = 8;

// Conveniencia para crear varias notas
while(contador != 0){
    notas.push(Math.floor(Math.random() * 11));
    contador--;
}
console.log("\n---------------------------------------")
notas.forEach((j,i) => {
    console.log(`Nota ${i+1}: `,`${j}`);
});

for(let i = 0; i < notas.length; i++){
    if(notas[i] <= 10 && notas[i] >= 8){
        console.log("\n-----------------")
        console.log("Excelente")
        console.log("Notas: " + `${notas[i]}`)
        console.log("-----------------\n")
    }
    else if(notas[i] < 8 && notas[i] >= 7){
        console.log("\n-----------------")
        console.log("Bien");
        console.log("Notas: " + `${notas[i]}`)
        console.log("-----------------\n")
    }
    else{
        console.log("\n-----------------")
        console.log("Mal!!")
        console.log("Notas: " + `${notas[i]}`)
        console.log("-----------------\n")
    }
}

// Con ForEach
// notas.forEach((j) => {
//     if(j <= 10 && j >= 8){
//         console.log("\n-----------------")
//         console.log("Excelente")
//         console.log("Notas: " + `${j}`)
//         console.log("-----------------\n")
//     }
//     else if(j < 8 && j >= 7){
//         console.log("\n-----------------")
//         console.log("Bien");
//         console.log("Notas: " + `${j}`)
//         console.log("-----------------\n")
//     }
//     else{
//         console.log("\n-----------------")
//         console.log("Mal!!")
//         console.log("Notas: " + `${j}`)
//         console.log("-----------------\n")
//     }
// });