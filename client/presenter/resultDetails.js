import React, { useState, useEffect } from "react";
import { usePromise, promiseNoData } from "../utils/usePromise.js";
import CocktailSource from "../cocktailApi.js";

import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import ResultDetailsView from "../view/resultDetailsView.js";

export default function ResultDetails({ model }) {
    const [promise, setPromise] = React.useState(null);
    const id = useModelProp(model, "drinkdetails");
    useEffect(() => { setPromise(CocktailSource.idGetCocktail(id)) }, [id]);
    const [drink, error] = usePromise(promise);
    console.log(drink);
    const alcoholic = undefined;
    let recipe = [];

    if (drink !== null) {
        for (let i = 1; i < 16; i++) {
            if (drink["strIngredient" + i] !== null) {
                recipe.push({ ingredient: drink["strIngredient" + i], amount: drink["strMeasure" + i] });
                console.log(recipe);
            }
        }
    }

    return (drink !== null ? <ResultDetailsView title={drink["strDrink"]} ingredients={recipe} instructions={drink["strInstructions"]} image={drink["strDrinkThumb"]} glass={drink["strGlass"]} alcoholic={drink["strAlcoholic"]} /> : promiseNoData(promise, drink, error));
}
