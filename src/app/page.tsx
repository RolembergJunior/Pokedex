'use client'

import { getPokemons } from "@/api/pokemons"
import Header from "@/components/Header"
import PokemonCard from "@/components/PokemonsCard"
import { PokemonsProps } from "@/types/pokemonProp"
import { useQuery } from "@tanstack/react-query"


export default function Home() {


  const { data, isFetching} = useQuery<PokemonsProps[]>({
    queryKey:['pokemons'],
    queryFn: () => getPokemons(),
    // suspense: true,
    staleTime: 5 * 6000
  })

  return (
    <>
      <Header/>
      <div className="flex flex-wrap gap-4 text-center mt-8">
          {isFetching && <p>Carregando...</p>}
          { 
          data?.map( repo => {
            return(
              <PokemonCard id={repo.id} order={repo.order} name={repo.name} image={repo.sprites.front_default} type={repo.types.type} height={repo.height} weight={repo.weight}/>
            )})}
      </div>
    </>
  )
}
