import React, { useState, useEffect } from "react";

import useModelProp from "../utils/useModelProp.js";

import MyProfileView from "../view/myProfileView.js";
import CocktailSource from "../cocktailApi.js";

export default function MyProfile({ model }) {
	const favoritedrinks = useModelProp(model, "favoritedrinks");
	const likeddrinks = useModelProp(model, "likeddrinks");
	const recentdrinks = useModelProp(model, "recentdrinks");
	const following = useModelProp(model, "following");
	const users = useModelProp(model, "users");
	const madedrinks = useModelProp(model, "userdrinks");
	const mybar = useModelProp(model, "mybar");
	const [allIng, setAllIng] = useState([]);
	const [allUsers, setUsers] = useState([]);

	async function getAllIng() {
		const allIngList = await CocktailSource.getAllIngredients();

		let op = [];
		for (const ing of allIngList.drinks) {
			op = op.concat({ value: ing["strIngredient1"], label: ing["strIngredient1"] });
		}
		setAllIng(op);
		let t = [];
		for (const user of users) {
			t = t.concat({ value: user, label: user });
		}
		setUsers(t);
	}

	useEffect(() => {
		getAllIng();
	}, []);

	return (
		<MyProfileView
			model={model}
			favoritedrinks={favoritedrinks}
			likeddrinks={likeddrinks}
			recentdrinks={recentdrinks}
			following={following}
			madedrinks={madedrinks}
			allIng={allIng}
			allUsers={allUsers}
		/>
	);
}
