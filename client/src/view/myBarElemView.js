import { OnDeviceTraining } from "@mui/icons-material";
import React from "react";

const MyBarElemView = ({ barIng, onAdd, onDrag }) => {
        return <div className="barCol">
                <input draggable="true" onDragEnd={() => onAdd(barIng)} className="barImage" type="image" src={"https://www.thecocktaildb.com/images/ingredients/" + barIng + "-Small.png"} onClick={() => onAdd(barIng)} />
                <span>{barIng}</span>
        </div>


};

export default MyBarElemView;