import { PokemonsProps } from "@/types/pokemonProp";
import { useRouter } from "next/navigation";


interface PokemonTypes{
    [key: string]: string;
    grass: string,
    fire: string,
    water: string,
    normal: string,
    poison: string,
    ground: string,
    electric: string,
    fairy: string,
    bug: string,
}

export default function PokemonCard({ name, id, order, image, weight, height, types}:PokemonsProps){
    const router = useRouter();

    const cardStyle = {
        border: '3px solid',
        borderRadius: '8px',
        borderColor: 'black',
        padding: '16px'
    }

    const backgroundColor = {
        background: 'green'
    }

    const backgroundColor2 = {
        background: 'light'
    }

    const pokemonsTypes: PokemonTypes = {
        grass: 'green',
        fire: 'red',
        water: 'blue',
        normal: 'orange',
        poison: 'purple',
        ground: 'brown',
        electric: 'yellow',
        fairy: 'pink',
        bug: 'gray',
      };

    const firstType = types[0]?.type.name 
    const secondType = types[1]?.type.name 

    const typeName = pokemonsTypes[firstType] as string

    const typeName2 = pokemonsTypes[firstType] as string

    if( firstType in pokemonsTypes ){
        backgroundColor.background = typeName
        cardStyle.borderColor = typeName
    }

    if( secondType in pokemonsTypes ){
        backgroundColor2.background = typeName2
    }

    function handleAboutPokemons(id: string){
        router.push(`/${id}`)
    }

    return(
        <div onClick={() =>  handleAboutPokemons(id)} style={cardStyle} className="relative bg-gradient-to-t from-black to-gray-800 flex flex-col justify-around cursor-pointer border p-6 mr-4 ml-4 mb-5 w-[300px] h-[500px] rounded-lg hover:p-6 hover:transition-all" key={id}>
            <div className="flex justify-between items-center">
                <h1 className="text-white">#00{order}</h1>
                <div style={backgroundColor} className="absolute right-3 rounded-full"></div>
            </div>
            <img className="z-10" src={image} alt="Imagem do Pokemon" />
            <h1 className="text-white text-xl font-bold">{name}</h1>
            <div className="text-white flex justify-around m-3">
                <p className="text-white">weight:<strong>{weight}kg</strong></p>
                <p className="text-white">height: <strong>{height}m</strong></p>
            </div>
            <div className="flex justify-around">
                <div style={backgroundColor} className="flex justify-center bg-red-600 w-20 rounded-sm text-white">
                    <p>{types[0].type.name}</p>
                </div> 
                { types[1]?.type.name ? <div style={backgroundColor2} className="flex justify-center bg-red-600 w-20 rounded-sm text-white">
                    <p>{types[1]?.type.name}</p>
                </div> : null}
            </div> 
            <div className=" absolute bg-gradient-to-b from-white to-black opacity-10 z-0 top-10 left-6 rounded-[100%] w-[80%] h-[50%]"></div>
        </div>
    )
}
