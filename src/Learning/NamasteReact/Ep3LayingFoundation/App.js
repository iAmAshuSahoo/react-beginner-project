import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
//React Element
const heading = React.createElement('h2', {id: "heading"}, "Hello from React from App file!");
const jsxHead = (
    <>
    <h1 className='head'>Namaste React</h1>
    {/* <HeadComponent2 /> */}
    </>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

//React Functional Component
const data = 100;

const HeadComponent = () => {
    return (
        <div>
            <Header />
            <HeadComponent1 />
            {/* {HeadComponent1} */}
            <HeadComponent3></HeadComponent3>
            {HeadComponent2()}
            <h1>This is heading</h1>
            {heading}
            {data}
        </div>
    )
}
const HeadComponent1 = () =>  <h1>This is HeadComponent1</h1>
const HeadComponent2 = () =>  (
    <h2>This is HeadComponent2</h2>
);

const HeadComponent3 = function() {
    return (
        <div>
            <HeadComponent1 />
            <h3>This is HeadComponent3</h3>
            {heading}
        </div>
    )
};

//Assignment
const Header = () => (
    <div id='container'>
        <div className='logo'>Learning<img src={require('../images/reactImg.png')} alt='react' width={'20px'} /></div>
        <div ><input type='search' className='searchBar' /></div>
        <div className='user-icon'>User</div>
    </div>
);
// root.render(jsxHead);
root.render(<HeadComponent />);
// root.render(<HeadComponent />);


// RDS -> Sample
async function challenge() {
    const res = await fetch("https://exam.ankush.wiki/challenges");
    resData = await res.json();
    let count = 0;
    resData.data.forEach(item =>  {
        if(item.name.toLowerCase().includes("version")) {
            const versionOccurence = (item.name.toLowerCase().match(/version/g) || []).length;
            count+=versionOccurence;
        }
    });
    const postRes = await fetch("https://exam.ankush.wiki/challenges", {
      method: "POST",
      body: JSON.stringify({
        count
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const postResData = await postRes.json();
    console.log(postResData);
}
challenge()

