
import React, { useContext, useEffect, useState } from "react";
import CommunityView from "../view/communityView.js";
import ResultListView from "../view/resultListView.js";
import { gql, useLazyQuery, useQuery } from "@apollo/client";


const GET_DRINKS = gql`
    query getDrinks($community: Boolean, $ingredients: [String]) {
        getDrinks(community: $community, ingredients: $ingredients) {
            name
			id
			img
        }
    }
`;

export default function Community(props) {
	const [drinks, setDrinks] = useState([]);
	const [getDrinks, { data, loading, error }] = useLazyQuery(GET_DRINKS, { onCompleted: (data) => { console.log("Recieved: ", data.getDrinks); setDrinks(data.getDrinks) } });//{ onCompleted: (data) => { console.log("Recieved: ", data.getDrinks); setDrinks(data.getDrinks) } }

	useEffect(() => {
		if (data) {
			setDrinks(data.getDrinks);
		}
	}, [data]);

	useEffect(() => {
		getDrinks({
			variables: {
				community: true,
				ingredients: [],
			}
		});
	}, []);


	return !loading ? (
		drinks.map((drink) => {
			return (
				<ResultListView
					image={drink.img}
					title={drink.name}
					id={drink.id}
					setDetails={() => props.model.setDetails(drink.id)}
				/>
			);
		})
	) : (
		<p>Loading...</p>
	);
}


/*
export default function Community(props) {
	return <CommunityView model={props.model} users={props.users} setShowCom={props.setShowCom} />;
}*/
