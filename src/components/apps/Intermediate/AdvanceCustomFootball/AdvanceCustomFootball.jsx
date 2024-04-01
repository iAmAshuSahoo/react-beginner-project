import {useState} from 'react';
import Game from './Game/Game';
import Controls from './Controls/Controls';
import './AdvanceCustomFootball.css';
import GameControl from './GameControl/GameControl';
import {cloneDeep} from 'lodash'

function AdvanceCustomFootball() {
    const [coordinates, setCoordinates] = useState([{position: 'absolute', transition: "all 1000ms ease 0s", top:"0px", left:"0px"},
    {position: 'absolute', transition: "all 1000ms ease 0s", top:"0px", left:"0px"},
    {position: 'absolute', transition: "all 1000ms ease 0s", top:"0px", left:"0px"}]);

    const [intervalId, setIntervalId] = useState([null, null, null]);

    const topPressed = (ind) => {
        clearInterval(intervalId[ind]);
        if ((coordinates.length - 2 === ind) && intervalId[ind+1]) {
            clearInterval(intervalId[ind+1]);
        }
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let top = (parseInt(prevCoordinate[ind].top) - 10) + 'px';
                if(parseInt(prevCoordinate[ind].top) < 10){   // -150
                    clearInterval(id);
                } else {
                    const temp = cloneDeep(prevCoordinate);
                    temp[ind].top = top;
                    return temp;
                }
                return prevCoordinate;
            })
        }, 1000)
        const inter = [...intervalId];
        inter[ind] = id
        setIntervalId(inter);
    }

    const downPressed = (ind) => {
        clearInterval(intervalId[ind]);
        if ((coordinates.length - 2 === ind) && intervalId[ind+1]) {
            clearInterval(intervalId[ind+1]);
        }
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let top = (parseInt(prevCoordinate[ind].top) + 10) + 'px';
                if(parseInt(prevCoordinate[ind].top) > 360){   // -150
                    clearInterval(id);
                } else {
                    const temp = cloneDeep(prevCoordinate);
                    temp[ind].top = top;
                    return temp;
                }
                return prevCoordinate;
            })
        }, 1000)
        const inter = [...intervalId];
        inter[ind] = id
        setIntervalId(inter);
    }

    const leftPressed = (ind) => {
        clearInterval(intervalId[ind]);
        if ((coordinates.length - 2 === ind) && intervalId[ind+1]) {
            clearInterval(intervalId[ind+1]);
        }
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let left = (parseInt(prevCoordinate[ind].left) - 10) + 'px';
                if(parseInt(prevCoordinate[ind].left) < 10){   // -150
                    clearInterval(id);
                } else {
                    const temp = cloneDeep(prevCoordinate);
                    temp[ind].left = left;
                    return temp;
                }
                return prevCoordinate;
            })
        }, 1000)
        const inter = [...intervalId];
        inter[ind] = id
        setIntervalId(inter);
    }

    const rightPressed = (ind) => {
        clearInterval(intervalId[ind]);
        if ((coordinates.length - 2 === ind) && intervalId[ind+1]) {
            clearInterval(intervalId[ind+1]);
        }
        const id = setInterval(() => {
            setCoordinates(prevCoordinate => {
                let left = (parseInt(prevCoordinate[ind].left) + 10) + 'px';
                if(parseInt(prevCoordinate[ind].left) > 666){   // -150
                    clearInterval(id);
                } else {
                    const temp = cloneDeep(prevCoordinate);
                    temp[ind].left = left;
                    return temp;
                }
                return prevCoordinate;
            })
        }, 1000)
        const inter = [...intervalId];
        inter[ind] = id
        setIntervalId(inter);
    }

    const handleKeyPress = (event) => {
        switch (event.key) {
          case 'ArrowUp':
            topPressed(0);
            break;
          case 'ArrowDown':
            downPressed(0);
            break;
          case 'ArrowLeft':
            leftPressed(0);
            break;
          case 'ArrowRight':
            rightPressed(0);
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
        <GameControl 
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            intervalId={intervalId}
            ind={2}
            topPressed={topPressed}
            downPressed={downPressed}
            leftPressed={leftPressed}
            rightPressed={rightPressed} 
        />
        <GameControl 
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            intervalId={intervalId}
            ind={1}
            topPressed={topPressed}
            downPressed={downPressed}
            leftPressed={leftPressed}
            rightPressed={rightPressed} 
        />
        <div className="ground-control">
            <Controls
                ind={0}
                topPressed={topPressed}
                downPressed={downPressed}
                leftPressed={leftPressed}
                rightPressed={rightPressed} 
            />
            <button className='btn-emoji' onClick={() => clearInterval(intervalId[0])}>🛑</button>
        </div>
    </div>)
}

export default AdvanceCustomFootball
