import { getPokemonData } from "@/helpers/pokemonData"
import { getStringIDfromID, uppercasedFirstLetter, translateTypes } from "@/helpers/globalFunctions"
import { PokemonImage } from "@/components/pokemonImage"
import Link from "next/link"
import { PokemonTypes } from "@/components/pokemonTypes"

export default async function PokemonPage({ params }: { params: { pokemonName: string }}) {
  const { pokemonName } = params
  const pokemonData = await getPokemonData(pokemonName)
  const pokemonId = getStringIDfromID(pokemonData.id)

  return (
    <div className="min-h-screen w-70 bg-white py-10">
      <div className="flex justify-center mb-16">
        <div className="text-darker-gray font-medium text-4xl mr-3">{uppercasedFirstLetter(pokemonName)}</div>
        <div className="text-light-gray font-medium text-4xl">N.° {pokemonId}</div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-5">
        <div className="flex flex-col w-1/2">
          <PokemonImage image={pokemonData.sprite}/>
          <div></div>
        </div>
        <div className="flex flex-col w-1/2 pl-6">
          <div className="text-darker-gray text-lg font-medium pb-6">{pokemonData.description}.</div>
          <div className="bg-button-blue flex rounded p-5 mb-6">
            <div className="w-1/2">
              <div className="font-medium text-sm pb-2">Altura</div>
              <div className="text-darker-gray font-medium text-lg">{pokemonData.height} m</div>
            </div>
            <div className="w-1/2">
              <div className="font-medium text-sm pb-2">Peso</div>
              <div className="text-darker-gray text-lg">{pokemonData.weight} g</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-darker-gray text-lg pb-2">Tipo</div>
            <PokemonTypes types={pokemonData.types} styles="text-sm py-1"/>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full flex justify-end">
        <Link
          href="/"
          className="bg-button-orange p-3 rounded mr-5"
        >
          Volver a la Pokédex
        </Link>
      </div>
    </div>
  )
}