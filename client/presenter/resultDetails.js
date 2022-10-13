import React, { useState, useEffect } from "react";
import { usePromise, promiseNoData } from "../utils/usePromise.js";
import CocktailSource from "../cocktailApi.js";

import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import ResultDetailsView from "../view/resultDetailsView.js";

export default function ResultDetails({ model }) {
	const [promise, setPromise] = React.useState(null);
	const id = useModelProp(model, "drinkdetails");
	//React.useEffect(() => setPromise(EdamamSource.searchIngredient("")), []); // needs to be run to set the promise
	//const [data, error] = usePromise(promise);
	React.useEffect(() => setPromise(CocktailSource.idGetCocktail(id)), [id]);
	const [drink, error] = usePromise(promise);
	const alcoholic = undefined;

	return (
		promiseNoData(promise, drink, error) ||
		(console.log(drink),
		(
			<ResultDetailsView
				title={drink["strDrink"]}
				instructions={drink["strInstructions"]}
				glass={drink["strGlass"]}
				alcoholic={alcoholic}
			/>
		))
	);
}
