import React, { useState, useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import useModelProp from "../utils/useModelProp.js";
import ResultDetailsView from "../view/resultDetailsView.js";

const GET_DRINK = gql`
    query getDrink(
        $community: Boolean
        $getDrinkId: String
    ){
        getDrink(
            community: $community
            id: $getDrinkId
        ){
            id
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

const CHANGE_LIKED_DRINKS = gql`
    mutation ChangeLikedDrinks(
        $drinkId: String!
        $add:Boolean
    ) {
        changeLikedDrinks(
            drinkID: $drinkId
            add:$add
        )
    }   
`;


export default function ResultDetails({ model }) {
    const id = useModelProp(model, "drinkdetails");
    const communityDrink = useModelProp(model, "communityDrink");
    const likedDrinks = useModelProp(model, "likeddrinks");
    const [liked, setLiked] = useState(false);
    //const [drink, setDrink] = useState(null);
    const [getDrinkDetails, { data, loading, error }] = useLazyQuery(GET_DRINK);
    const [changeLikedDrinks, { likedData, likedLoading, likedError }] = useMutation(CHANGE_LIKED_DRINKS);


    function isLiked(drink) {
        return likedDrinks.includes(drink);
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

    useEffect(() => {
        if (!loading && data) {
            if (isLiked(data.getDrink.name)) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        }
    }, [data]);

    function likeDrink(drink) {
        const updated = model.addLikedDrink(drink)
        if (updated) {
            setLiked(true);
            saveLikedDrinksToServer(drink, true)
        }
    }

    function saveLikedDrinksToServer(drink, add) {
        changeLikedDrinks({
            variables: { drinkId: drink, add: add }
        })
    }

    function unlikeDrink(drink) {
        const updated = model.removeLikedDrink(drink)
        if (updated) {
            setLiked(false);
            saveLikedDrinksToServer(drink, false)
        }
    }

    if (likedError) {
        console.log(likedError);
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
            liked={liked}
            like={() => likeDrink(data.getDrink.name)}
            unlike={() => unlikeDrink(data.getDrink.name)} /> : <p>Loading...</p>);
}
