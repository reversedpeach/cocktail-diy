import React, { useState, useEffect } from "react";
import { usePromise, promiseNoData } from "../utils/usePromise.js";
import CocktailSource from "../cocktailApi.js";

import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import ResultDetailsView from "../view/resultDetailsView.js";

export default function ResultDetails({ model }) {
    const [promise, setPromise] = React.useState(null);
    const id = useModelProp(model, "drinkdetails");
    const likeddrinks = useModelProp(model, "likeddrinks");
    useEffect(() => { setPromise(CocktailSource.idGetCocktail(id)) }, [id]);
    const [drink, error] = usePromise(promise);
    const alcoholic = undefined;
    let recipe = [];
    var liked = "LIKE";

    if (drink !== null) {
        for (let i = 1; i < 16; i++) {
            if (drink["strIngredient" + i] !== null) {
                recipe.push({ ingredient: drink["strIngredient" + i], amount: drink["strMeasure" + i] });
            }
        }
        if (likeddrinks.includes(drink["strDrink"])) { liked = "LIKED" } else { liked = "LIKE" }
    }

    function checkLike(likeddrinks) {
        if (likeddrinks.includes(drink["strDrink"])) { return "LIKED" } else { return "LIKE" }
    }
    return (drink !== null ?
        <ResultDetailsView
            title={drink["strDrink"]}
            ingredients={recipe}
            instructions={drink["strInstructions"]}
            image={drink["strDrinkThumb"]}
            glass={drink["strGlass"]}
            alcoholic={drink["strAlcoholic"]}
            endDetails={() => model.setDetails(null)}
            likeStatus={checkLike(likeddrinks)}
            onLike={() => model.addLikedDrink(drink["strDrink"])} /> : promiseNoData(promise, drink, error));
}
