import React, {useState, useEffect} from 'react';
import '../styles/GameContainer.css';
import CardList from './CardList';
import listOfPokemon from '../list-of-pokemon';

const GameContainer = (props) => {

    const [level, setLevel] = useState(1);
    const [cards, setCards] = useState(4);
    const [cardsPicked, setCardsPicked] = useState();
    const [pokemonArray, setPokemonArray] = useState([]);
    const [activePokemon, setActivePokemon] = useState([]);

    useEffect(() => {
        if (props.restartedGame === true) {
            setLevel(1);
            setCards(4);
            setCardsPicked();
            setPokemonArray([]);
            setActivePokemon([]);
            props.toggleRestartedGame(false);
            newCards();
        }    
    }, [props.restartedGame]);

    const calculateRequiredCards = (level) => {

        switch(level) {
            case 1:
                setCards(4)
                break;
            case 2:
                setCards(6)
                break;
            case 3:
                setCards(8)
                break;
            case 4:
                setCards(10)
                break;
            case 5:
                setCards(12)
                break;
            default:
                setCards(12)
        }
    }

    const generatePokemonArray = (cards) => {

        const generatedPokemonArray = [];
       
        for (let i = 0; i<cards; i++) {
            let newValue = Math.floor(Math.random() * (150 - 0) + 0)
            while (generatedPokemonArray.includes(newValue)) {
                newValue = Math.floor(Math.random() * (150 - 0) + 0)
            }
            generatedPokemonArray.push(newValue);
        };

        setPokemonArray(
            generatedPokemonArray
        );
    };

    const generateActivePokemon = (pokemonArray, listOfPokemon) => {

        const pokemonNames = [];

        for (let i=0; i<pokemonArray.length; i++) {
            pokemonNames.push(listOfPokemon[pokemonArray[i]].name);
        };

        setActivePokemon(
            pokemonNames
        );
    }

    useEffect(() => {
        calculateRequiredCards(level);
    }, [level]);

    useEffect(() => {
        generatePokemonArray(cards);
    }, [cards]);

    useEffect(() => {
        if (pokemonArray.length > 0) {
            generateActivePokemon(pokemonArray, listOfPokemon);
        }
    }, [pokemonArray]);
    
    const validateSelection = (card) => {
        if (!cardsPicked) {
            setCardsPicked(
                [card]
            );
            shuffleCards(activePokemon);
            props.updateScore();
        }
        else {
            let cardExists = false;
            shuffleCards(activePokemon);
            for (let i=0; i<cardsPicked.length; i++) {
                if (card === cardsPicked[i]) {
                    (cardExists = true)
                }
            }
            if (cardExists === false) {
                setCardsPicked([...cardsPicked, card]);
            } else {
                if (props.score > props.highScore) {
                    props.updateHighScore(props.score);
                }
                props.toggleGameOverlay();
                return
            }
            props.updateScore();
            if (cardsPicked.length === cards - 1) {
                setCardsPicked();
                setLevel(level + 1);
                newCards();
            }
        }
    }

    const shuffleCards = (activePokemon) => {
        var currentIndex = activePokemon.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = activePokemon[currentIndex];
            activePokemon[currentIndex] = activePokemon[randomIndex];
            activePokemon[randomIndex] = temporaryValue;
        }
        
        return activePokemon;
    }

    const newCards = () => {
        setPokemonArray([]);
        generatePokemonArray(cards)
        setActivePokemon([])
        generateActivePokemon(pokemonArray, listOfPokemon)
    }
  
    return (
        <div className='game-container'>
            <CardList pokemon={activePokemon} validateSelection={validateSelection}/>
        </div>
    );
}

export default GameContainer;