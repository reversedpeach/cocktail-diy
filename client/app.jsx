import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./utils/css/app.css";
import readModel from "./readModel.js";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const model = readModel();

const App = ({ model }) => {
	return (
		<div>
			{/* <HomePage model={model} /> */}
			<ProfilePage model={model} />
		</div>
	);
};

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
