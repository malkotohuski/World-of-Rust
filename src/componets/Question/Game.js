import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css'

const Game = () => {
    const history = useNavigate();
    const handleStartClick = () => {
        // Handle the logic for starting the game here
        // You can use the gameRules state to access the entered rules

        // Example: Navigate to the question page
        history('/question/1');
    };

    const handleBackClick = () => {
        // Handle the logic for going back here

        // Example: Navigate back to the previous page
        history('/');
    };

    return (
        <div>
            <h2 className='game-name'>Hello to the Game I am Rich</h2>
            <h2 className='game-rules'>Game Rules</h2>
            <div className='rules'>
                <strong><strong><p>You have 15 questions and two fixed amounts: the first is 5 questions and the second is 10.</p><p>You have 3 jokers: 1 50:50 (eliminates two wrong answers) the 2nd is help from the team and the third is ask the Outpost.</p></strong></strong>
            </div>
            <button className='start-button' onClick={handleStartClick}>Start</button>
            <button className='back-button' onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default Game;
