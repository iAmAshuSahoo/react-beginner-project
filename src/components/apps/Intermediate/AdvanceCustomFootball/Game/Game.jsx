import {useState, useEffect} from 'react';
import './Game.css';

export default function Game({coordinates, setCoordinates, intervalId}) {
    const [goal, setGoal] = useState({position: 'absolute', left: "0px", top: "0px"});
    const [overlapDetected, setOverlapDetected] = useState(false);

    useEffect(() => {
      const checkOverlap = () => {
        if (
          parseInt(coordinates.top) > parseInt(goal.top) &&
          (parseInt(coordinates.top) + 25) < (parseInt(goal.top) + 150) &&
          parseInt(coordinates.left) > parseInt(goal.left) &&
          (parseInt(coordinates.left) + 25) < (parseInt(goal.left) + 150)
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
        setCoordinates({position: 'absolute', top:"0px", left:"0px"})
        clearInterval(intervalId);
        alert('Success!!!🎉🤩🌟You hit the goal');
      }
    }, [overlapDetected]); // Trigger alert when overlapDetected changes

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