import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import MyBarNoIngView from "../view/myBarNoIngView.js";

function MyBar({ model }) {
	const shakering = useModelProp(model, "mybar");

	return (
		<React.Fragment>
			<MyBarView />
			<div className="barRow">{
				shakering.length > 0 ?
					shakering.map((element) => (
						<MyBarElemView barIng={element[0].toUpperCase() + element.slice(1)} onAdd={(element) => model.addIngShaker(element[0].toUpperCase() + element.slice(1))} />
					)) : <MyBarNoIngView />}
			</div>
		</React.Fragment>);
}

export default MyBar;
