import React, { useState } from "react";
import "../styles/Questions.css";
const Question = () => {
    const [QuestionList, setQuestionList] = useState("");
    const handleQuestion = () => {
        alert(QuestionList)
    }

	return (
		<div className="QuestionClass">
			<p>Question</p>
			<input
				type="textarea"
				className="InputAreaClass"
				onChange={(e) => setQuestionList(e.target.value)}
            />
            <input className="btn-submit-form" type="submit" onClick={handleQuestion}/>
		</div>
	);
};

export default Question;
