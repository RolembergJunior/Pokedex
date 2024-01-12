'use client'

import Header from "@/components/Header";
import { PokemonsProps } from "@/types/pokemonProp";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";


export default function Pokemons(){
    const [aboutPokemon, setAboutPokemon] = useState<PokemonsProps>()
    const params = useParams<{ slug: string }>();

    useEffect(() =>{
        async function getPropsPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.slug}/`);

        
            setAboutPokemon(response.data)

            return console.log(response.data, '??????')
        }
        getPropsPokemon()
        console.log(params)
    },[])

    const cardStyle = {
        border: '3px solid',
        borderRadius: '8px',
        borderColor: 'black'
    }

    const backgroundColor = {
        background: 'green'
    }

    if(aboutPokemon?.types[0].type.name === 'grass'){
        cardStyle.borderColor = 'green'
        backgroundColor.background = 'green'
    } else if(aboutPokemon?.types[0].type.name === 'fire'){
        cardStyle.borderColor = 'red'
        backgroundColor.background = 'red'
    } else if(aboutPokemon?.types[0].type.name === 'water'){
        cardStyle.borderColor = 'blue'
        backgroundColor.background = 'blue'
    } else if(aboutPokemon?.types[0].type.name === 'normal'){
        cardStyle.borderColor = 'orange'
        backgroundColor.background = 'orange'
    } else if(aboutPokemon?.types[0].type.name === 'poison'){
        cardStyle.borderColor = 'purple'
        backgroundColor.background = 'purple'
    } else if(aboutPokemon?.types[0].type.name === 'ground'){
        cardStyle.borderColor = 'brown'
        backgroundColor.background = 'brown'
    } else if(aboutPokemon?.types[0].type.name === 'electric'){
        cardStyle.borderColor = 'yellow'
        backgroundColor.background = 'yellow'
    } else if(aboutPokemon?.types[0].type.name === 'fairy'){
        cardStyle.borderColor = 'pink'
        backgroundColor.background = 'pink'
    } else if(aboutPokemon?.types[0].type.name === 'bug'){
        cardStyle.borderColor = 'gray'
        backgroundColor.background = 'gray'
    }

    return (
        <div>
            <Header/>
            <div style={cardStyle} className="flex flex-col items-center border-2 rounded-xl w-[60%] h-[100%] m-auto mt-20 p-16">
                <div className="flex">
                    <img src={aboutPokemon?.sprites.front_default} width={300} height={50} alt="Imagem do Pokemon" />
                    <img src={aboutPokemon?.sprites.back_default} width={300} height={50} alt="Imagem do Pokemon" />
                </div>
                <h1 className="text-white text-5xl">{aboutPokemon?.name}</h1>
                <div className="flex gap-3 mt-3">
                    <p className="text-white text-xl">Weight: <strong>{aboutPokemon?.weight}kg</strong></p>
                    <p className="text-white text-xl">Height: <strong>{aboutPokemon?.height}m</strong></p>
                    <p className="text-white text-xl">Type: <strong>{aboutPokemon?.types[0].type.name}/{aboutPokemon?.types[1]?.type.name}</strong></p>
                    <p className="text-white text-xl">Experience base: <strong>{aboutPokemon?.base_experience}</strong></p>
                    <p className="text-white text-xl">Habilidades:</p>{aboutPokemon?.abilities.map( (abilidades) =>{
                        return (<strong key={abilidades.ability.name} className="text-white text-xl" >{abilidades.ability.name}</strong>)
                    })}
                    
                </div>
                <p className="text-white mt-3 leading-7 text-justify">Lorem ipsum dolor sit amet. Ut quod Quis sed quas ipsa est autem voluptas hic iste quia qui ullam excepturi ab consequatur nihil. Qui laudantium ipsa est beatae aperiam ad consequatur accusantium sit corrupti beatae.
                    Et sint laudantium et consequatur voluptatem aut vero natus sed dolores perspiciatis et omnis doloribus vel recusandae pariatur et deserunt architecto. Rem commodi perferendis 33 quis internos non libero voluptas id reprehenderit doloribus At modi illo.
                    A corrupti voluptas eum nulla libero qui repudiandae mollitia. Ad sint earum aut voluptas voluptatem aut minus dolor non iusto asperiores.
                </p>
            </div>
        </div>
    )
}