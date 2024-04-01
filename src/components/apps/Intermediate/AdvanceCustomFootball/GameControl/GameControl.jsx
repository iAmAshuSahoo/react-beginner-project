import {useState, useEffect, useRef} from 'react'
import './GameControl.css'
import Controls from '../Controls/Controls'
import { intersection } from 'lodash';

function GameControl({coordinates, setCoordinates, intervalId, ind, topPressed, downPressed, leftPressed, rightPressed}) {
    const [areSiblingsIntersecting, setAreSiblingsIntersecting] = useState({top: false, right:false, left: false, bottom: false});
    const dotRef = useRef(null);
    const topRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const checkIntersection = () => {
          if (dotRef.current && topRef.current && leftRef.current && rightRef.current && bottomRef.current) {
              const dot = dotRef.current.getBoundingClientRect();
              const topVal = topRef.current.getBoundingClientRect();
              const leftVal = leftRef.current.getBoundingClientRect();
              const rightVal = rightRef.current.getBoundingClientRect();
              const bottomVal = bottomRef.current.getBoundingClientRect();
              
              const top = !(topVal.right < dot.left || 
                topVal.left > dot.right || 
                topVal.bottom < dot.top || 
                topVal.top > dot.bottom);

              const left = !(leftVal.right < dot.left || 
                leftVal.left > dot.right || 
                leftVal.bottom < dot.top || 
                leftVal.top > dot.bottom);

              const right = !(rightVal.right < dot.left || 
                rightVal.left > dot.right || 
                rightVal.bottom < dot.top || 
                rightVal.top > dot.bottom);
                
              const bottom = !(bottomVal.right < dot.left || 
                bottomVal.left > dot.right || 
                bottomVal.bottom < dot.top || 
                bottomVal.top > dot.bottom);
            
            setAreSiblingsIntersecting({...areSiblingsIntersecting, top, left, right, bottom});
          }
        };
        // Call the function initially
        checkIntersection();

        // Add event listeners for resize and scroll events
        window.addEventListener('resize', checkIntersection);
        window.addEventListener('scroll', checkIntersection);

        // Use a MutationObserver to observe changes in box2 position
        const observer = new MutationObserver(checkIntersection);
        if (dotRef.current) {
            observer.observe(dotRef.current, { attributes: true, childList: true, subtree: true });
        }

        // Cleanup: Remove event listeners when the component unmounts
        return () => {
        window.removeEventListener('resize', checkIntersection);
        window.removeEventListener('scroll', checkIntersection);
        };
    }, []); // Empty dependency array ensures effect runs only once

    useEffect(() => {
      if (areSiblingsIntersecting.top) {
        topPressed(ind)
      } else if (areSiblingsIntersecting.left) {
        leftPressed(ind)
      } else if (areSiblingsIntersecting.right) {
        rightPressed(ind)
      } else if (areSiblingsIntersecting.bottom) {
        downPressed(ind)
      } 
    }, [areSiblingsIntersecting])

    return (
        <div className='game-container'>
            <div className="control">
                <Controls 
                    ind={ind}
                    topRef={topRef}
                    leftRef={leftRef}
                    rightRef={rightRef}
                    bottomRef={bottomRef}
                    topPressed={topPressed}
                    downPressed={downPressed}
                    leftPressed={leftPressed}
                    rightPressed={rightPressed} 
                />
            </div>
            <div className="dot" style={coordinates[ind-1]} ref={dotRef}></div>  
        </div>)
}

export default GameControl