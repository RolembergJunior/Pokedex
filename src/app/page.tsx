'use client'

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonsCard";
import { getPokemons } from "@/api/pokemons";
import { PokemonsProps } from "@/types/pokemonProp";

export default function Home() {
  const [handleChangeInput, setHandleChangeInput] = useState('');
  const [selectChangeInput, setSelectChangeInput] = useState<string>('All')
  const { data, isFetching} = useQuery<PokemonsProps[]>({
    queryKey:['pokemons'],
    queryFn: () => getPokemons(),
    staleTime: 5 * 6000
  })

    const filterPokemons = data?.filter((pokemons) => pokemons.name.toLowerCase().includes(handleChangeInput.toLowerCase()))

    const teste2 =  filterPokemons?.map( (data) => {
      if( selectChangeInput !== 'All'){
        if(data.types.map( types => types.type.name).includes(selectChangeInput.toLowerCase())){
          return data
        }
      } else {
        return data
      } 
    })

    const arrayFiltrado:PokemonsProps[] = teste2?.filter( elemento => elemento !== undefined)
    

  return (
    <>
      <Header setChange={setHandleChangeInput} changeValue={handleChangeInput} setSelectChangeInput={setSelectChangeInput}/>
      <div className="relative flex flex-wrap justify-center gap-4 text-center mt-8">
          {isFetching && 
          <div className="absolute bg-slate-300 top-64 h-[80px] w-[100%]">
            <h1 className="text-xl mt-5">Carregando...</h1>
          </div>}
          { 
          arrayFiltrado?.map( poke => {
            return(
              <PokemonCard key={poke.id} {...poke} image={poke.sprites.front_default}/>
            )})}
      </div>
    </>
  )
}
