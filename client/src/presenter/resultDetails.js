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
    const likeddrinks = useModelProp(model, "likeddrinks");
    const [drink, setDrink] = useState({});
    const [getDrinkDetails, { data, loading, error }] = useLazyQuery(GET_DRINK, { onCompleted: (data) => { console.log("recieved: ", data.getDrink, "ingreds: ", data.getDrink.ingredients); setDrink(data.getDrink) } });
    function checkLike(likeddrinks) {
        if (likeddrinks.includes(drink.name)) { return "LIKED" } else { return "LIKE" }
    }


    useEffect(() => {
        if (id) {
            getDrinkDetails({
                variables: {
                    getDrinkId: id,
                    community: communityDrink
                }
            })
        }
    }, [id]);

    if (!loading) {
        console.log("error:", error);
        console.log("data: ", data);
    }

    function likeDrink(drink) {
        model.addLikedDrink(drink)
        saveLikedDrinksToServer()
    }

    return (!loading && data ?
        <ResultDetailsView
            title={data.getDrink.name}
            ingredients={data.getDrink.ingredients}
            instructions={data.getDrink.instructions}
            image={data.getDrink.img}
            glass={data.getDrink.glass}
            alcoholic={data.getDrink.type}
            endDetails={() => model.setDetails(null, null)}
            likeStatus={checkLike(likeddrinks)}
            like={() => likeDrink(data.getDrink.name)}
            unlike={() => unlikeDrink()} /> : <p>Loading...</p>);

}
