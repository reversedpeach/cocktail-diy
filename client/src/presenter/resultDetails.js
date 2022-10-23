import React, { useState, useEffect } from "react";
import { usePromise, promiseNoData } from "../utils/usePromise.js";
import CocktailSource from "../cocktailApi.js";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import ResultDetailsView from "../view/resultDetailsView.js";

export const GET_DRINK = gql`
    query getDrink(
        $community: Boolean
        $getDrinkId: String
    ){
        getDrink(
            community: $community
            id: $getDrinkId
        ){
            name
            ingredients{
                name
                measurement
            }
            img
            instructions
            glass
            type
        }
    }
`;

export default function ResultDetails({ model }) {
    const id = useModelProp(model, "drinkdetails");

    var liked = "LIKE";

    const communityDrink = useModelProp(model, "communityDrink");
    const [drink, setDrink] = useState({});
    const [getDrinkDetails, { data, loading, error }] = useLazyQuery(GET_DRINK, { onCompleted: (data) => { console.log("recieved: ", data.getDrink, "ingreds: ", data.getDrink.ingredients); setDrink(data.getDrink) } });
    function checkLike(likeddrinks) {
        if (likeddrinks.includes(drink["strDrink"])) { return "LIKED" } else { return "LIKE" }
    }


    useEffect(() => {
        console.log("id is: ", id);
        if (id) {
            getDrinkDetails({
                variables: {
                    getDrinkId: id,
                    community: communityDrink
                }
            })
        }}, [id]);

    if (!loading) {
        console.log("error:", error);
        console.log("data: ", data);
    }

    return (!loading && data ?
        <ResultDetailsView
            title={data.getDrink.name}
            ingredients={data.getDrink.ingredients}
            instructions={data.getDrink.instructions}
            image={data.getDrink.img}
            glass={drink.glass}
            alcoholic={drink.type}
            endDetails={() => model.setDetails(null, null)} 
            likeStatus={checkLike(likeddrinks)}
            onLike={() => model.addLikedDrink(drink["strDrink"])}/> : <p>Loading...</p>);

}
