import React, {  useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../api/index";
import { useAuth } from "../context/AuthProvider";


const Home = () => {
	const {user} = useAuth();
	
	const [question ,setQuestion] = useState("sdfsdfsdfsdfc");
	const [answer, setAnswer] = useState("asv");
	const [userAnswer,setUserAnswer] =useState("")
    
    useEffect(() => {
        restoreUser();
      }, []);
    
	async function restoreUser() {
		console.log(user)
        axios
        .get("/question/getQuestion")
            .then(function (response) {
				setQuestion(response.data.question)
				setAnswer(response.data.answer)
           
        })
            .catch(function (error) {  
            console.log(error);
        })
        
      }


	const submitAnswer = () => {
		user ? (
			axios
				.post("/question/saveAnswer", {
					question,
					userAnswer,
				})
				.then(function (response) {
					alert("response.msg");
				})
				.catch(function (error) {
					console.log(error);
				})
		) : (
			<NavLink to="/SignIn" />
		);
	};
	return (
		<div className="QuestionListContainer">
			<h1>{question}</h1>
			<p>{answer}</p>
			<div>
				<p>Post Your Answer</p>
				<input
					type="textarea"
					className="InputAreaClass"
					onChange={(e) => setUserAnswer(e.target.value)}
				/>
				<input
					className="btn-submit-form"
					type="submit"
					onClick={submitAnswer}
				/>
			</div>
		</div>
	);
};

Home.contextType = useContext;

export default Home;
