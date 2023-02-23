import BeginnerLayout from "../beginnerUtility/BeginnerLayout/BeginnerLayout";
import "./QuoteApp.css";
import { useEffect, useReducer } from 'react';
import quoteReducer from './quoteReducer';

export default function QuoteApp() {
    const [quote, dispatch] = useReducer(quoteReducer, { quoteArr: [], message: "" });
    // const quote = [];

    useEffect(() => {
        fetch("https://type.fit/api/quotes").
            then(res => res.json()).
            then(json => {
                dispatch({
                    type: "add_quote",
                    quoteArr: json
                })
                dispatch({
                    type: "change_message"
                })
            });
    }, [])

    function loadQuote() {
        dispatch({
            type: "change_message"
        })
    }


    return (
        <BeginnerLayout
            headingTitle="Project 3: Quote Generator"
            bgColor="bg-yellow">
            <div className="quote-holder">
                <button onClick={loadQuote}>New Quote</button>
                <div className="quote-style my-3">"{quote.message && quote.message.text ? quote.message.text : "Quote Not Available"}</div>
                <div>-{quote.message && quote.message.author ? quote.message.author : "Unknown"}</div>
            </div>
        </BeginnerLayout>
    )
}