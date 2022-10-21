import CreateElemListView from "../view/createElemListView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";


function CreateElemList({ model }) {
    // const [promise, setPromise] = React.useState(null);
    // React.useEffect(() => setPromise(CocktailSource.getIngredient("vodka")), []);
    // const [data, error] = usePromise(promise);
    const ingredients = useModelProp(model, "currentdrink");

    return ingredients.map((ing) => (
        <CreateElemListView ingredient={ing} />
    ));
}

export default CreateElemList;