import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import useModelProp from "../utils/useModelProp.js";

import MyProfileView from "../view/myProfileView.js";
import CocktailSource from "../cocktailApi.js";

const GET_ALL_INGREDIENTS = gql`
	query Query{
		getAllIngredients
	}
`;


export default function MyProfile(props) {
	const favoritedrinks = useModelProp(props.model, "favoritedrinks");
	const likeddrinks = useModelProp(props.model, "likeddrinks");
	const recentdrinks = useModelProp(props.model, "recentdrinks");
	const following = useModelProp(props.model, "following");
	const users = useModelProp(props.model, "users");
	const madedrinks = useModelProp(props.model, "userdrinks");
	const mybar = useModelProp(props.model, "mybar");
	const seeingUsername = useModelProp(props.model, "seeingUsername");
	const [allIng, setAllIng] = useState([]);
	const [allUsers, setUsers] = useState([]);
	const [showSearchingForm, setShow] = useState(false);
	const [showSearchingFriend, setFriend] = useState(false);
	const [selectedIngOptions, setSelectedIngOptions] = useState([]);
	const [followButton, setFollow] = useState(false);
	const [getAllIngredients, { data, loading, error }] = useLazyQuery(GET_ALL_INGREDIENTS, { onCompleted: (data) => { console.log(data); setAllIng(data.getAllIngredients) } });//


	/*async function getAllIng() {
		const allIngList = await CocktailSource.getAllIngredients();
		console.log(allIngList);
		let op = [];
		for (const ing of allIngList.drinks) {
			op = op.concat({ value: ing["strIngredient1"], label: ing["strIngredient1"] });
		}
		console.log(op);
		setAllIng(op);
		let t = [];
		for (const user of users) {
			t = t.concat({ value: user, label: user });
		}
		setUsers(t);
		props.model.seeingUsername = "";
	}*/


	useEffect(() => {

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
			seeingUsername={seeingUsername}
			setShow={setShow}
			setFriend={setFriend}
			setShowCom={props.setShowCom}
			addMyBar={(e) => {
				props.model.addMyBar(e);
			}}
			addFollowing={(e) => {
				props.model.addFollowing(e);
			}}
		/>
	);
}
