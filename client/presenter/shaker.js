import React from "react";
import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "../utils/usePromise.js";
import ShakerView from "../view/shakerView.js";
import IngShakerView from "../view/ingShakerView.js";
// import { useDropzone } from 'react-dropzone'

function Shaker() {
	return (
		<ShakerView />
	)
};

export default Shaker;