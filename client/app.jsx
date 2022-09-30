import React from 'react';
import { createRoot } from 'react-dom/client';
import MyBar from './presenter/myBar.js';
import CocktailModel from './model/cocktailModel';
import ReactDOM from 'react-dom';
import './app.css';
import Shaker from './presenter/shaker.js';
import readModel from './readModel.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Switch from 'react-dom';

const model = readModel();

const App = ({ model }) => {
  return <div className='discoverBox'>
    <Shaker model={model} />
    <MyBar model={model} />
  </div>


}

//const container = document.querySelector("#app");
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App model={model}  />);


ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;