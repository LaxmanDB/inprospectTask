import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider, { useAuth } from "./context/AuthProvider";
import Navbar from "./components/navbar/Navbar";
import Question from "./pages/Question";
import Singin from "./pages/Singin";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
function App() {


	//const { user,} = useAuth();
   

	return (
		<div>
			<Router>
				<div className="navbarTop">
					<Navbar />
				</div>
				<div className="webContent">
					<Switch>
						<AuthProvider>
							<Route exact path="/" component={Home} />
							<Route path="/SignIn" component={Singin} />
							<Route path="/SignUp" component={SignUp} />
							<Route path="/Question" component={Question} />
						</AuthProvider>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
