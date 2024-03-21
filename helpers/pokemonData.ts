import axios from "axios"
import { getPokemonImage } from "./globalFunctions"
import { NameInterface, PokemonTypes } from "@/interfaces/interfaces"

const baseApiURL = "https://pokeapi.co/api/v2"
const limit = process.env.NODE_ENV === "production" ? 807 : 20

export const getAllPokemons = async () => {
  const { data: pokemonlist } = await axios.get(`${baseApiURL}/pokemon/?limit=${limit}&offset=0`)
  const list = Promise.all(
    pokemonlist.results.map(async (pokemon: NameInterface) => {
      const { data } = await axios.get(pokemon.url)
      return {
        id: data.id,
        name: data.species.name,
        types: data.types.map((type: PokemonTypes) => type.type.name),
        sprite: getPokemonImage(data.id),
      }
    })
  )
  return list
}

export const getPokemonDescription = async (id: number) => {
  try {
    const response = await axios.get(`${baseApiURL}/characteristic/${id}/`);
    const description = response.data.descriptions.filter((desc: any) => {
      return desc.language.name === "es";
    })
    return description[0].description;
  } catch (error) {
    return ""
  }
}

export const getPokemonData = async (name: string) => {
  const { data } = await axios.get(`${baseApiURL}/pokemon/${name}`)
  const pokemonDescription = await getPokemonDescription(data.id)
  return {
    abilities: data.abilities,
    base_experience: data.base_experience,
    height: data.height,
    id: data.id,
    name: data.species.name,
    species: data.species,
    types: data.types.map((type: PokemonTypes) => type.type.name),
    weight: data.weight,
    stats: data.stats,
    sprite: getPokemonImage(data.id),
    description: pokemonDescription
  }
}
