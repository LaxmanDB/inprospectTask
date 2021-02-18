import React from "react";
import { Link } from "react-router-dom";
import  "./navbar.css";
const navbar = () => {
	return (
		<div className="navContainer">
			<Link to="/"> <h1> Question Answer Platform </h1></Link>
			<Link to="/SignIn" className="singinLink">
				<button className="signinButton">Sing In</button>
			</Link>

			<Link to="/Question" className="QuestionLink">
				<button className="signinButton">Post Question</button>
			</Link>
		</div>
	);
};

export default navbar;
