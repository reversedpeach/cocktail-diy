import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./src/utils/css/app.css";

import HomePage from "./HomePage.jsx";

export const UserContext = createContext(null);

const globalState = {
	CurrentUser: "Rongfei", //Or an user object
	Mybar: [
		{ name: "vodka", img: " " },
		{ name: "gin", img: " " },
	],
	ShakerContent: ["vodka", "gin", "lemon"],
};

const App = () => {
	const [GlobalState, SetGlobalState] = useState(globalState);
	return (
		<div>
			<UserContext.Provider value={GlobalState}>
				<HomePage />
			</UserContext.Provider>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#app"));
