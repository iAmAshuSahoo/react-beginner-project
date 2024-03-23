import {useState} from 'react';
import Game from './Game/Game';
import Controls from './Controls/Controls';
import './CustomFootball.css';

function CustomFootball() {
    const [coordinates, setCoordinates] = useState({position: 'relative', top:"0px", left:"0px"});

    const topPressed = () => {
        const intervalId = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let top = (parseInt(prevCoordinate.top) - 10) + 'px';
                if(parseInt(prevCoordinate.top) < -145){   // -150
                    clearInterval(intervalId);
                } else {
                    return {...prevCoordinate, top}
                }
                return prevCoordinate;
            })
        }, 1000)
    }
    return (<div className='football-container'>
        <Game
            coordinates={coordinates} />
        <Controls
            topPressed={topPressed} />
    </div>)
}

export default CustomFootball