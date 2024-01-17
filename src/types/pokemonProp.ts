import { Dispatch, SetStateAction } from "react";

export interface PokemonsProps{
    name: string,
    id: string,
    order: number,
    sprites: {front_default:string, back_default:string},
    types: [{type:{name:string}}, {type:{name:string}}],
    height: number,
    weight: number,
    image: string,
  }
