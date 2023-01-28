import { Fragment, useState } from 'react';
import { questions } from './faqQuestions';
import { Link } from "react-router-dom";
import "./Faq.css";

export default function Faq() {
    const [toggleFaq, setToggleFaq] = useState(Array(questions.length).fill(false, 0));
    const [openOneFaq, setOpenOneFaq] = useState(true);

    function handleFaq(e, index) {
        const updateFaq = toggleFaq.map((faq, ind) => {
            if (openOneFaq) {
                faq = false;
            }

            if (index === ind) {
                faq = !faq;
                return faq;
            }

            return faq;
        })
        setToggleFaq(updateFaq);
    }

    function handleOpenFaq() {
        setOpenOneFaq(openOneFaq => !openOneFaq);
        handleFaq();
    }

    const showAllQuestions = questions.map((ques, ind) => {
        return (<div className='faq-ques' key={ques.id}>
            <button className={`accordion ${toggleFaq[ind] ? "active" : ""}`} onClick={(e) => handleFaq(e, ind)}>{ques.title}</button>
            <div className={`panel ${toggleFaq[ind] ? "" : "addHeight"}`}>
                <p>{ques.info}.</p>
            </div>
        </div>);
    })
    return (
        <div>
            <Link to={"/"}><p className="home">Go to Home</p></Link>
            <h1 className='sub-head'>Project 2: FAQ/Accordian</h1>
            <div id="faq-style">
                <h2>FAQ</h2>
                <button className='open-faq' onClick={handleOpenFaq}>{openOneFaq ? "Open all FAQ" : "Open ONLY one Faq"}</button>
                {showAllQuestions}
            </div>
        </div>
    );
}