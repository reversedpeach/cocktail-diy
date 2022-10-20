import React, { useState, useEffect } from "react";

import useModelProp from "../utils/useModelProp.js";

import MyProfileView from "../view/myProfileView.js";
import CocktailSource from "../cocktailApi.js";

export default function MyProfile(props) {
	const favoritedrinks = useModelProp(props.model, "favoritedrinks");
	const likeddrinks = useModelProp(props.model, "likeddrinks");
	const recentdrinks = useModelProp(props.model, "recentdrinks");
	const following = useModelProp(props.model, "following");
	const users = useModelProp(props.model, "users");
	const madedrinks = useModelProp(props.model, "userdrinks");
	const mybar = useModelProp(props.model, "mybar");
	const [allIng, setAllIng] = useState([]);
	const [allUsers, setUsers] = useState([]);
	const [showSearchingForm, setShow] = useState(false);
	const [showSearchingFriend, setFriend] = useState(false);
	const [selectedIngOptions, setSelectedIngOptions] = useState([]);
	const [followButton, setFollow] = useState(false);

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
		props.model.seeingUsername = "";
	}

	useEffect(() => {
		getAllIng();
	}, []);

	return (
		<MyProfileView
			model={props.model}
			favoritedrinks={favoritedrinks}
			likeddrinks={likeddrinks}
			recentdrinks={recentdrinks}
			following={following}
			madedrinks={madedrinks}
			allIng={allIng}
			allUsers={allUsers}
			showSearchingForm={showSearchingForm}
			showSearchingFriend={showSearchingFriend}
			selectedIngOptions={selectedIngOptions}
			followButton={followButton}
			setshow={setShow}
			setFriend={setFriend}
			setShowCom={props.setShowCom}
		/>
	);
}
