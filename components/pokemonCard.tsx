import Link from "next/link"
import { getStringIDfromID, translateTypes, uppercasedFirstLetter, getColorsType } from "@/helpers/globalFunctions"
import { PokemonImage } from "./pokemonImage"

export function PokemonCard({ pokemon }: any) {
  const { id, types, sprite, name } = pokemon  

  return (
    <div className="text-black m-2 hover:-translate-y-1 text-left pb-5">
      <Link href={name}>
        <PokemonImage image={sprite} />
      </Link>
      <div className="pl-4">
        <div className="text-light-gray font-bold text-xs">N.° {getStringIDfromID(id)}</div>
        <div className="text-2xl font-semibold text-dark-gray mt-2 mb-1">{uppercasedFirstLetter(name)}</div>
        <div className="flex">
        {types.map((type: string) => (
          <div
            className={`${getColorsType(type)} rounded text-xs w-1/3 text-center mr-1`}
            key={type}
          >
            {translateTypes(type)}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
