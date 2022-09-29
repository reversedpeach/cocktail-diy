
//import {BASE_URL, API_KEY} from './configAPI.js';
const CocktailSource={
    apiCall(params) {
        function handleHTTPError(response) {
            if(response.ok)
               return response;
            throw Error(response.statusText);
          };
          
          return fetch("https://www.thecocktaildb.com/images/ingredients/" + params, {
            "method": "GET",
            "mode": 'cors',
            "headers": {
            "x-api-key": "",
          }
     }).then(handleHTTPError)
     
    // from headers to response data
    .then(response => response.json()).catch(console.error);  
    }
    ,    
    getImage(query) { 
        if(query === ""){  //to prevent error from happening while setting the promise
            return null
        }
        const paramsString = "" + 
        (query === undefined ? "" : query + "-Small.png");

       return this.apiCall(paramsString) 
       //data.parsed[0].food) 
       // .then(data => data.parsed[0].food);       // leave out the unimportant parts of the response data
     
    }
    
 }; 
 
export default CocktailSource;