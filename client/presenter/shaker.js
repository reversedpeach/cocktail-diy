import React from "react";
import useModelProp from "./useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "./usePromise.js";
import ShakerView from "../view/shakerView.js";
import IngShakerView from "../view/ingShakerView.js";
// import { useDropzone } from 'react-dropzone'

function Shaker({ model }) {
	const shakering = useModelProp(model, "currentdrink");

	return (
		<div className="shakerBox">
			<div className="ingCol">
				{shakering.map((element) => (
					<IngShakerView ing={element} onRemove={(remove) => model.removeIngShaker(remove)} />
				))}
			</div>
			<ShakerView />
		</div>
	);
}

export default Shaker;
