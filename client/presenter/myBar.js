import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "../utils/usePromise.js";
import "../utils/css/drinkResults.css";

function MyBar({ model }) {
	// const [promise, setPromise] = React.useState(null);
	// React.useEffect(() => setPromise(CocktailSource.getIngredient("vodka")), []);
	// const [data, error] = usePromise(promise);
	const shakering = useModelProp(model, "mybar");

	return <MyBarView />;
}

export default MyBar;
