import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeApi = () => {

    const [ pokemon, setPokemon ] = useState({});
    const [ weight, setWeight ] = useState(0);
    const [ isHectograms, setIsHectograms ] = useState(true);

    useEffect(()=> {
        const id = Math.floor(Math.random() * 600) +1
        axios.get("https://pokeapi.co/api/v2/pokemon/"+ id)
            .then(res => {
                setPokemon(res.data)
                setWeight(res.data.weight)
            });
    }, [])

    const convertWeight = () => {
        if(isHectograms){
            setWeight(weight / 10)
            setIsHectograms(false)
        } else {
            setWeight(weight * 10)
            setIsHectograms(true)
        }
    }

    const getPokemon = () => {
        const id = Math.floor(Math.random() * 600) +1
        axios.get("https://pokeapi.co/api/v2/pokemon/"+ id)
            .then(res => {
                setPokemon(res.data)
                setWeight(res.data.weight)
            });
    }
    console.log(pokemon)

    return (
        <div className='pokemon-card'>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} style={{maxHeight: "100%", maxHeight: "100%"}} alt="" />
            <p><b>weight: </b>{weight} {isHectograms ? "hectograms": "kilograms"}</p>
            <p><b>height: </b>{pokemon.height} decimeters</p>
            <p><b>type: </b>{pokemon.types?.[0].type.name}</p>
            <button onClick={convertWeight} style={{background: "lightgreen"}}>{isHectograms ? "Convert to kilograms": "Convert to hectograms"}</button>
            <br />
            <button onClick={getPokemon} style={{background: "orange"}}>Change Pokemon</button>
        </div>
    );
};

export default PokeApi;