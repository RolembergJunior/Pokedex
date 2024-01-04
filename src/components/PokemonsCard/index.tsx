import { PokemonsProps } from "@/types/pokemonProp";


export default function PokemonCard({ name, id, order, image, weight, height, types }:PokemonsProps){
    return(
        <div className="flex flex-col justify-around cursor-pointer border p-6 mr-4 ml-4 w-[300px] h-[400px] rounded-lg hover:p-6 hover:transition-all" key={id}>
            <h1>#00{order}</h1>
            <img src={image} alt="Imagem do Pokemon" />
            <h1 className="text-xl font-bold">{name}</h1>
            <div className="flex justify-around m-3">
                <p>weight:<strong>{weight}kg</strong></p>
                <p>height: <strong>{height}m</strong></p>
            </div>
            <p>type:{types}</p>
        </div>
    )
}