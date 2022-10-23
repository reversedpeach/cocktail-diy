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
        }
    }
`;



export default function ResultsList({ model }) {
	const shakering = useModelProp(model, "currentdrink");
	const [drinks, setDrinks] = useState([""]);
	const [getDrinks, { data, loading, error }] = useLazyQuery(GET_DRINKS, { onCompleted: (data) => { console.log("Recieved: ", data.getDrinks); setDrinks(data.getDrinks) } });


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

	return !loading ? (
		drinks.map((drink) => {
			return (
				<ResultListView
					image={drink.img}
					title={drink.name}
					id={drink.id}
					setDetails={() => model.setDetails(drink["idDrink"])}
				/>
			);
		})
	) : (
		<p>Loading...</p>
	);
}
