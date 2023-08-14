import {useState, useCallback, Fragment} from 'react';
import BeginnerLayout from '../beginnerUtility/BeginnerLayout/BeginnerLayout';
import axios from 'axios';
import debounce from "lodash/debounce";
import Card from "../../../card/Card";
import './GithubUserInfo.css';

export default function GithubUserInfo() {
    const [githubUsers, setGithubUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    const sendQuery = (query) => {
        // Call API with query parameter here
        console.log(query);
        axios
        .get(`https://api.github.com/search/users?q=${query}`)
        .then((response) => {
            // console.log(response)
            setGithubUsers(response.data.items);
        });
    };

    const delayedSearch = useCallback(
        debounce((q) => sendQuery(q), 1000),
        []
    );

    function handleChange (e) {
        setSearchText(e.target.value)
        delayedSearch(e.target.value);
    }

    // function handleClick () {
        // while (searchText !== "") {
        //     axios
        //     .get(`https://api.github.com/search/users?q=${searchText}`)
        //     .then((response) => {
        //         console.log(response)
        //         // setGithubUsers(response.data.items);
        //     });

            // fetch(`https://api.github.com/search/users?q=${searchText}`)
            // .then(res => {
            //     if(!res.ok) {
            //         throw new Error('Network response was not ok');
            //     } else {
            //         console.info("resp received for searchText ", searchText);
            //         return res.json();
            //     }
            // }).then(data => {
            //     setGithubUsers(data.items);
            // })
    //     }
    // } 

    return (
        <BeginnerLayout headingTitle="Project 5: Github User Search">
            <div className='github-header'>
                <input type="text" name="userDetail" id="userDetail" className='user-detail' 
                placeholder='Enter username or email' onChange={(e) => handleChange(e)}/>
                <button className='user-detail' id="btn-color" onClick={handleClick}>Search</button>
            </div>
            <div className="github-body">
            {githubUsers.map((user) => (
                <Fragment key={user.url}>
                    <Card
                        name={user.login}
                        redirect
                        urlRedirect={user.html_url}
                        img={user.avatar_url}
                    />
                </Fragment>
            ))}

            </div>
        </BeginnerLayout>
    )
}