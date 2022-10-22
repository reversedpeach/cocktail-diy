import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";

function MyBar({ model }) {
	const shakering = useModelProp(model, "mybar");

	return <MyBarView />;
}

export default MyBar;
