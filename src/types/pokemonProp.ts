export interface PokemonsProps{
    name: string,
    id: string,
    order: number,
    sprites: {front_default:string},
    types: {type:{name:string}},
    height: number,
    weight: number,
    image: string
  }