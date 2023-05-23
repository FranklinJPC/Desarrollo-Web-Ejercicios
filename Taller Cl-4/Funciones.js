'use strict'

/* ---------------------- Funciones ------------------------ */
// declarada
function DecholMundo(){
    console.log("Hello World")
}
DecholMundo()
// Expresad
const exprHolaMundo = function(){
    console.log("Hello World")
}
exprHolaMundo()
console.log("\n---------------------")

/* ---------- Parametros -------- */
function bienvenido(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido} \nBienvenido a Valve!!!`)
}
bienvenido("Franklin", "Patinio")
console.log("\n---------------------")
const Multiplicacion = (numero1, numero2) =>{
    console.log(`Multiplicacion: ${numero1} * ${numero2} =`, numero1 * numero2)
}
Multiplicacion(12,5)
// rest
function suma(num1, num2, ...args){
    let resultado =0;
    let total = resultado + num1 + num2;
    console.log((args.length) > 0 ? args.forEach(i => console.log(total += i)): `Resultado: ${total}`)
}
suma(1,3,5)
console.log("\n---------------------")

/* ------------- Retorno --------------- */
function saludo(sino){
    return (sino) ? "Hola" : "........ok"
}
let saludos = saludo(true)
console.log(`${saludos}`)
console.log("\n---------------------")

/* -------------- Flecha ------------------- */
// diferencia 
function ccuenta(activo){
    return (activo) ? "Activado": "No activado"
}
let fucCuenta = ccuenta(true)
console.log(`Funcion normal: ${fucCuenta}`)
const cuenta = (activado) =>{
    return (activado) ? "Activado": "No activado"
}
fucCuenta = cuenta(false)
console.log(`Funcion flecha: ${fucCuenta}`)
console.log("\n---------------------")

/* ------------- This -------------------- */
const miPedido ={
    plato: "Hornado",
    nombre: 'Mell',
    cajero: "Jhowellz",
    paltoListo: function(){
        setTimeout(() =>{
            console.log("Plato listo: " + this.plato)
        }, 1000)
    }
}
miPedido.paltoListo()