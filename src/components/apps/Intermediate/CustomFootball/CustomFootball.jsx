import {useState} from 'react';
import Game from './Game/Game';
import Controls from './Controls/Controls';
import './CustomFootball.css';

function CustomFootball() {
    const [coordinates, setCoordinates] = useState({position: 'absolute', transition: "all 1000ms ease 0s", top:"0px", left:"0px"});
    const [intervalId, setIntervalId] = useState(null);

    const topPressed = () => {
        clearInterval(intervalId);
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let top = (parseInt(prevCoordinate.top) - 10) + 'px';
                if(parseInt(prevCoordinate.top) < 10){   // -150
                    clearInterval(id);
                } else {
                    return {...prevCoordinate, top}
                }
                return prevCoordinate;
            })
        }, 1000)
        setIntervalId(id);
    }

    const downPressed = () => {
        clearInterval(intervalId);
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let top = (parseInt(prevCoordinate.top) + 10) + 'px';
                if(parseInt(prevCoordinate.top) > 360){   // -150
                    clearInterval(id);
                } else {
                    return {...prevCoordinate, top}
                }
                return prevCoordinate;
            })
        }, 1000)
        setIntervalId(id);
    }

    const leftPressed = () => {
        clearInterval(intervalId);
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let left = (parseInt(prevCoordinate.left) - 10) + 'px';
                if(parseInt(prevCoordinate.left) < 10){   // -150
                    clearInterval(id);
                } else {
                    return {...prevCoordinate, left}
                }
                return prevCoordinate;
            })
        }, 1000)
        setIntervalId(id);
    }

    const rightPressed = () => {
        clearInterval(intervalId);
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let left = (parseInt(prevCoordinate.left) + 10) + 'px';
                if(parseInt(prevCoordinate.left) > 666){   // -150
                    clearInterval(id);
                } else {
                    return {...prevCoordinate, left}
                }
                return prevCoordinate;
            })
        }, 1000)
        setIntervalId(id);
    }

    const handleKeyPress = (event) => {
        switch (event.key) {
          case 'ArrowUp':
            topPressed();
            break;
          case 'ArrowDown':
            downPressed();
            break;
          case 'ArrowLeft':
            leftPressed();
            break;
          case 'ArrowRight':
            rightPressed();
            break;
          default:
            break;
        }
      };

    return (<div className='football-container' onKeyDown={handleKeyPress}>
        <Game
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            intervalId={intervalId} />
        <Controls
            topPressed={topPressed}
            downPressed={downPressed}
            leftPressed={leftPressed}
            rightPressed={rightPressed} />
    </div>)
}

export default CustomFootball
