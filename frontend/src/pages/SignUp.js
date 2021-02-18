import React, { useState } from 'react'
import axios from "../api/index";

const SignUp = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    
    const handleSubmit = () => {
		axios
			.post("/question/save", {
				Email,
				Password,
			})
			.then(function (response) {
				console.log(response);
				
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
					<input
						className="inputClass"
						id="repeat-password"
						name="repeat-password"
						type="password"
						placeholder="Repeat password"
					/>
				</div>
				<input
					className="btn-submit-form"
					type="submit"
					onClick={handleSubmit}
				/>
				
			</form>
		</div>
    )
}

export default SignUp
