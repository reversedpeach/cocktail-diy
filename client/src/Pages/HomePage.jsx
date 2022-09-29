import React from "react";

import Navbar from "../components/Navbar.jsx";
import SearchIngredientForm from "../components/SearchIngredientForm.jsx";
import DrinkResults from "../components/DrinkResults.jsx";

export default function HomePage() {
	return (
		<div>
			<Navbar />
			<SearchIngredientForm />
			<DrinkResults />
		</div>
	);
}
