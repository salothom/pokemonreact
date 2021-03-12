

import React from 'react'

export default function PokemonList({ pokemon }) {


    return (

        <>
            {pokemon.map(monster => 
                ( <div key={monster.name} className="pokemons">
                    <div className="pokeBox">
                        {monster.name}
                    </div>
                </div>
            ))}

        </>
    )
}