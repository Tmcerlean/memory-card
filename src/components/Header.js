import React from 'react';
import '../styles/Header.css';
import logo from '../images/pokemon-logo.png';

const Header = (props) => {

    return (
        <div className='header-container'>
            <div className="header-container-left">
                <img alt="Pokemon memory game logo" src={logo} height="50px"/>
            </div>
            <div className="header-container-right">
                <p className="score">Score: {props.score}</p>
                <p className="score">High Score: {props.highScore}</p>
            </div>
        </div>
    );
}

export default Header;