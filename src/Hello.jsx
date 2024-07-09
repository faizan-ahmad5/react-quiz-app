import { useState } from "react";
import App from './App.jsx';
import './Hello.css'; 

function Hello() {
    const [check, setCheck] = useState(false);

    function handleClick() {
        setCheck(true);
    }

    return (
        <>
            {check ? (
                <App />
            ) : (
                <div className="intro-container">
                    <h1 className="intro-heading">Welcome to the Quiz Test</h1>
                    <p className="intro-paragraph">
                        This quiz is designed to test your knowledge on various topics related to computer science and technology. Before you start, please read the following guidelines:
                    </p>
                    <ul className="intro-guidelines">
                        <li>Each question is multiple-choice.</li>
                        <li>Select the answer you believe is correct.</li>
                        <li>Your score will be calculated based on the number of correct answers.</li>
                        <li>Try to answer all questions to the best of your ability.</li>
                    </ul>
                    <p className="intro-paragraph">
                        Click the button below to begin the test.
                    </p>
                    <button className="intro-button" onClick={handleClick}>Continue</button>
                </div>
            )}
        </>
    );
}

export default Hello;
