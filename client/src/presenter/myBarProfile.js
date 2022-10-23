import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import "../utils/css/drinkResults.css";
import MyBarProfileElemView from "../view/myBarProfileElemView.js";

function MyBarProfile({ model }) {
    const shakering = useModelProp(model, "mybar");

    return (<React.Fragment><MyBarView />,
        <div className="barRow">{
            shakering.map((element) => (
                <MyBarProfileElemView barIng={element} onRemove={(element) => model.removeElemBar(element)} />
            ))}
        </div></React.Fragment>);
}

export default MyBarProfile;
