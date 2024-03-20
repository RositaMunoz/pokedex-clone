"use client"
import { useState } from "react"
import { PokemonCard } from "./pokemonCard"

interface PokemonGridProps {
  pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("")
  console.log('💮🚴‍♀️🛸 ~ PokemonGrid ~ pokemonList:', pokemonList)

  return (
    <>
      <div className="text-black">
        <div className="">grilla de cartas</div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <div>Nombre o número</div>
          <div>input pa buscar</div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {pokemonList.map((pokemon: any) => {
          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
            />
          )
        })}
      </div>
    </>
  )
}