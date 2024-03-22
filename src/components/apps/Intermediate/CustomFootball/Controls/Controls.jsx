import * as React from 'react';
import './Controls.css';

export default function Controls() {
    return (
        <div className='control-container'>
            <div className="horizontal-dir">
                <button className="up btn-emoji">⬆️</button>
                <div className="vertical-dir">
                    <button className="left btn-emoji">⬅️</button>
                    <button className="right btn-emoji">➡️</button>
                </div>
                <button className="down btn-emoji">⬇️</button>
            </div>
        </div>
    )
}