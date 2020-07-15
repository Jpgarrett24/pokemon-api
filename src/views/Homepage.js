import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage = (props) => {

    const [pokemon, setPokemon] = useState(null);

    const getPokemon = (event) => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=964&offset=0")
            .then ( (response) => {
                setPokemon(response.data.results)})
            .catch ( (error) => {console.log(error);});
    }

    const displayPokemon = () => {
        if (pokemon === null){
            return(
                <li>Haven't caught them all, please "Fetch Pokémon!"</li>
            )
        }
        else{
            return(pokemon.map( (pokemon, idx) => {
                return (<li key={idx}>{idx+1}: {pokemon.name}</li>);
            }))
        }
    }

    return (
        <>
            <button onClick={getPokemon}>Fetch Pokémon!</button>
            <ul>
                <h4>Pokémon</h4>
                {displayPokemon()}
            </ul>
        </>
    )
}

export default Homepage;