import React from 'react';
import '../styles/Card.css';
import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';

const Card = (props) => {

    return (
        <div className='card' onClick={() => props.validateSelection(props.poke)}>
            <PokemonImage poke={props.poke}/>
            <PokemonName poke={props.poke}/>
        </div>
    );
}

export default Card;