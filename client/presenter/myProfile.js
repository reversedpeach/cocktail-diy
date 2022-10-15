import React, { useState, useEffect } from "react";

import CocktailSource from "../cocktailApi.js";

import useModelProp from "../utils/useModelProp.js";

import MyProfileView from "../view/myProfileView.js";

export default function MyProfile({ model }) {
	const favoritedrinks = useModelProp(model, "favoritedrinks");
	const likeddrinks = useModelProp(model, "likeddrinks");
	const recentdrinks = useModelProp(model, "recentdrinks");
	const mybar = useModelProp(model, "mybar");
	const [allIng, setAllIng] = useState([]);

	async function getAllIng() {
		const allIng = await CocktailSource.getAllIngredients();
		// for (const bar of mybar) {
		// 	if (allIng.indexOf(bar) != -1) {

		// 	}
		// }
		setAllIng(allIng["drinks"]);
	}

	function getStyles(name, personName, theme) {
		return {
			fontWeight:
				personName.indexOf(name) === -1
					? theme.typography.fontWeightRegular
					: theme.typography.fontWeightMedium,
		};
	}

	const handleChange = (event, setIngList) => {
		const {
			target: { value },
		} = event;
		setIngList(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	useEffect(() => {
		getAllIng();
	}, []);

	return (
		<MyProfileView
			model={model}
			favoritedrinks={favoritedrinks}
			likeddrinks={likeddrinks}
			recentdrinks={recentdrinks}
			allIng={allIng}
			getStyles={getStyles}
			handleChange={handleChange}
		/>
	);
}
