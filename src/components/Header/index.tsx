import { ChangeEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; 
import { PokemonsProps } from "@/types/pokemonProp";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";

export default function Header({ setChange, changeValue, dataPokemons }:PokemonsProps){
    const [handleScearch, setHandleScearch] = useState(false);
    const path = usePathname();
    const router = useRouter();

    function selectedFilter(e:ChangeEvent<HTMLSelectElement>){
        const PokemonsSelectedsByFilters = dataPokemons.filter( (data) => {
            return data.types.map(type => type.type.name === e.target.value.toLowerCase() ? data.name : null)
        } )

        console.log(PokemonsSelectedsByFilters, '????')
    }


    return(
        <div className="realative">
            { path === '/' ? null : <div onClick={() => router.push('/')} className="cursor-pointer"><IoMdArrowBack size={30} className="absolute mt-6 left-4 text-white" >VOLTAR</IoMdArrowBack></div> }
            <div  className="flex gap-4 items-center bg-black justify-center">
                
                <img src="./Pokemon-Logo.png" alt="Logo Pokemon" width={150}  />
                <div onClick={() => setHandleScearch(true)}>
                    { !handleScearch ? <HiMagnifyingGlass size={25} color="white"/> : <input onBlur={() => setHandleScearch(false)} onChange={(e) => setChange(e.target.value)} value={changeValue} className="w-[400px] p-2 rounded-md transition-all" type="text" placeholder="pesquisar" />}
                </div>
                <div className="flex gap-7">
                    <div>
                        <label htmlFor="" className="text-white">Type: </label>
                        <select onChange={(e:ChangeEvent<HTMLSelectElement>) => selectedFilter(e)} name="select" className="w-[100px]">
                            <option value="all">All</option>
                            <option value="Grass">grass</option>
                            <option value="Fire">Fire</option>
                            <option value="Whater">Whater</option>
                            <option value="Bug">Bug</option>
                            <option value="Normal">Normal</option>
                            <option value="Ground">Ground</option>
                            <option value="Fairy">Fairy</option>
                        </select >
                    </div>
                    <div>
                        <label htmlFor="" className="text-white">Sort: </label>
                        <select  name="select">
                            <option value="">A-Z</option>
                            <option value="">A</option>
                            <option value="">B</option>
                        </select >
                    </div>
                </div>
            </div>
        </div>
    )
}