import React from "react";
import useModelProp from "../utils/useModelProp.js";
import ToggleModeView from "../view/toggleModeView.js";


function ToggleMode({ model }) {
    const mode = useModelProp(model, "selectedmode");
    return (
        <ToggleModeView
            currentMode={mode}
            changeMode={() => model.setMode()}
        />
    )
};

export default ToggleMode;