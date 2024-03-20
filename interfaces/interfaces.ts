export interface NameInterface {
  name: string
  url: string
}

export interface PokemonTypes {
  slot: number
  type: NameInterface
}

interface PokemonStats {
  base_stat: number
  effort: number
  stat: NameInterface
}

interface PokemonAbilities {
  ability: NameInterface
  is_hidden: boolean
}

export interface PokemonDataInterface {
  abilities: PokemonAbilities[]
  base_experience: number
  height: number
  id: number
  name: string
  species: NameInterface
  types: string[]
  weight: number
  stats: PokemonStats[]
  sprite: string
}
