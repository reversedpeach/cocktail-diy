import React from "react";
import useModelProp from "../utils/useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import "../utils/css/drinkResults.css";

function MyBarElem({ model }) {
    const shakering = useModelProp(model, "mybar");
    return shakering.map((element) => (
        <MyBarElemView barIng={element} onAdd={(element) => model.addIngShaker(element)} onDrag={(ev) => ev.dataTransfer.setData("text", element)} />
    ));
}

export default MyBarElem;
