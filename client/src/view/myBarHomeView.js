import React from "react";
import MyBarView from "../view/myBarView.js";

import MyBarElemView from "../view/myBarElemView.js";
import MyBarNoIngView from "../view/myBarNoIngView.js";


export default function MyBarHomeView(props) {

    return (
        <React.Fragment>
            <MyBarView />
            <div className="barRow">{
                props.shakering.length > 0 ?
                    props.shakering.map((element, index) => (
                        <MyBarElemView key={index} barIng={element[0].toUpperCase() + element.slice(1)} onAdd={props.onAdd} />
                    )) : <MyBarNoIngView />}
            </div>
        </React.Fragment>);
}