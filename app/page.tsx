import { PokemonGrid } from "@/components/pokemonGrid";
import { getAllPokemons } from "@/helpers/pokemonData";

export default async function Home() {
  const pokemonList = await getAllPokemons();

  return (
      <PokemonGrid pokemonList={pokemonList}/>
  );
}
