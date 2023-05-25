/* ---------------- APis ----------------------- */
/* ------ Fundamento base ---------- */
const obetnerPokemon = async (nombre)=>{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const response = await pokemon.json()
    console.log("Pokemon:", response.name)
    console.log("Sprite:", response.sprites.front_default)
}
obetnerPokemon("sprigatito")