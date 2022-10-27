import React from "react";
import useModelProp from "../utils/useModelProp.js";
import IngShakerView from "../view/ingShakerView.js";

function IngShaker({ model }) {
    const shakering = useModelProp(model, "currentdrink");

    return (shakering.map((element) => (
        <IngShakerView ing={element} onRemove={(remove) => model.removeIngShaker(remove)} />
    ))
    );
}

export default IngShaker;