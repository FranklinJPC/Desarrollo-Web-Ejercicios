'use strict'

/* ----------------------------- Asincronismo ------------------------------ */
/* --------------- Fundamento ----------------- */
// const envio = (nombre, direccion)=>{
//     console.log(`Lugar de recibimiento: ${direccion}`)
//     console.log(`Nombre: ${nombre}`)
//     console.log("Costo: 45$")
//     console.log("En proceso.....")
//     setTimeout(function tiempoLllegada() {
//         console.log("\n----------------------")
//         console.log("Enviando...")
//         console.log("----------------------")
//     }, 5000)
//     console.log("Envio realizado!!")
//     setTimeout(function recibo(){
//         console.log("----------------------")
//         console.log("Envio llego a su destino")
//         console.log("----------------------")
//     },10000)
// }
// envio("Franklin Patinio", "Quito")

/* -------------- Promesas --------------- */
console.log("\n-------------------------------------")
const cuenta = (dato, pass) =>{
    return new Promise((resuleto, rechazado) =>{
        setTimeout(()=>{
            (dato === "Frank" && pass == "1234") ? resuleto(`Bienvenido ${dato}!!`): rechazado("Datos Incorrectos")
        },2000)
    })
}
cuenta("Frank", "1234")
    .then(respues => (console.log(respues)))
    .catch(error => (console.log(error)))

/* ------------- Async Await --------------------- */
async function cuentaConexion(){
    try {
        console.log(await cuenta("Frank", "1234"))
    } catch (error) {
        console.log(error)   
    }
}
cuentaConexion()
