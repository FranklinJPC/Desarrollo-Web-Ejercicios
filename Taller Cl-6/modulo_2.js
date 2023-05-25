/* ----------- ES Module ---------------- */
export const loginPKM = (user, pass, pkfav) =>{
    if (user === "Jhowellz" && pass === "1234") {
        console.log("-----------------")
        console.log("| Bienvenido!!")
        console.log("-----------------")
        console.log("---------------------------")
        console.log("Datos Pokemon")
        pokemonFavorito(pkfav)
        console.log("----------------------------")
    } else {
        console.log("Datos Incorrectos!!!")
    }
}
const pokemonFavorito = async (nombre)=>{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const response = await pokemon.json()
    console.log("Pokemon:", response.name)
    console.log("Sprite:", response.sprites.front_default)
    console.log("Stat:", response.stats[0].base_stat)
    console.log("Habilidaddes:", response.abilities[1].ability.name)
    console.log("----------------------------\n")
}
