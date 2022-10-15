import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./utils/css/app.css";

import readModel from "./readModel.js";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import useModelProp from "./utils/useModelProp";

const model = readModel();

const App = ({ model }) => {
	const showDetails = useModelProp(model, "drinkdetails");
	const showResult = useModelProp(model, "currentdrink");
	const currentMode = useModelProp(model, "selectedmode");
	return (
		<div>
			<HomePage model={model} />
			{/* <ProfilePage model={model} /> */}
		</div>
	);
};

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
