import * as React from 'react';
import Game from './Game/Game';
import Controls from './Controls/Controls';
import './CustomFootball.css';

function CustomFootball({demo}) {
    return (<div className='football-container'>
        <Game />
        <Controls />
    </div>)
}

export default CustomFootball