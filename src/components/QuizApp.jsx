import {React, useState } from "react";
 
export default function QuizApp() {
    const questions = [
        {
            ans: 'he lost his semicolons',
            state: false,
        },
        {
            ans: 'he got tired of bugs and errors',
            state: true

        },
        {
            ans: 'he wanted to switch to java',
            state: false
        },
        
    ];


    const [answer, setAnswer] = useState()

    return (
        <div className="list">
            <h1>Quiz App</h1>
            <h3>Why did the javascript developer quit hes job ?</h3>
            <div>
            
                {questions.map((question, i) => (
         
                    <button key={i} className="btn" onClick={() => setAnswer(question.state)}>{question.ans}
                        
                    </button>
                ))}
            </div>
        </div>
    );
}
                    
         
    

