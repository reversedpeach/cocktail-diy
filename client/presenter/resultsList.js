import React, { useContext, useEffect, useState } from "react";
import testlogo from "../utils/images/ttest.png";
import "../utils/css/drinkResults.css";
import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import DrinkResultDetails from "./resultDetails.js";
import { promiseNoData, usePromise } from "../utils/usePromise.js";
import ResultListView from "../view/resultListView.js";

export default function ResultsList({ model }) {
	const shakering = useModelProp(model, "currentdrink");
	const [images, setImages] = useState([model["currentdrink"]]);
	//const [details, setDetails] = useState([model["drinkdetails"]]);
	let im = new Array();
	let searching;

	async function updateImages() {
		var query = "";
		for (var ing of shakering) {
			query += ing + ",";
		}
		query = query.slice(0, query.length - 1);
		//console.log(query);

		if (query != "") {
			im = new Array();
			const result = await CocktailSource.filterCocktail(query);
			im = result;
			setImages(im);
		}
	}

	useEffect(() => {
		searching = true;
		const result = updateImages();
		searching = false;
	}, [model["currentdrink"]]
	);

	return (!searching
		? images.map(function (drink, index) {
			//console.log(img);
			return (
				<ResultListView image={drink["strDrinkThumb"]} title={drink["strDrink"]} index={index} setDetails={() => (model.setDetails(drink["idDrink"]))} />
			)
		}) : <p></p>);
}

