import { Input } from "postcss";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header(){
    const [handleScearch, setHandleScearch] = useState(false)

    return(
        <div  className="flex gap-4 items-center bg-black justify-center">
            <img src="./Pokemon-Logo.png" alt="Logo Pokemon" width={150}  />
            <div onClick={() => setHandleScearch(true)}>
                { !handleScearch ? <HiMagnifyingGlass size={25} color="white"/> : <input onBlur={() => setHandleScearch(false)} className="w-[400px] p-2 rounded-md transition-all" type="text" placeholder="pesquisar" />}
            </div>
        </div>
    )
}