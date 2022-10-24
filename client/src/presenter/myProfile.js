import React, { useState, useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import useModelProp from "../utils/useModelProp.js";
import MyProfileView from "../view/myProfileView.js";
import CocktailSource from "../cocktailApi.js";

const GET_ALL_INGREDIENTS = gql`
	query Query{
		getAllIngredients
	}
`;

const CHANGE_MY_BAR_MUTATION = gql`
    mutation ChangeMyBar($newMyBar: [String]) {
        changeMyBar(newMyBar: $newMyBar)
    }
`;

const GET_USER_DETAILS = gql`
    query getUser(
        $getUserId:String
    ){
        getUser(
           id: $getUserId
        ){
            name
            myBar
			createdDrinks{
				name
				id
				img
			}
			likedDrinks{
				name
				img
				id
			}
        }
    }
`;


export default function MyProfile(props) {
	const loggedIn = useModelProp(props.model, "isAuth");
	const id = useModelProp(props.model, "userID");
	const favoritedrinks = useModelProp(props.model, "favoritedrinks");
	//const likeddrinks = useModelProp(props.model, "likeddrinks");
	const recentdrinks = useModelProp(props.model, "recentdrinks");
	const following = useModelProp(props.model, "following");
	const users = useModelProp(props.model, "users");
	//const madedrinks = useModelProp(props.model, "userdrinks");
	const myBar = useModelProp(props.model, "mybar");
	const seeingUsername = useModelProp(props.model, "seeingUsername");
	const [allIng, setAllIng] = useState([]);
	const [allUsers, setUsers] = useState([]);
	const [showSearchingForm, setShow] = useState(false);
	const [showSearchingFriend, setFriend] = useState(false);
	const [selectedIngOptions, setSelectedIngOptions] = useState([]);
	const [followButton, setFollow] = useState(false);
	const [madeDrinks, setMadeDrinks] = useState([]);
	const [likedDrinks, setLikedDrinks] = useState([]);
	const [getUserDetails, { data, loading, error }] = useLazyQuery(GET_USER_DETAILS, {
		onCompleted: (data) => {
			setMadeDrinks(data.getUser.createdDrinks);
			setLikedDrinks(data.getUser.likedDrinks);
		}
	});
	const [getAllIngredients, { ingData }] = useLazyQuery(GET_ALL_INGREDIENTS, {
		onCompleted: (data) => {
			const ingredientsArray = data.getAllIngredients;
			const ingredientDict = ingredientsArray.map((ingredient) => {
				return { value: ingredient, label: ingredient }
			})
			setAllIng(ingredientDict);
		}
	});
	const [changeMyBar, { myBarData, myBarLoading, myBarError }] = useMutation(CHANGE_MY_BAR_MUTATION);

	async function saveMyBarToServer(newBar) {
		changeMyBar({
			variables: {
				newMyBar: newBar
			},
		});
	}

	useEffect(() => {
		if (!loggedIn) {
			window.location.href = "/";
		}
	}, [loggedIn]);


	useEffect(() => {
		getAllIngredients();
		getUserDetails({ variables: { getUserId: id } });
	}, []);

	async function addToBar(selected) {
		props.model.addMyBar(selected);
		saveMyBarToServer(props.model.mybar);
	}

	return !loading ? (
		<MyProfileView
			model={props.model}
			favoritedrinks={favoritedrinks}
			likedDrinks={likedDrinks}
			recentdrinks={recentdrinks}
			following={following}
			madeDrinks={madeDrinks}
			allIng={allIng}
			allUsers={allUsers}
			showSearchingForm={showSearchingForm}
			showSearchingFriend={showSearchingFriend}
			selectedIngOptions={selectedIngOptions}
			followButton={followButton}
			seeingUsername={(seeingUsername[0].toUpperCase() + seeingUsername.slice(1))}
			setShow={setShow}
			setFriend={setFriend}
			setShowCom={props.setShowCom}
			addMyBar={addToBar}
			addFollowing={(e) => {
				props.model.addFollowing(e);
			}}
			myBarLength={myBar.length}
		/>
	) : (<div>loading...</div>);
}
