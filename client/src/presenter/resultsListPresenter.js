import React, { useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import useModelProp from "../utils/useModelProp.js";

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
	const [getDrinks, { data, loading, error }] = useLazyQuery(GET_DRINKS, { fetchPolicy: 'network-only', onCompleted: (data) => { setDrinks(data.getDrinks) } });


	useEffect(() => {
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
		model.setDetails(drink.id, drink.external);
	}

	return !loading ? (
		drinks.map((drink, index) => {
			return (
				<ResultListView
					key={index}
					image={drink.img}
					title={drink.name}
					id={drink.id}
					external={drink.external}
					setDetails={() => { setDetails(drink) }}
				/>
			);
		})
	) : (
		<p>Loading...</p>
	);
}
