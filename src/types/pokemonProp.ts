import { Dispatch, SetStateAction } from "react";

export interface PokemonsProps{
    name: string,
    id: string,
    order: number,
    abilities:[{ability:{name:string}}]
    base_experience: number,
    sprites: {front_default:string, back_default:string},
    types:[ {type:{name:string}}, {type:{name:string}} ]
    type: string,
    height: number,
    weight: number,
    image: string,
    setChange: (e:string) => void,
    changeValue: string
  }