import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./src/utils/css/app.css";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
} from "react-router-dom";
import Switch from 'react-dom';

export const UserContext = createContext(null);

const App = ({ model }) => {
	return <div className='discoverBox'>
		<Shaker model={model} />
		<MyBar model={model} />
	</div>
}

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
