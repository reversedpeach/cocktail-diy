
import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "./useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "./usePromise.js";

function MyBar({ model }) {
      const [promise, setPromise] = React.useState(null);
      React.useEffect(() => setPromise(CocktailSource.getIngredient("vodka")), []);
      const [data, error] = usePromise(promise);

      console.log("ingrediens: " + JSON.stringify(data));

      const shakering = useModelProp(model, "mybar");

      return (<div className="barBox">
            <MyBarView />
            <div className="barShelf">
                  <div className="barRow" >
                        {shakering.map(element =>
                              <MyBarElemView barIng={element} onAdd={(add) => model.addIngShaker(add)} />)
                        }
                  </div>
            </div>

      </div>)
};


export default MyBar;