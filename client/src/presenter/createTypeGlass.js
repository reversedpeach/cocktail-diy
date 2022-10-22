import React from "react";
import CreateTypeGlassView from "../view/createTypeGlassView.js";
import { usePromise } from "../utils/usePromise.js";
import CocktailSource from "../cocktailApi.js";

function CreateGlass() {
    const [promiseGlass, setPromiseGlass] = React.useState(null);
    React.useEffect(() => setPromiseGlass(CocktailSource.getAllGlasses()), []);
    const [glass, err1] = usePromise(promiseGlass);
    const glasses = [];


    if (glass !== null) {
        for (let i = 0; i < glass.length; i++) {
            if (glass["strGlass"] !== null) {
                glasses.push(glass[i]["strGlass"]);
            }
        }
    }



    return glasses.map((glass) => (
        <CreateTypeGlassView element={glass} />
    ));
}

export default CreateGlass;