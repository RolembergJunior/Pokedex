import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; 
import { PokemonsProps } from "@/types/pokemonProp";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";

interface Props{
    setSelectChangeInput?: (e:string) => void,
    setChange?: (e:string) => void,
    changeValue?: string
}

export default function Header({ setChange, changeValue, setSelectChangeInput }:Props){
    const [handleScearch, setHandleScearch] = useState(false);
    const path = usePathname();
    const router = useRouter();

    function handleScearchPokemon(e:ChangeEvent<HTMLInputElement>){
        if(setChange){
            setChange(e.target.value)
        }
    }

    function handleSelectPokemon(e:ChangeEvent<HTMLSelectElement>){
        if(setSelectChangeInput){
            setSelectChangeInput(e.target.value)
        }
    }


    return(
        <div className="realative">
            { path === '/' ? null : <div onClick={() => router.push('/')} className="cursor-pointer"><IoMdArrowBack size={30} className="absolute mt-6 left-4 text-white" >VOLTAR</IoMdArrowBack></div> }
            <div  className="flex gap-4 items-center bg-black justify-center">
                
                <img src="./Pokemon-Logo.png" alt="Logo Pokemon" width={150}  />
                { path === '/' ?  
                    <div onClick={() => setHandleScearch(true)}>
                        { !handleScearch ? <HiMagnifyingGlass size={25} color="white"/> : <input onBlur={() => setHandleScearch(false)} onChange={(e) => handleScearchPokemon(e)} value={changeValue} className="w-[400px] p-2 rounded-md transition-all" type="text" placeholder="pesquisar" />}
                    </div>
                : null}
                { path === '/' ?
                    <div className="flex gap-7">
                        <div>
                            <label htmlFor="" className="text-white">Type: </label>
                            <select onChange={(e:ChangeEvent<HTMLSelectElement>) => handleSelectPokemon(e)} name="select" className="w-[100px] rounded-md">
                                <option value="All">All</option>
                                <option value="Grass">Grass</option>
                                <option value="Fire">Fire</option>
                                <option value="Water">Water</option>
                                <option value="Bug">Bug</option>
                                <option value="Normal">Normal</option>
                                <option value="Ground">Ground</option>
                                <option value="Poison">Poison</option>
                                <option value="Fairy">Fairy</option>
                            </select >
                        </div>
                    </div> 
                : null}
            </div>
        </div>
    )
}