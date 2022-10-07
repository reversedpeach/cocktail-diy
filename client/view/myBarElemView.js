import React from "react";

const MyBarElemView = ({ barIng, onAdd }) => {
        return <div className="barCol">
                <input className="barImage" type="image" src={"https://www.thecocktaildb.com/images/ingredients/" + barIng + "-Small.png"} onClick={() => onAdd(barIng)} />
                <span>{barIng}</span>
        </div>

};

export default MyBarElemView;