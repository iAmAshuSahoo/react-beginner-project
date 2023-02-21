
export default function ShowQuestion({ questionInfo, selectedQues, handleFaq, showAns }) {

    return (
        <div className='faq-ques'>
            <button className={`accordion ${showAns ? "active" : ""}`} onClick={(e) => handleFaq(e, selectedQues)}>{questionInfo.title}</button>
            <div className={`panel ${showAns ? "" : "addHeight"}`}>
                <p>{questionInfo.info}.</p>
            </div>
        </div>
    );
}