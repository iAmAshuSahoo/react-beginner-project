import React from 'react';
import './Tank.css';

function Tank({tankLevel, addWater, index, emptyTank}) {
  return (
    <div>
        <button className='bttn bttn-add' onClick={(e) => addWater(e, index)}>Add</button>
        <button className='bttn bttn-empty' onClick={(e) => emptyTank(e, index)}>Empty</button>
        <div className='tank'>
            <div className='water' style={{height:`${tankLevel}px`}}></div>
        </div>
        <div style={{textAlign: 'center'}}><strong>{Math.round(tankLevel*10*100)/100}L</strong></div>
    </div>
  )
}

export default Tank