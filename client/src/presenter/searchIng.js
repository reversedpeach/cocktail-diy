import React, { useState, useEffect } from "react";
import Select from "react-select";

import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import "../utils/css/drinkResults.css";

export default function SearchIng({ model, addIng }) {
	const IngList = useModelProp(model, "mybar");
	const shakering = useModelProp(model, "currentdrink");
	const [options, setOptions] = useState([]);
	const currentOptions = [];

	const [selectedOption, setSelectedOption] = useState(currentOptions);

	async function getAllIng() {
		const allIng = await CocktailSource.getAllIngredients();
		let op = [];
		for (const ing of allIng.drinks) {
			op = op.concat({ value: ing["strIngredient1"], label: ing["strIngredient1"] });
		}
		for (const curIng of shakering) {
			currentOptions = currentOptions.concat({ value: curIng, label: curIng });
		}
		setOptions(op);
		setSelectedOption(currentOptions);
	}

	function dic2arr(ingDic) {
		return ingDic[0]["value"];
	}

	useEffect(() => {
		getAllIng();
	}, []);

	useEffect(() => {
		setSelectedOption(currentOptions);
	}, [model["currentdrink"]]);

	return (
		<Select
			value={selectedOption}
			options={options}
			onChange={(e) => {
				addIng(dic2arr(e));
			}}
			isMulti={true}
		/>
	);
}
