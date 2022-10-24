import NavBarView from "../view/NavBarView.js";
import useModelProp from "../utils/useModelProp.js";
import React from "react";



export default function NavBar(props) {
    const loggedIn = useModelProp(props.model, "isAuth");

    function logOut() {
        props.model.logOut();
    }

    return (<NavBarView isLoggedIn={loggedIn} logOut={() => logOut()} />)



}



