import CreateElemListView from "../view/createElemListView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import getFormData from "../utils/getFormData.js";

function CreateElemList({ model }) {
    const ingredients = useModelProp(model, "currentdrink");

    return ingredients.map((ing, index) => (
        <CreateElemListView ingredient={ing} id={"measurement" + (index + 1)} />
    ));
}

export default CreateElemList;