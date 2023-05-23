'use strict'

/* --------------- Arrays ----------------------- */
const videogames = ["Overwatch", "World of Warcraft", "Counter Strike GO", "Fallout"];
const perro = ["Rhino", 8, {perros: 15, altura: 0.56}]
// Unir arreglos
const arrayUnido = [...perro,...videogames];
console.log(arrayUnido)

/* -------- Recorrido de Arreglos ------------- */
const comidas = ["Encebollado", "Hornado", "Fritada", "Yaguarlocro", "Ceviche"];
// Metodo 1:
for(let i = 0; i < comidas.length; i++){
    console.log(`Comidas: ${comidas[i]}`)
}
console.log("\n---------------------")
// Metodo 2:
comidas.forEach((j,i) => {
    console.log(`${i}: ${j}`)
});
console.log("\n---------------------")
// Metodo 3
const masComidas = comidas.map((i) => `Comida: ${i}`)
// console.log(comidas)
console.log(masComidas)

/* ------------------- Metodos Arreglos ----------------- */
const lenguajesProgramacion = ["Java", "C#", "C++", "JavaScript"];
// -Push 
let otroLenguje
otroLenguje = "Python"
lenguajesProgramacion.push(otroLenguje)
lenguajesProgramacion.forEach(i => {console.log(`- ${i}`)});
console.log("\n---------------------")
// -unshift
otroLenguje = "Ruby"
lenguajesProgramacion.unshift(otroLenguje)
lenguajesProgramacion.forEach(i => {console.log(`- ${i}`)})
console.log("\n---------------------")
// -pop/shift
lenguajesProgramacion.pop(lenguajesProgramacion)
lenguajesProgramacion.forEach(i => {console.log(`- ${i}`)});
console.log("------------------")
lenguajesProgramacion.shift(lenguajesProgramacion)
lenguajesProgramacion.forEach(i => {console.log(`- ${i}`)});
console.log("\n---------------------")
// -find / finindex
let lenguaje = lenguajesProgramacion.find((j) => j === "Java")
console.log(`${lenguaje}`)
lenguaje = lenguajesProgramacion.findIndex((j) => j === "Java")
console.log(`${lenguaje}`)
console.log("\n---------------------")
// -filter
let filtros = lenguajesProgramacion.filter((j) => j.startsWith("C"))
console.log(`${filtros}`)
console.log("\n---------------------")
// -Concat
const noLenguajes = ["JSON", "XML", "HTML"]
const general = lenguajesProgramacion.concat(noLenguajes)
console.log(`${general}`)
console.log("\n---------------------")
// -reverse
console.log(`${lenguajesProgramacion.reverse()}`)
console.log("\n---------------------")
// -sort
console.log(`${lenguajesProgramacion.sort()}`)
console.log("\n---------------------")

/* ---------------------- Desestructuracion de Arreglos ------------------------- */
const [NomPerr, edadPerr, caracPerr] = perro
console.log(`${NomPerr}`)
console.log(`${edadPerr}`)
console.log(caracPerr)
console.log("---------------------")
const [leng1, leng2 ,] = lenguajesProgramacion
console.log(`${leng1}`)
console.log(`${leng2}`)
console.log("\n---------------------")

/* -------------------- rest - Arreglos ---------------------- */
const [java, ,c ,...rest] = lenguajesProgramacion
console.log(java)
console.log(c)
console.log(rest)

