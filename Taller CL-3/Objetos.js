'use strict';

/* -------- Objetos -------- */

/* ------- Deconstruccion ------ */
const character = {
    nombre: "Mell",
    clase: "DK",
    especializacion: "Profano",
    stats:{
        vida: "45000",
        mana: "500",
        agudeza: "5",
        fuerza: "30",
        resistencia: "50",
        velocidad: "25"
    }
}

const {nombre, clase, especializacion} = character;
console.log("--- Jugador -----")
console.log(`- ${nombre}`)
console.log(`- ${clase}`)
console.log(`- ${especializacion}`)
//console.log(character);

/* -------- Frezee --------- */
Object.freeze(character);
console.log(Object.isFrozen(character) == true ? "No se puede cambiar el nombre": "Cambio de nombre")

/* ----- Copiar Objetos */

const usuario = {
    name: "Franklin",
    lastname: "Patinio",
    correo: "jph@gmail.com",
    password: "XXXXXX222"
}

const characterNew = {
    nombre: "Ukir",
    clase: "Chaman",
    especializacion: "DPS",
    stats:{
        vida: "30000",
        mana: "2000",
        agudeza: "50",
        fuerza: "5",
        resistencia: "10",
        velocidad: "35"
    }
}

const informacionPersonajes = {...usuario,...characterNew}
console.log(informacionPersonajes)

/* -------- this ------- */

console.log("\n---------------------------")
const animales ={
    nombres: ['Midnight', 'Garfiel' , 'Luna', 'Vela'],
    edad: [4,3,1,2],
    verInformacion(){
        let num;
        num = Math.floor(Math.random() * 3);
        switch(num){
            case 0:
                console.log(`Nombre: ${this.nombres[0]}`)
                console.log(`Edad: ${this.edad[0]}`)
            break;
            case 1:
                console.log(`Nombre: ${this.nombres[1]}`)
                console.log(`Edad: ${this.edad[1]}`)
            break;
            case 2:
                console.log(`Nombre: ${this.nombres[2]}`)
                console.log(`Edad: ${this.edad[2]}`)
            break;
            case 3:
                console.log(`Nombre: ${this.nombres[3]}`)
                console.log(`Edad: ${this.edad[3]}`)
            break;
        }
    }
}
animales.verInformacion();
console.log("--------------------------\n")

/* ---------- Metodos de acceso ---------- */
console.log("-------------------------------")
console.log("Ver datos de Jugadores")
console.log("------")
console.log("Usuario: ",Object.values(character))
console.log("\n-------")
console.log("Usuario: ",Object.values(characterNew))