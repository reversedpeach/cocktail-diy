import React from "react";
import useModelProp from "../utils/useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import "../utils/css/drinkResults.css";

function MyBarElem({ model }) {
    // const [promise, setPromise] = React.useState(null);
    // React.useEffect(() => setPromise(CocktailSource.getIngredient("vodka")), []);
    // const [data, error] = usePromise(promise);
    const shakering = useModelProp(model, "mybar");

    return shakering.map((element) => (
        <MyBarElemView barIng={element} onAdd={(add) => model.addIngShaker(add)} />
    ));
}

export default MyBarElem;
