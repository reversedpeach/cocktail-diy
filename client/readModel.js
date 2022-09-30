import CocktailModel from './model/cocktailModel.js';
//import {ReadFromFirebase} from '../src/Firebase/firebaseFunc';

function readModel() {
    const modelString = localStorage.getItem("CocktailModel"); // gets the props from storage in JSON
    // If modelString is defined parse
    let modelObject = modelString ? JSON.parse(modelString) : {}; // convert JSON to object
    
    const model = new CocktailModel();
    
    /* ReadFromFirebase({model}); */
    
    //const storageobs = () => {localStorage.setItem("CocktailModel",  //sets model w prop to local storage
   //     )};

   // model.addObserver(storageobs);  
    return model;
}

export default readModel;