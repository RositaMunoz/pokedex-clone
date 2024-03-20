import axios from "axios"
import { getPokemonImage } from "./globalFunctions"
import { NameInterface, PokemonTypes } from "@/interfaces/interfaces"

const baseApiURL = "https://pokeapi.co/api/v2"
const limit = process.env.NODE_ENV === "production" ? 807 : 8

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

export const getPokemonData = async (id: number) => {
  const { data } = await axios.get(`${baseApiURL}/pokemon/${id}`)
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
  }
}