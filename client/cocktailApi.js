//import {BASE_URL, API_KEY} from './configAPI.js';
const CocktailSource = {
	apiCall(params) {
		function handleHTTPError(response) {
			if (response.ok) return response;
			throw Error(response.statusText);
		}

		return (
			fetch("https://www.thecocktaildb.com/api/json/v2/9973533/" + params)
				.then(handleHTTPError)
				.then((response) => {
					return response.json();
				})
				// from headers to response data
				.catch(console.error)
		);
	},
	filterCocktail(query) {
		if (query === "") {
			//to prevent error from happening while setting the promise
			return null;
		}
		const paramsString = "" + (query === undefined ? "" : "filter.php?i=" + query);
		// console.log(paramsString);

		return this.apiCall(paramsString).then((data) => {
			// console.log(data["drinks"]);
			return data.drinks;
		}); // gets all the drinks as objects
	},
	idGetCocktail(query) {
		// get cocktail by id
		if (query === "") {
			//to prevent error from happening while setting the promise
			return null;
		}
		const paramsString = "" + (query === undefined ? "" : "lookup.php?i=" + query);

		return (
			this.apiCall(paramsString)
				//data.parsed[0].food)
				.then((data) => data.drinks[0])
		); // get the drink as an object
	},

	getIngredient(query) {
		if (query === "") {
			//to prevent error from happening while setting the promise
			return null;
		}
		const paramsString = "" + (query === undefined ? "" : "search.php?i=" + query);

		return this.apiCall(paramsString).then((data) => data.ingredients[0].strIngredient);
	},

	getAllIngredients() {
		const paramsString = "" + "list.php?i=list";

		return this.apiCall(paramsString).then((data) => data);
	},
};

export default CocktailSource;
