import { ReactNode } from "react";

interface PropsHeader{
    children: ReactNode
}

export default function Header({ children }:PropsHeader){

    return(
        <header className="realative flex  bg-black items-center w-full">
                <div  className="flex gap-4 items-center m-auto">
                <img src="./Pokemon-Logo.png" alt="Logo Pokemon" width={150}  />
                    {children}
                </div>
        </header>
    )
}