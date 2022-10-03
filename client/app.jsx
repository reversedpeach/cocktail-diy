import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./src/utils/css/app.css";

<<<<<<< HEAD
import HomePage from "./HomePage.jsx";
=======
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Switch from 'react-dom';
>>>>>>> 363277e9aed463d813ef7208afbb6661b9332dbc

export const UserContext = createContext(null);

<<<<<<< HEAD
const globalState = {
	CurrentUser: "Rongfei", //Or an user object
	Mybar: [
		{ name: "vodka", img: " " },
		{ name: "gin", img: " " },
	],
	ShakerContent: ["vodka", "gin", "lemon"],
};
=======
const App = ({ model }) => {
  return <div className='discoverBox'>
    <Shaker model={model} />
    <MyBar model={model} />
  </div>


}
>>>>>>> 363277e9aed463d813ef7208afbb6661b9332dbc

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

<<<<<<< HEAD
ReactDOM.render(<App />, document.querySelector("#app"));
=======

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
>>>>>>> 363277e9aed463d813ef7208afbb6661b9332dbc
