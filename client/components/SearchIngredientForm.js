import React, { useState, useEffect } from "react";
import Select from "react-select";

import useModelProp from "../presenter/useModelProp.js";
import "../utils/css/drinkResults.css";

export default function SearchIngredientForm({ model, onAdd }) {
	const IngList = useModelProp(model, "mybar");
	const shakering = useModelProp(model, "currentdrink");
	const options = [];
	for (const ing of IngList) {
		options.push({ value: ing, label: ing });
	}
	const currentOptions = [];
	for (const curIng of shakering) {
		currentOptions.push({ value: curIng, label: curIng });
	}
	const [selectedOption, setSelectedOption] = useState(currentOptions);

	useEffect(() => {
		setSelectedOption(currentOptions);
	}, [model["currentdrink"]]);

	return (
		<div className="searchIngredientForm">
			<Select
				value={selectedOption}
				options={options}
				onChange={(e) => {
					setSelectedOption(e);
					onAdd(e[e.length - 1]["value"]);
				}}
				isMulti={true}
			/>
		</div>
	);
}
