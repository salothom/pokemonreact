import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Pokemon from './pokemon'
import Pagin from './pagin'

import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    let cancel

    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)

    }).then(res => {
console.log(res.data.next)
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p))


    })

    return () => cancel()
  }, [currentPageUrl])


  function refreshPage(){
     setCurrentPageUrl(currentPageUrl+"&refresh=yes")
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }


  return (
    <div className="App">
      <h2>POKEMON BABY</h2>
      {loading && <div>LOADING...</div>}

      {!loading && <Pokemon refreshPage={refreshPage} pokemon={pokemon} gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/>}


    </div>
  );
}

export default App;
