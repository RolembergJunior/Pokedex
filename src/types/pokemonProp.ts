import { Dispatch, SetStateAction } from "react";

export interface PokemonsProps{
    name: string,
    id: string,
    order: number,
    sprites: {front_default:string},
    type: string,
    height: number,
    weight: number,
    image: string,
    setChange: Dispatch<SetStateAction<string>>,
    changeValue: string
  }