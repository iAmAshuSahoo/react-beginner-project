import {useState, useEffect} from 'react';
import './WaterTank.css';
import Tank from './Tank/Tank';

function WaterTank() {
    const [allTankLevel, setAllTankLevel] = useState([0, 0, 0, 0]);

    useEffect(() => {
        return () => {
          for (let i = 0; i < allTankLevel.length; i++) {
            clearTimeout(i);
          }
        };
      }, [allTankLevel]);

    // const averageTankLevel = (updatedLevel) => {   // When I call this in setTimeOut add/Empty it throws error
    //     const tempAvgLevels = [...updatedLevel];
    //     const avgLevel = (tempAvgLevels.reduce((acc, item) => acc+item, 0) / tempAvgLevels.length)
    //     setAllTankLevel(Array(tempAvgLevels.length).fill(avgLevel));
    // }

    const addWater = (_, index) => {
        setAllTankLevel((tempLevels) => {
            const updatedLevel = [...tempLevels];
            if (updatedLevel[index] <= 80) {
                updatedLevel[index] += 20;
            } else {
                updatedLevel[index] = 100;
            }
            setTimeout(() => {
                const avgLevel = (updatedLevel.reduce((acc, item) => acc+item, 0) / updatedLevel.length)
                setAllTankLevel(Array(updatedLevel.length).fill(avgLevel));
            }, 1000);
            return updatedLevel;
        })
    }

    const emptyTank = (_, index) => {
        setAllTankLevel(tempLevels => {
            const updatedLevel = [...tempLevels]
            updatedLevel[index] = 0;
            setTimeout(() => {
                const avgLevel = (updatedLevel.reduce((acc, item) => acc+item, 0) / updatedLevel.length)
                setAllTankLevel(Array(updatedLevel.length).fill(avgLevel));
            }, 1000);
            return updatedLevel;
        })
    }
  return (
    <div className="container">
        <div className='heading'>
            <h1>Water Balancer</h1>
        </div>
        <div className='tank-container'>
            {allTankLevel.map((tankLevel, index) => (
                <Tank key={index} 
                    tankLevel={tankLevel} 
                    addWater={addWater} 
                    index={index}
                    emptyTank={emptyTank} />))}
        </div>
    </div>
  )
}

export default WaterTank