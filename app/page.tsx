import { PokemonGrid } from "@/components/pokemonGrid";
import { getAllPokemons } from "@/helpers/pokemonData";

export default async function Home() {
  const pokemonList = await getAllPokemons();

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="text-light-gray text-3xl py-5 pl-4 md:w-70 w-full bg-white">Pokédex</div>
      <PokemonGrid pokemonList={pokemonList}/>
    </div>
  );
}
