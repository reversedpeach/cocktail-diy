import React from "react";
import CreateElemList from "./createElemList.js";
import CreateTitle from "./createTitle.js";
import CreateInstruc from "./createInstruc.js";
import CreateSave from "./createSave.js";

function CreateDrink({ model }) {
    // const newdrink = useModelProp(model, "createddrink");


    return (
        <CreateElemList model={model} />)
};

export default CreateDrink;