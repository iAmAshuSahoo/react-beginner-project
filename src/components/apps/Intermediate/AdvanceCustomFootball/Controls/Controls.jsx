import * as React from 'react';
import './Controls.css';

export default function Controls({ind, topRef, leftRef, rightRef, bottomRef, topPressed, downPressed, leftPressed, rightPressed}) {
    return (
        <div className="horizontal-dir">
            <button className="up btn-emoji" 
                ref={topRef}
                onMouseDown={() => ind === 0 ? topPressed(ind) : null}>⬆️</button>
            <div className="vertical-dir">
                <button className="left btn-emoji" 
                    onClick={() => ind === 0 ? leftPressed(ind) : null}
                    ref={leftRef}
                    >⬅️</button>
                <button className="right btn-emoji" 
                    onClick={() => ind === 0 ? rightPressed(ind) : null}
                    ref={rightRef}>➡️</button>
            </div>
            <button className="down btn-emoji" 
                onClick={() => ind === 0 ? downPressed(ind) : null}
                ref={bottomRef}>⬇️</button>
        </div>
    )
}