import React from "react";
import ReactDOM from "react-dom";

import { Dummy } from "./src/components/Dummy.jsx";
import DrinkResults from "./src/components/DrinkResults.jsx";
import SearchIngredientForm from "./src/components/SearchIngredientForm.jsx";

const App = () => {
	return (
		<div>
			{/* <SearchIngredientForm /> */}
			<DrinkResults />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#app"));
