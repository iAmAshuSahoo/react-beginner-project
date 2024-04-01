import * as React from 'react';
import './Controls.css';

export default function Controls({ind, topRef, leftRef, rightRef, bottomRef, topPressed, downPressed, leftPressed, rightPressed}) {
    return (
        <div className="horizontal-dir">
            <button className="up btn-emoji" 
                ref={topRef}
                onMouseDown={() => topPressed(ind)}>⬆️</button>
            <div className="vertical-dir">
                <button className="left btn-emoji" 
                    onClick={() => leftPressed(ind)}
                    ref={leftRef}
                    >⬅️</button>
                <button className="right btn-emoji" 
                    onClick={() => rightPressed(ind)}
                    ref={rightRef}>➡️</button>
            </div>
            <button className="down btn-emoji" 
                onClick={() => downPressed(ind)}
                ref={bottomRef}>⬇️</button>
        </div>
    )
}