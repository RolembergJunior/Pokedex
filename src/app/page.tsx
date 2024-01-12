'use client'

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonsCard";
import { getPokemons } from "@/api/pokemons";
import { PokemonsProps } from "@/types/pokemonProp";

export default function Home() {
  const [handleChangeInput, setHandleChangeInput] = useState('');
  const { data, isFetching} = useQuery<PokemonsProps[]>({
    queryKey:['pokemons'],
    queryFn: () => getPokemons(),
    // suspense: true,
    staleTime: 5 * 6000
  })

  const filterPokemons = data?.filter((pokemons) => pokemons.name.toLowerCase().includes(handleChangeInput.toLowerCase()))

  return (
    <>
      <Header setChange={setHandleChangeInput} changeValue={handleChangeInput} dataPokemons={data}/>
      <div className="flex flex-wrap justify-center gap-4 text-center mt-8">
          {isFetching && <p>Carregando...</p>}
          { 
          filterPokemons?.map( poke => {

            const getType = poke.types[0].type

            return(
              <PokemonCard key={poke.id} id={poke.id} order={poke.order} name={poke.name} image={poke.sprites.front_default} type={getType.name} height={poke.height} weight={poke.weight}/>
            )})}
      </div>
    </>
  )
}
