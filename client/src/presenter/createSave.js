import React from "react";
import CreateSaveView from "../view/createSaveView.js";
import getFormData from "../utils/getFormData.js";
import useModelProp from "../utils/useModelProp.js";

function CreateSave({ model }) {
    const ingredients = useModelProp(model, "currentdrink");

    function saveData() {
        for (let i = 0; i < ingredients.length; i++) {
            model.addIngredientsDrink(ingredients[i]);
            const measurement = getFormData("measurement" + (i + 1));
            model.addMeasurementsDrink(measurement);
        }
        model.addInstructionsDrink(getFormData("instructions"));

        //need to empty object afterwards
    }
    return <CreateSaveView startCreate={() => saveData()} />
}

export default CreateSave;