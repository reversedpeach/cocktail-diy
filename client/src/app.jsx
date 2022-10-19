import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./utils/css/app.css";

import readModel from "./readModel.js";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const model = readModel();

const App = ({ model }) => {
	return (
		<Router>
			<div>
				<div>
					<nav>
						<li>
							<Link to="/"> Home </Link>
							<Link to="/profile"> Profile </Link>
							<Link to="/login"> Log in </Link>
							<Link to="/register"> register </Link>
						</li>
					</nav>
				</div>
				<Routes>
					<Route path="/" element={<HomePage model={model} />} />
					<Route path="/profile" element={<ProfilePage model={model} />} />
					<Route path="/login" element={<LoginPage model={model} />} />
					<Route path="/register" element={<Register model={model} />} />
				</Routes>
			</div>
		</Router>
	);
};

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
