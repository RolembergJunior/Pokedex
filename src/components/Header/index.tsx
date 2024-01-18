import { ChangeEvent, PropsWithChildren, ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; 
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";

interface PropsHeader{
    children: ReactNode,
    title: string
}

export default function Header({ children, title }:PropsHeader){

    return(
        <header className="realative flex  bg-black items-center w-full">
                <div  className="flex gap-4 items-center m-auto">
                <img src="./Pokemon-Logo.png" alt="Logo Pokemon" width={150}  />
                    {children}
                </div>
        </header>
    )
}