import {useState, useEffect} from 'react'

const UseEffectFetch = () => {
    const [pokemons, setPokemon] = useState({pokemon: []})
    const fetchPokemon = async () =>{
        const response = await fetch('https://pokeapi.co/api/v2/type/3')
        const pokemonList = await response.json()
        setPokemon(pokemonList)
    }

    useEffect(() => {
        fetchPokemon()
    })
    
    return (
        <div>
            <h1>List of All</h1>
            {pokemons.pokemon.map((p, index) =>{
                return <div key={index}><h1>{p.pokemon.name}</h1></div>
            })}
        </div>
    )
}

export default UseEffectFetch