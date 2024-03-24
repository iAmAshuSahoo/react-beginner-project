import * as React from 'react';
import './Controls.css';

export default function Controls({topPressed, downPressed, leftPressed, rightPressed}) {
    return (
        <div className='control-container'>
            <div className="horizontal-dir">
                <button className="up btn-emoji" onMouseDown={topPressed}>⬆️</button>
                <div className="vertical-dir">
                    <button className="left btn-emoji" onClick={leftPressed}>⬅️</button>
                    <button className="right btn-emoji" onClick={rightPressed}>➡️</button>
                </div>
                <button className="down btn-emoji" onClick={downPressed}>⬇️</button>
            </div>
        </div>
    )
}