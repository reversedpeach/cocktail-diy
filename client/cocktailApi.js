
//import {BASE_URL, API_KEY} from './configAPI.js';
const CocktailSource = {
  apiCall(params) {
    function handleHTTPError(response) {
      if (response.ok)
        return response;
      throw Error(response.statusText);
    };


    return fetch("https://www.thecocktaildb.com/api/json/v1/1/" + params).then(handleHTTPError)

      // from headers to response data
      .then(response => response.json()).catch(console.error);
  }
  , filterCocktail(query) {
    if (query === "") {  //to prevent error from happening while setting the promise
      return null
    }
    const paramsString = "" +
      (query === undefined ? "" : "filter.php?i=" + query);

    return this.apiCall(paramsString)

      .then(data => data[0]);       // gets all the drinks as objects 

  }
  ,
  idGetCocktail(query) { // get cocktail by id 
    if (query === "") {  //to prevent error from happening while setting the promise
      return null
    }
    const paramsString = "" +
      (query === undefined ? "" : "lookup.php?i=" + query);

    return this.apiCall(paramsString)
      //data.parsed[0].food) 
      .then(data => data[0][0]);       // get the drink as an object 

  }

  , getIngredient(query) {
    if (query === "") {  //to prevent error from happening while setting the promise
      return null
    }
    const paramsString = "" +
      (query === undefined ? "" : "search.php?i=" + query);

    return this.apiCall(paramsString)

      .then(data => data.ingredients[0].strIngredient);

  }
}

export default CocktailSource;

