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
import ResultsList from "./presenter/resultsList.js";
import IngShaker from "./presenter/ingShaker.js";
import MyBarElem from "./presenter/myBarElem.js";
import SearchIng from "./presenter/searchIng.js";
import ResultDetails from "./presenter/resultDetails";
import useModelProp from "./utils/useModelProp";

const model = readModel();



const App = ({ model }) => {
	const showDetails = useModelProp(model, "drinkdetails");
	return (
		<div className="discoverBox">
			<div className="topBox">
				<div className="shakerBox">
					<div className="ingCol">
						<IngShaker model={model} />
					</div>
					<Shaker />
				</div>
				<div className="barBox">
					<MyBar model={model} />
					<div className="barShelf">
						<div className="barRow">
							<MyBarElem model={model} />
						</div>
					</div>
					<div className="searchIngredientForm">
						<SearchIng
							model={model}
							onAdd={(add) => model.addIngShaker(add)} />
					</div>
				</div>

			</div>
			<div className="bottomBox">
				<div className="resultCol">
					<div>
						<span>Drinks</span>
						<div className="drinkresultsList">
							<ResultsList model={model} />
						</div>
						{showDetails === null ? <div></div> : <ResultDetails model={model} />}
					</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
