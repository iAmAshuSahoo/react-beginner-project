const heading = React.createElement('h2', {id: "heading"}, "Hello from React from App file!");
const root = ReactDOM.createRoot(document.getElementById('root'));

// Like document.createElement we use React.createElement
const parent = React.createElement('div', {id: 'parent'}, 
    [React.createElement('div', {id: 'child'},
        // {} - Object is the thing that is used to give attribute to tag - {id: 'heading'}
        [React.createElement('h1', {}, 'I am a Nested Element'),
        React.createElement('h2', {}, 'I am a Nested Element sibling')]   
    ),
    // createElement has tag 'h1', prop {} and children - 'I am a Nested Element'. Children can be string or array of string
    React.createElement('div', {id: 'child'},
        [React.createElement('h1', {}, 'I am a Nested Element'),
        React.createElement('h2', {}, 'I am a Nested Element sibling')]   
    )]
)
root.render(parent);