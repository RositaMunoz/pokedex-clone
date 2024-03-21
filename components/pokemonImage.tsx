"use client"
import Image from "next/image"

export function PokemonImage({ image } : { image: string }) {
  return (
    <Image
      src={image}
      alt='pokemon sprite'
      width={100}
      height={100}
      className="bg-gray-200 rounded-lg p-4 w-full"
    />
  )
}