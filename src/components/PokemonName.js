import React from 'react';
import '../styles/PokemonName.css';

const PokemonName = (props) => {

    const name = props.poke;
    const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div>
            <p className="pokemon-name">{capitalisedName}</p>
        </div>
    );
}

export default PokemonName;