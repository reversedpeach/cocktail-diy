import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./utils/css/app.css";

import NavBarPresenter from "./presenter/navBarPresenter";

import CocktailModel from './model/cocktailModel.js';
import HomePage from "./presenter/HomePagePresenter";


import Login from "./presenter/loginPresenter";
import Register from "./presenter/registerPresenter";
import MyProfile from "./presenter/myProfilePresenter";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import styled from "styled-components";


const StyledLink = styled(Link)`
    text-decoration: none;
	color: grey;
	border-color:grey;
	display: flex;
	padding:2px;
	border-radius:5px;
	border:solid;
	border-color: white;
	&:hover, &:active{
		color: white;
		padding-left:10px;
		background-color:grey;
		padding:2px;
		border:solid;
		border-color:grey;
	}
`;

const StyledNavWrapEnd = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding-right: 40px;
`;

const StyledNavWrapStart = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`;

const StyledNavBar = styled.nav`
text-decoration: none;
background-color:white;
padding-top: 10px;
padding-bottom: 10px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
font-family: "Helvetica", sans-serif;
text-decoration: none;
text-align: center;
margin-left: 55px;
`;

const StyledTitle = styled.div`
text-decoration: none;
color:white;
font-size: 20px;
background-color:grey;
display: flex;
font-family: "Helvetica", sans-serif;
text-decoration: none;
text-align: center;
padding-right: 20px;

`;

localStorage.setItem("token", null);
const model = new CocktailModel();


const App = ({ model }) => {

	return (
		<Router>
			<div>
				<div>
					<NavBarPresenter model={model} />
				</div>
				<Routes>
					<Route path="/" element={<HomePage model={model} />} />
					<Route path="/profile" element={<MyProfile model={model} />} />
					<Route path="/login" element={<Login model={model} />} />
					<Route path="/register" element={<Register model={model} />} />
				</Routes>
			</div>
		</Router>
	);
};


const httpLink = createHttpLink({
	uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : "",
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});



// Supported in React 18+
const root = createRoot(document.getElementById('app'));

root.render(
	<ApolloProvider client={client}>
		<App model={model} />
	</ApolloProvider>,
);

export default App;
