import * as React from 'react';
import './Game.css';

export default function Game() {
    function randomGoalPosition() {
        let left = Math.floor(Math.random()*541) + 'px';
        let top = parseInt(left) < 26 ? Math.floor(175 + Math.random()*241) + 'px' : Math.floor(Math.random()*241) + 'px';
        return{position: 'relative', left, top}
    }

    return (
    <div className='game-container'>
        <div className="goal-container" style={randomGoalPosition()}></div>
        <div className="dot"></div>
    </div>)
}