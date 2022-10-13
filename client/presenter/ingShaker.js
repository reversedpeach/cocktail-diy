import React from "react";
import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "../utils/usePromise.js";
import ShakerView from "../view/shakerView.js";
import IngShakerView from "../view/ingShakerView.js";
// import { useDropzone } from 'react-dropzone'

function IngShaker({ model }) {
    const shakering = useModelProp(model, "currentdrink");

    return (shakering.map((element) => (
        <IngShakerView ing={element} onRemove={(remove) => model.removeIngShaker(remove)} />
    ))
    );
}

export default IngShaker;