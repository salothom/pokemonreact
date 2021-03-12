

import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function PokemonList({ pokemon, refreshPage, gotoNextPage, gotoPrevPage }) {

    const [monster, updateMonster] = useState()

    // var monsterChart = [];
    function moreMonster(monsterUrl) {
        axios.get(monsterUrl).then(
            res => {
                var monsterChart = []
                console.log(res.data)
                // updateMonster(res.data.results.map(p => p))
                monsterChart.push(<div><img className="tooBigHaHa" src={res.data.sprites.front_default} /> </div>)

                updateMonster(monsterChart)
                // monsterChart.push(<img href={res.data.sprites.front_default} />)
            }
        )
    }

    function backToMonsters() {
        updateMonster([])
        refreshPage()
    }

    return (

        <div>
            {monster}
            <div className="container" >
                {!monster && pokemon.map(monster =>
                    (<div key={monster.name} className="pokemons">
                        <div onClick={() => moreMonster(monster.url)} className="pokeBox">
                            {monster.name}
                        </div>
                    </div>
                    ))}
                {!monster && <div className="buttonHolder" >
                    {gotoPrevPage && <button className="button" onClick={gotoPrevPage}>Previous</button>}
                    {gotoNextPage && <button className="button" onClick={gotoNextPage}>Next</button>}
                </div>}
            </div>

            {monster && <div className=" buttonHolder"><button className="button " onClick={backToMonsters}>Back</button></div>}

        </div>
    );
}