import {useState, useEffect} from 'react';
import './Game.css';

export default function Game({coordinates, setCoordinates, intervalId}) {
    const [goal, setGoal] = useState({position: 'absolute', left: "0px", top: "0px"});
    const [overlapDetected, setOverlapDetected] = useState(false);

    useEffect(() => {
      const checkOverlap = () => {
        if (
          parseInt(coordinates[coordinates.length - 1].top) > parseInt(goal.top) &&
          (parseInt(coordinates[coordinates.length - 1].top) + 25) < (parseInt(goal.top) + 150) &&
          parseInt(coordinates[coordinates.length - 1].left) > parseInt(goal.left) &&
          (parseInt(coordinates[coordinates.length - 1].left) + 25) < (parseInt(goal.left) + 150)
        ) {
          setOverlapDetected(true);
        } else {
          setOverlapDetected(false);
        }
      };
      checkOverlap();
      const intervalId = setInterval(checkOverlap, 100); // Check overlap every 100 milliseconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [coordinates]); // Empty dependency array ensures this effect runs only once after initial render
  
    useEffect(() => {
      if (overlapDetected) {
        let tempCoordinate = [...coordinates];
        tempCoordinate[1] = {position: 'absolute', top:"0px", left:"0px"}
        setCoordinates(tempCoordinate)
        intervalId.forEach(element => {
          clearInterval(element);
        });
        alert('Success!!!🎉🤩🌟You hit the goal');
      }
    }, [overlapDetected]); // Trigger alert when overlapDetected changes

    useEffect(() => {
        let left = Math.floor(Math.random()*541) + 'px';
        let top = parseInt(left) < 26 ? Math.floor(26 + Math.random()*241) + 'px' : Math.floor(Math.random()*241) + 'px';
        setGoal({position: 'relative', left, top})
    }, [])

    return (
    <div className='game-container'>
        <div className="goal-container" style={goal}></div>
        <div className="dot" style={coordinates[coordinates.length - 1]}></div>
    </div>)
}