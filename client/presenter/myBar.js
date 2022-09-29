
import  MyBarView from "../view/myBarView.js";
import React from "react";
import useModelProp from "./useModelProp.js";
import MyBarElemView from "../view/myBarElemView.js";
import CocktailSource from "../cocktailApi.js";
import { usePromise } from "./usePromise.js";

function MyBar({model}) {
   /*const [promise, setPromise] = React.useState(null); // Init with and empty promise because errors on line 10 otherwise
    React.useEffect(() => setPromise(CocktailSource.getImage("")), []);
    const [data, error] = usePromise(promise); 
*/
    const shakering = useModelProp(model, "mybar");
    
    shakering.forEach(element => console.log(element));

   return (<div className="barBox"><MyBarView addIng = {"lime"} />
               <div className="barShelf">
                  <div className = "barRow" >
                     {shakering.map(element => 
                     <MyBarElemView barIng ={element} onAdd= {(add) => model.addIngShaker(add)} />)
                     } 
                  </div>
               </div>
         </div>)
      };


export default MyBar;