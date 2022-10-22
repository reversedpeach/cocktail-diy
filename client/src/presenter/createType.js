import React from "react";
import CreateTypeGlassView from "../view/createTypeGlassView.js";
import { usePromise } from "../utils/usePromise.js";
import CocktailSource from "../cocktailApi.js";

function CreateType() {

    const [promiseType, setPromiseType] = React.useState(null);
    React.useEffect(() => setPromiseType(CocktailSource.getAllTypes()), []);
    const [type, err2] = usePromise(promiseType);
    const types = [];

    if (type !== null) {
        for (let i = 0; i < type.length; i++) {
            if (type["strAlcoholic"] !== null) {
                types.push(type[i]["strAlcoholic"]);
            }
        }
    }

    return types.map((type) => (
        <CreateTypeGlassView element={type} />
    ));
}

export default CreateType;