import MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "../utils/useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "../utils/usePromise.js";
import "../utils/css/drinkResults.css";

function MyBar({ model }) {
      // const [promise, setPromise] = React.useState(null);
      // React.useEffect(() => setPromise(CocktailSource.getIngredient("vodka")), []);
      // const [data, error] = usePromise(promise);
      const shakering = useModelProp(model, "mybar");

      return <MyBarView />;
}

<<<<<<< HEAD
export default MyBar;
=======
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
>>>>>>> aa132e6ebcdb3910a673c7a5c8855b8b2a68867a
