import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./utils/css/app.css";

import readModel from "./readModel.js";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import CommunityPage from "./pages/CommunityPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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


const model = readModel();

const App = ({ model }) => {
	return (
		<Router>
			<div>
				<div>

					<StyledNavBar>

						<StyledNavWrapEnd>
							<StyledLink to="/"> Home</StyledLink>
							<StyledLink to="/community">Community</StyledLink>
							<StyledLink to="/profile"> Profile</StyledLink>
							<StyledLink to="/login"> Login</StyledLink>
							<StyledLink to="/register"> Register </StyledLink>
						</StyledNavWrapEnd>
					</StyledNavBar>

				</div>
				<Routes>
					<Route path="/" element={<HomePage model={model} />} />
					<Route path="/profile" element={<ProfilePage model={model} />} />
					<Route path="/login" element={<LoginPage model={model} />} />
					<Route path="/register" element={<Register model={model} />} />
					<Route path="/community" element={<CommunityPage model={model} />} />
				</Routes>
			</div>
		</Router>
	);
};

ReactDOM.render(<App model={model} />, document.querySelector("#app"));

export default App;
