'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import axios from "axios";
import { PokemonsProps } from "@/types/pokemonProp";
import { motion } from "framer-motion";

interface AboutPokemon extends PokemonsProps{
    abilities:[{ability:{name:string}}],
    base_experience: number,
}

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

export default function Pokemons(){
    const [dataPokemon, setDataPokemon] = useState<AboutPokemon>()
    const params = useParams<{ slug: string }>();

    useEffect(() =>{
        async function getPropsPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.slug}/`);

            setDataPokemon(response.data)
        }
        getPropsPokemon()
    },[])

    const cardStyle = {
        border: '3px solid',
        borderRadius: '8px',
        borderColor: 'black'
    }

    const backgroundColor = {
        background: 'green'
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

    const firstType = dataPokemon?.types[0].type.name as string

    const typeName = pokemonsTypes[firstType] as string

    if( firstType in pokemonsTypes ){
        backgroundColor.background = typeName
        cardStyle.borderColor = typeName
    }

    return (
        <div>
            <Header/>
            <motion.div  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5,ease: [0, 0.71, 0.2, 1.01]}} style={cardStyle} className="flex flex-col items-center border-2 rounded-xl w-[70%] h-[100%] m-auto mt-20 p-16">
                <div className="flex">
                    <img src={dataPokemon?.sprites.front_default} width={300} height={50} alt="Imagem do Pokemon" />
                    <img src={dataPokemon?.sprites.back_default} width={300} height={50} alt="Imagem do Pokemon" />
                </div>
                <h1 className="text-white text-5xl">{dataPokemon?.name}</h1>
                <div className="flex gap-4 mt-3">
                    <p className="text-white text-xl">Weight: <strong>{dataPokemon?.weight}kg</strong></p>
                    <p className="text-white text-xl">Height: <strong>{dataPokemon?.height}m</strong></p>
                    <div className="flex text-white text-xl">Type: <p><strong>{dataPokemon?.types[0].type.name} </strong></p> { dataPokemon?.types[1] ? <p> / <strong>{dataPokemon?.types[1]?.type.name}</strong></p> : null}</div>
                    <p className="text-white text-xl">Experience base: <strong>{dataPokemon?.base_experience}</strong></p>
                    <p className="text-white text-xl">Habilidades:</p>{dataPokemon?.abilities.map( (abilidades) =>{
                        return (<strong key={abilidades.ability.name} className="text-white text-xl" >{abilidades.ability.name}</strong>)
                    })}
                    
                </div>
                <p className="text-white mt-3 leading-7 text-justify">Lorem ipsum dolor sit amet. Ut quod Quis sed quas ipsa est autem voluptas hic iste quia qui ullam excepturi ab consequatur nihil. Qui laudantium ipsa est beatae aperiam ad consequatur accusantium sit corrupti beatae.
                    Et sint laudantium et consequatur voluptatem aut vero natus sed dolores perspiciatis et omnis doloribus vel recusandae pariatur et deserunt architecto. Rem commodi perferendis 33 quis internos non libero voluptas id reprehenderit doloribus At modi illo.
                    A corrupti voluptas eum nulla libero qui repudiandae mollitia. Ad sint earum aut voluptas voluptatem aut minus dolor non iusto asperiores.
                </p>
            </motion.div>
        </div>
    )
}