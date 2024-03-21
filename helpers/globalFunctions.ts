export const shuffle = (pokemonArray: any[]) => {
  let counter = pokemonArray.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter -= 1
    const temp = pokemonArray[counter]
    pokemonArray[counter] = pokemonArray[index]
    pokemonArray[index] = temp
  }

  return pokemonArray
}

export const getStringIDfromID = (id: number) => {
  if (id >= 10 && id < 100) return `0${id}`
  if (id >= 100) return `${id}`
  return `00${id}`
}

export const getPokemonImage = (id: number) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getStringIDfromID(
    id
  )}.png`
}

export const uppercasedFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export const translateTypes = (type: string) => {
  const types = {
    normal: "normal",
    fire: "fuego",
    fighting: "lucha",
    water: "agua",
    flying: "volador",
    grass: "planta",
    poison: "veneno",
    electric: "eléctrico",
    ground: "tierra",
    psychic: "psíquico",
    rock: "roca",
    ice: "hielo",
    bug: "bicho",
    dragon: "dragón",
    ghost: "fantasma",
    dark: "siniestro",
    steel: "acero",
    fairy: "hada",
  }
  return uppercasedFirstLetter(types[type as keyof typeof types])
}

export const getColorsType = (type: string) => {
  const colors = {
    normal: "bg-normal",
    fire: "bg-fire",
    fighting: "bg-fighting",
    water: "bg-water",
    flying: "bg-flying",
    grass: "bg-grass",
    poison: "bg-poison",
    electric: "bg-electric",
    ground: "bg-ground",
    psychic: "bg-psychic",
    rock: "bg-rock",
    ice: "bg-ice",
    bug: "bg-bug",
    dragon: "bg-dragon",
    ghost: "bg-ghost",
    dark: "bg-dark",
    steel: "bg-steel",
    fairy: "bg-fairy"
  }
  
  return colors[type as keyof typeof colors]
}