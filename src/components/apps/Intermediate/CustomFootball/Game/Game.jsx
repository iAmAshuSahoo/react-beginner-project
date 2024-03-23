import {useState, useEffect} from 'react';
import './Game.css';

export default function Game({coordinates}) {
    const [goal, setGoal] = useState({position: 'relative', left: "0px", top: "0px"});

    useEffect(() => {
        let left = Math.floor(Math.random()*541) + 'px';
        let top = parseInt(left) < 26 ? Math.floor(175 + Math.random()*241) + 'px' : Math.floor(Math.random()*241) + 'px';
        setGoal({position: 'relative', left, top})
    }, [])

    console.log(coordinates)
    return (
    <div className='game-container'>
        <div className="goal-container" style={goal}></div>
        <div className="dot" style={coordinates}></div>
    </div>)
}