import React, { useContext, useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import "../utils/css/drinkResults.css";
import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import ResultListView from "../view/resultListView.js";



const GET_DRINKS = gql`
    query getDrinks($community: Boolean, $ingredients: [String]) {
        getDrinks(community: $community, ingredients: $ingredients) {
            name
			id
			img
			external
        }
    }
`;



export default function ResultsList({ model }) {
	const shakering = useModelProp(model, "currentdrink");
	const [drinks, setDrinks] = useState([""]);
	const [getDrinks, { data, loading, error }] = useLazyQuery(GET_DRINKS, { fetchPolicy: 'network-only', onCompleted: (data) => { console.log("Recieved: ", data.getDrinks); setDrinks(data.getDrinks) } });


	useEffect(() => {
		console.log(model["currentdrink"]);
		console.log("ingredients: ", shakering);
		getDrinks({
			variables: {
				community: false,
				ingredients: shakering,
			}
		});
	}, [shakering]);

	if (error) {
		console.log(error);
	}

	if (drinks.length === 0) {
		return (<p>No results</p>)
	}

	function setDetails(drink) {
		console.log("Setting details with: ", drink);
		model.setDetails(drink.id, drink.external);
	}

	return !loading ? (
		drinks.map((drink) => {
			//console.log(drink)
			return (
				<ResultListView
					image={drink.img}
					title={drink.name}
					id={drink.id}
					external={drink.external}
					setDetails={() => { console.log("2 setting details with: ", drink); setDetails(drink) }}
				/>
			);
		})
	) : (
		<p>Loading...</p>
	);
}
