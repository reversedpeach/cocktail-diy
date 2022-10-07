import React from "react";
import "../utils/css/drinkResults.css";

import SearchIngredientForm from "../components/SearchIngredientForm.js";
import DrinkResultsList from "../components/DrinkResultsList.js";

export default function DrinkResultView({ model, onAdd }) {
	return (
		<div className="drinkresults">
			<DrinkResultsList model={model} />
			<SearchIngredientForm
				model={model}
				onAdd={(add) => {
					onAdd(add);
				}}
			/>
		</div>
	);
}
