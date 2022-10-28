import React from "react";
import useModelProp from "../utils/useModelProp.js";
import MyBarHomeView from "../view/myBarHomeView.js";

function MyBar({ model }) {
	const shakering = useModelProp(model, "mybar");

	return (<MyBarHomeView shakering={shakering} onAdd={(element) => model.addIngShaker(element[0].toUpperCase() + element.slice(1))} />)
}

export default MyBar;
