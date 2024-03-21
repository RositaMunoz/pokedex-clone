"use client"
import { translateTypes } from "@/helpers/globalFunctions"

export function PokemonTypes({ types, styles }: any) {
  const getColorsType = (type: string) => {
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
  return (
    <div className="flex">
      {types.map((type: string) => (
        <div
          className={`${getColorsType(type)} ${styles} rounded w-1/3 text-center mr-1`}
          key={type}
        >
          {translateTypes(type)}
        </div>
      ))}
    </div>
  )
}