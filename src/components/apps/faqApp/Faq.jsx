import { Fragment, useState } from 'react';
import { questions } from './faqQuestions';
import { Link } from "react-router-dom";
import ShowQuestion from './ShowQuestion';
import "./Faq.css";

export default function Faq() {
    const [openOneFaq, setOpenOneFaq] = useState(true);
    const [toggleFaq, setToggleFaq] = useState(Array(questions.length).fill(false));

    const showAllQuestions = questions.map((ques, ind) => {
        return (
            <Fragment key={ques.id}>
                <ShowQuestion
                    questionInfo={ques}
                    selectedQues={ind}
                    showAns={toggleFaq[ind]}
                    handleFaq={handleFaq}
                />
            </Fragment>
        );
    });

    function handleFaq(e, index) {
        const updateFaq = toggleFaq.map((faq, ind) => {
            if (handleShowOneFaqLogic(index)) {
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

    function handleShowOneFaqLogic(index) {
        return openOneFaq && !toggleFaq[index]
    }

    function handleOpenFaq() {
        setOpenOneFaq(openOneFaq => !openOneFaq);
        const updateFaq = Array(questions.length).fill(false);
        setToggleFaq(updateFaq);
    }

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