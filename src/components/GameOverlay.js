import React from 'react';
import '../styles/GameOverlay.css';

const GameOverlay = (props) => {

    return (
        <div className={`game-overlay ${props.gameOverlayActive ? "" : "hidden"}`}>   
            <h1>Game Over!</h1>
            <p>You remebered {props.score} Pokemon!</p>
            <button onClick={props.restartGame}>Try Again</button>
        </div>
    );
}

export default GameOverlay;