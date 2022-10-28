import React from "react";
import useModelProp from "../utils/useModelProp.js";
import StartScreenView from "../view/startScreenView.js";
import HomePageView from "../view/homePageView.js";



export default function HomePage({ model }) {
    const showDetails = useModelProp(model, "drinkdetails");
    const showResult = useModelProp(model, "currentdrink");
    const currentMode = useModelProp(model, "selectedmode");
    const loggedIn = useModelProp(model, "isAuth");

    return (
        <div className="discoverBox" >
            {loggedIn == ! false ? <HomePageView model={model} showDetails={showDetails} showResult={showResult} currentMode={currentMode} /> : <StartScreenView />}
        </div>
    );
}

