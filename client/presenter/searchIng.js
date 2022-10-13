import React, { useState, useEffect } from "react";
import Select from "react-select";

import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";

export default function SearchIng({ model, setIng }) {
	const IngList = useModelProp(model, "mybar");
	const shakering = useModelProp(model, "currentdrink");
	const options = [];
	const currentOptions = [];

	for (const ing of IngList) {
		options.push({ value: ing, label: ing });
	}
	for (const curIng of shakering) {
		currentOptions.push({ value: curIng, label: curIng });
	}
	const [selectedOption, setSelectedOption] = useState(currentOptions);

	function dic2arr(ingDic) {
		const ingList = [];
		for (const value of ingDic) {
			ingList.push(value["value"]);
		}
		// console.log(ingList);
		return ingList;
	}

	useEffect(() => {
		setSelectedOption(currentOptions);
	}, [model["currentdrink"]]);

	return (
		<Select
			value={selectedOption}
			options={options}
			onChange={(e) => {
				setSelectedOption(e);
				setIng(dic2arr(e));
			}}
			isMulti={true}
		/>
	);
}
