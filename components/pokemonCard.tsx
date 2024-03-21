import Link from "next/link"
import { getStringIDfromID, translateTypes, uppercasedFirstLetter } from "@/helpers/globalFunctions"
import { PokemonImage } from "./pokemonImage"
import { PokemonTypes } from "./pokemonTypes"

export function PokemonCard({ pokemon }: any) {
  const { id, types, sprite, name } = pokemon  

  return (
    <div className="m-2 hover:-translate-y-1 text-left pb-5">
      <Link href={name}>
        <PokemonImage image={sprite} />
      </Link>
      <div className="pl-4">
        <div className="text-light-gray font-bold text-xs">N.° {getStringIDfromID(id)}</div>
        <div className="text-2xl font-semibold text-dark-gray mt-2 mb-1">{uppercasedFirstLetter(name)}</div>
        <PokemonTypes types={types} styles="text-xs"/>
      </div>
    </div>
  )
}
