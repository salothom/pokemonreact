

import React from 'react'

export default function PokemonList({ gotoNextPage, gotoPrevPage }) {


    return (
        <div>
            {gotoPrevPage && <button className="button" onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button className="button" onClick={gotoNextPage}>Next</button>}
        </div>
    )
}