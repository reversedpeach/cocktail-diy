
import React from "react";
import useModelProp from "./useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "./usePromise.js";
import ShakerView from "../view/shakerView.js";
import IngShakerView from "../view/ingShakerView.js";
import { useDropzone } from 'react-dropzone'

function Shaker({ model }) {
   /*const [promise, setPromise] = React.useState(null); // Init with and empty promise because errors on line 10 otherwise
    React.useEffect(() => setPromise(CocktailSource.getImage("")), []);
    const [data, error] = usePromise(promise); 
*/
   const shakering = useModelProp(model, "currentdrink");

   return (<div className="shakerBox">
      <div className="ingCol" >
         {shakering.map(element =>
            <IngShakerView ing={element} onRemove={(remove) => model.removeIngShaker(remove)} />)
         }
      </div>
      <ShakerView />
   </div>)
};


export default Shaker;