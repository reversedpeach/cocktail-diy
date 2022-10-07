import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import Switch from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./utils/css/app.css";
import { createRoot } from "react-dom/client";
import CocktailModel from "./model/cocktailModel";
import readModel from "./readModel.js";

import MyBar from "./presenter/myBar.js";
import Shaker from "./presenter/shaker.js";
import DrinkResult from "./presenter/drinkResult";

const model = readModel();

const App = ({ model }) => {
	return (
		<div className="discoverBox">
			<div className="topBox">
				<Shaker model={model} />
				<MyBar model={model} />
			</div>
			<DrinkResult model={model} />
		</div>
	);
};

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
