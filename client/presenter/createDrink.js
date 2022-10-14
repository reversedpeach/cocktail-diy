import React from "react";
import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "../utils/usePromise.js";
import ShakerView from "../view/shakerView.js";
import IngShakerView from "../view/ingShakerView.js";
import CreateDrinkView from "../view/createDrinkView.js";
// import { useDropzone } from 'react-dropzone'

function CreateDrink() {

    return <CreateDrinkView startCreate={console.log("START")} />
};

export default CreateDrink;