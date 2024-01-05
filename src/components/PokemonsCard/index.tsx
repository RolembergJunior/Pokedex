import { PokemonsProps } from "@/types/pokemonProp";


export default function PokemonCard({ name, id, order, image, weight, height, type}:PokemonsProps){

    const cardStyle = {
        border: '3px solid',
        borderRadius: '8px',
        borderColor: 'black',
        padding: '16px'
    }

    const backgroundColor = {
        background: 'green'
    }

    if(type === 'grass'){
        cardStyle.borderColor = 'green'
        backgroundColor.background = 'green'
    } else if(type === 'fire'){
        cardStyle.borderColor = 'red'
        backgroundColor.background = 'red'
    } else if(type === 'water'){
        cardStyle.borderColor = 'blue'
        backgroundColor.background = 'blue'
    } else if(type === 'normal'){
        cardStyle.borderColor = 'orange'
        backgroundColor.background = 'orange'
    } else if(type === 'poison'){
        cardStyle.borderColor = 'purple'
        backgroundColor.background = 'purple'
    } else if(type === 'ground'){
        cardStyle.borderColor = 'brown'
        backgroundColor.background = 'brown'
    } else if(type === 'electric'){
        cardStyle.borderColor = 'yellow'
        backgroundColor.background = 'yellow'
    } else if(type === 'fairy'){
        cardStyle.borderColor = 'pink'
        backgroundColor.background = 'pink'
    } else if(type === 'bug'){
        cardStyle.borderColor = 'gray'
        backgroundColor.background = 'gray'
    }

    return(
        <div onClick={() => console.log('Clickou')} style={cardStyle} className="relative bg-gradient-to-t from-black to-gray-800 flex flex-col justify-around cursor-pointer border p-6 mr-4 ml-4 mb-5 w-[300px] h-[500px] rounded-lg hover:p-6 hover:transition-all" key={id}>
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
            <p className="text-white">type: <strong>{type}</strong></p>
            <div className=" absolute bg-gradient-to-b from-white to-black opacity-10 z-0 top-10 left-6 rounded-[100%] w-[80%] h-[50%]"></div>
        </div>
    )
}