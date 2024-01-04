import axios from "axios"


export async function getPokemons(){
    

    const normalizeResult = []

    for(let i = 1; i <= 50; i++){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            normalizeResult.push(response.data)
    }
    return normalizeResult
}

    