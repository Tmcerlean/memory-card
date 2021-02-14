import React from 'react';
import '../styles/CardList.css';
import Card from './Card';

const CardList = (props) => {

    const pokemon = props.pokemon.map((poke) => {
        return <Card key={poke} poke={poke} validateSelection={props.validateSelection}/>;
    });

    return (
        <div className='card-list'>
            {pokemon}
        </div>
    );
}

export default CardList;