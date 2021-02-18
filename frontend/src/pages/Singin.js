import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "../api/index";
import "../styles/Signin.css";
import { NavLink } from "react-router-dom";
const Singin = () => {
	const { login } = useAuth();
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");

	const handleSubmit = () => {
		axios
			.get("/question/login", {
				Email,
				Password,
			})
			.then(function (response) {
				console.log(response);
				login(response.token);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className="formContainer">
			<form className="account-form">
				<div className="account-form-fields ">
					<input
						className="inputClass"
						id="email"
						name="email"
						type="email"
						placeholder="E-mail"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						className="inputClass"
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					
				</div>
				<input
					className="btn-submit-form"
					
					value="Login"
					type="submit"
					onClick={handleSubmit}
				/>
				<div>
					<p>ifyou do not have account signup please</p>
					<NavLink to="/SignUp" className="QuestionLink">
						<button className="signinButton">Sign Up</button>
					</NavLink>
				</div>
			</form>
		</div>
	);
};

export default Singin;
