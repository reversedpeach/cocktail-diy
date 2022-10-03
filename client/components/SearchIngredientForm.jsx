import React, { useState, useEffect } from "react";
import Select from "react-select";

import "../utils/css/searchIngredientForm.css";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

export default function SearchIngredientForm({ props }) {
	const [selectedOption, setSelectedOption] = useState(null);

	useEffect(() => {
		console.log(selectedOption);
		//TODO: interact betweent the searching form and models
	}, [selectedOption]);

	return (
		<div className="searchIngredientForm">
			<Select value={selectedOption} options={options} onChange={setSelectedOption} isMulti={true} />
		</div>
	);
}
