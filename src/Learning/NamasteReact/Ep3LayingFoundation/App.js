import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h2', {id: "heading"}, "Hello from React from App file!");
const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement('div', {id: 'parent'}, 
    [React.createElement('div', {id: 'child'},
        [React.createElement('h1', {}, 'I am a Nested Element'),
        React.createElement('h2', {}, 'I am a Nested Element sibling')]   
    ),
    React.createElement('div', {id: 'child'},
        [React.createElement('h1', {}, 'I am a Nested Element'),
        React.createElement('h2', {}, 'I am a Nested Element sibling')]   
    )]
)
root.render(parent);