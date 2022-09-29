import React from "react";

const MyBarElemView = ({barIng, onAdd}) => {
    //const [text, setText]= React.useState("");
        return   <div>
                        <input className="barImage" type="image" src = {"https://www.thecocktaildb.com/images/ingredients/"  + barIng + "-Small.png"} onClick = {() => onAdd(barIng)} />
                </div>

};

export default MyBarElemView;