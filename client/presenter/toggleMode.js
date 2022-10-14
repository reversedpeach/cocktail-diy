import React from "react";
import useModelProp from "../utils/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "../utils/usePromise.js";
import ShakerView from "../view/shakerView.js";
import IngShakerView from "../view/ingShakerView.js";
import ToggleModeView from "../view/toggleModeView.js";


function ToggleMode({ model }) {
    const mode = useModelProp(model, "selectedmode");
    return (
        <ToggleModeView currentMode={mode} changeMode={() => model.setMode()} />
    )
};

export default ToggleMode;