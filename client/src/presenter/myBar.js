import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import MyBarElemView from "../view/myBarElemView.js";

function MyBar({ model }) {
	const shakering = useModelProp(model, "mybar");

	return (<React.Fragment><MyBarView />,
		<div className="barRow">{
			shakering.map((element) => (
				<MyBarElemView barIng={element} onAdd={(element) => model.addIngShaker(element)} onDrag={(ev) => ev.dataTransfer.setData("text", element)} />
			))}
		</div></React.Fragment>);
}

export default MyBar;
