"use client"
import { useState } from "react"
import { PokemonCard } from "./pokemonCard"

interface PokemonGridProps {
  pokemonList: any
}

const initialPokemons = 12
const incrementalPokemons = 12

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("")
  const [displayPokemons, setDisplayPokemons] = useState(initialPokemons)
  const [filteredPokemons, setFilteredPokemons] = useState(pokemonList)

  const searchFilter = (pokemonList: any) => {
    const filtered = pokemonList.filter((pokemon: any) => (
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()) || pokemon.id.toString().includes(searchText.toLowerCase())
    ))
    setFilteredPokemons(filtered)
  }


  const loadMorePokemons = () => {
    setDisplayPokemons(displayPokemons + incrementalPokemons)
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex justify-center bg-dark-gray">
        <div className="md:w-70 w-full flex flex-col md:flex-row justify-between pl-4 py-10">
          <div className="grid grap-1.5 md:w-1/2 w-5/6 pb-6 md:pb-0">
            <div className="text-3xl pb-3">Nombre o número</div>
            <input
              type="text"
              className="w-5/6 border-solid border-2 border-light-gray rounded-lg p-2 text-black"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={() => searchFilter(pokemonList)}
            />
          </div>
          <div className="bg-alert-green rounded w-5/6 md:w-1/2 text-xl p-3 mr-2">
            Busca un pokemon por su nombre o usando su número de la Pokédex Nacional.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-70 w-full bg-white pb-10">
        <div className="mb-20 w-full grid text-center pb-10 md:px-0 px-6 pt-6 lg:mb-0 lg:grid-cols-4 lg:text-left">
          {filteredPokemons.slice(0, displayPokemons).map((pokemon: any) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
              />
            )
          })}
        </div>
        {displayPokemons < filteredPokemons.length && (
          <button
            onClick={loadMorePokemons}
            className="bg-button-blue rounded-lg text-white text-2xl p-3 mb-10"
          >
            Cargar más Pokemons
          </button>

        )}
      </div>
    </div>
  )
}