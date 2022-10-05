import React from "react";
import useModelProp from "./useModelProp.js";

import DrinkResultView from "../view/drinkResultView.js";

export default function DrinkResult({ model }) {
	const globalModel = useModelProp(model);
	return (
		<div>
			<DrinkResultView model={model} onAdd={(add) => model.addIngShaker(add)} />
		</div>
	);
}
