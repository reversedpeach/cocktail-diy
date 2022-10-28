import MyBarView from "../view/myBarView.js";
import React from "react";
import MyBarProfileElemView from "../view/myBarProfileElemView.js";


export default function MyBarProfileView(props) {
    return (
        <React.Fragment>
            <MyBarView />
            <div className="barRow">{
                props.myBar.map((element, index) => (
                    <MyBarProfileElemView key={index} barIng={element[0].toUpperCase() + element.slice(1)} onRemove={props.onRemove} />
                ))}
            </div>
        </React.Fragment>);
}