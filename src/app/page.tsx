"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonsCard";
import { getPokemons } from "@/api/pokemons";
import { PokemonsProps } from "@/types/pokemonProp";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Toggle from "@/components/Toggle";
import { useIsDark } from "@/hooks/useTheme";
import { useAtom } from "jotai";

export default function Home() {
  const [handleChangeInput, setHandleChangeInput] = useState("");
  const [selectChangeInput, setSelectChangeInput] = useState<string>("All");
  const [isActiveScearch, setIsActiveScearch] = useState(false);
  const [ isDark, setIsDark ] = useAtom(useIsDark);
  const { data, isFetching } = useQuery<PokemonsProps[]>({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(),
    staleTime: 5 * 6000,
  });

  function handleScearchPokemon(e: ChangeEvent<HTMLInputElement>) {
    if (setHandleChangeInput) {
      setHandleChangeInput(e.target.value);
    }
  }

  function handleSelectPokemon(e: ChangeEvent<HTMLSelectElement>) {
    if (setSelectChangeInput) {
      setSelectChangeInput(e.target.value);
    }
  }

  function handleDarkMode(){
    const newDarkValue = !isDark
    setIsDark(newDarkValue);
    sessionStorage.setItem("isDark", newDarkValue.toString())
  }

  useEffect(() =>{
    if(sessionStorage.getItem("isDark")){
      const isDarkMode = sessionStorage.getItem("isDark");
      setIsDark(isDarkMode === 'true')
    }
  },[setIsDark]);

  const scearchFilter = data?.filter((pokemons) =>
    pokemons.name.toLowerCase().includes(handleChangeInput.toLowerCase())
  );

  const arrayOfScearchFilter = scearchFilter?.map((data) => {
    if (selectChangeInput !== "All") {
      if (
        data.types
          .map((types) => types.type.name)
          .includes(selectChangeInput.toLowerCase())
      ) {
        return data;
      }
    } else {
      return data;
    }
  });

  const filteredPokemons = arrayOfScearchFilter?.filter(
    (elemento) => elemento !== undefined
  ) as PokemonsProps[];

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="dark:bg-slate-200 h-screen">
        <Header title="Pokemons">
          <div className="flex items-center gap-5">
            <div onClick={() => setIsActiveScearch(true)}>
              {!isActiveScearch ? (
                <HiMagnifyingGlass size={25} color="white" />
              ) : (
                <input
                  onBlur={() => setIsActiveScearch(false)}
                  onChange={(e) => handleScearchPokemon(e)}
                  value={handleChangeInput}
                  className="w-[400px] p-2 rounded-md transition-all"
                  type="text"
                  placeholder="pesquisar"
                />
              )}
            </div>
            <div className="flex gap-7">
              <div>
                <select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleSelectPokemon(e)
                  }
                  name="select"
                  className="w-[100px] rounded-md h-[30px]"
                >
                  <option value="All">All</option>
                  <option value="Grass">Grass</option>
                  <option value="Fire">Fire</option>
                  <option value="Water">Water</option>
                  <option value="Bug">Bug</option>
                  <option value="Normal">Normal</option>
                  <option value="Ground">Ground</option>
                  <option value="Poison">Poison</option>
                  <option value="Fairy">Fairy</option>
                </select>
              </div>
            </div>
          </div>
          <Toggle isDark={isDark} handleDark={handleDarkMode}/>
        </Header>
        <div className="relative flex flex-wrap justify-center gap-4 text-center mt-8">
          {isFetching && (
            <div className="absolute bg-slate-300 top-64 h-[80px] w-[100%]">
              <h1 className="text-xl mt-5">Carregando...</h1>
            </div>
          )}
          {filteredPokemons?.map((poke) => {
            return (
              <PokemonCard
                key={poke.id}
                {...poke}
                image={poke.sprites.front_default}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
