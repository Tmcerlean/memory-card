import React, {useState, useEffect} from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import '../styles/PokemonImage.css';

const P = new Pokedex();

const PokemonImage = (props) => {

    const [state, setState] = useState({
        imageOfPokemon: '',
    });

    useEffect(() => {
        (async () => {
            const pokemonImage = await P.getPokemonByName(`${props.poke}`)
            setState({imageOfPokemon: pokemonImage.sprites.other["official-artwork"].front_default})
          })()
      }, [props]);

    return (
        <div>
            <img alt={`a wild ${props.poke}`} className='pokemon-image' src={state.imageOfPokemon} />
        </div>
    );
}

export default PokemonImage;