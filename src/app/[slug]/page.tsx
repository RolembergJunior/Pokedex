'use client'

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
        }
        getPropsPokemon()
    },[])

    return (
        <div>
            <div className="flex flex-col justify-center">
                <img src={aboutPokemon?.sprites.front_default} width={300} height={50} alt="Imagem do Pokemon" />
                <h1 className="text-white text-5xl">{aboutPokemon?.name}</h1>
                <div>
                    <p className="text-white text-xl">Weight: <strong>{aboutPokemon?.weight}kg</strong></p>
                    <p className="text-white text-xl">Height: <strong>{aboutPokemon?.height}m</strong></p>
                    <p className="text-white text-xl">Type: <strong>{aboutPokemon?.types[0].type.name}</strong></p>
                </div>
                <p className="text-white">Lorem ipsum dolor sit amet. Ut quod Quis sed quas ipsa est autem voluptas hic iste quia qui ullam excepturi ab consequatur nihil. Qui laudantium ipsa est beatae aperiam ad consequatur accusantium sit corrupti beatae.
                    Et sint laudantium et consequatur voluptatem aut vero natus sed dolores perspiciatis et omnis doloribus vel recusandae pariatur et deserunt architecto. Rem commodi perferendis 33 quis internos non libero voluptas id reprehenderit doloribus At modi illo.
                    A corrupti voluptas eum nulla libero qui repudiandae mollitia. Ad sint earum aut voluptas voluptatem aut minus dolor non iusto asperiores.
                </p>
            </div>
        </div>
    )
}